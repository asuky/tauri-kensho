use std::ffi::c_void;

use tauri::command;

use windows::Win32::System::Diagnostics::Debug::MessageBeep;
use windows::Win32::UI::WindowsAndMessaging::MB_OK;
use windows::Win32::System::SystemInformation::GetPhysicallyInstalledSystemMemory;
use windows::core:: { PCWSTR, Error, IntoParam, w };
use windows::Win32::System::Registry::{ HKEY, HKEY_LOCAL_MACHINE, RRF_RT_ANY, RRF_RT_REG_SZ, KEY_QUERY_VALUE, REG_SAM_FLAGS, RegGetValueW, REG_SZ, REG_VALUE_TYPE };


#[command]
pub fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[command]
pub fn beep() {
    unsafe {
        let _ = MessageBeep(MB_OK);
    }
}

// https://github.com/microsoft/windows-rs/issues/1499
// https://stackoverflow.com/questions/69772938/how-to-allocate-memory-for-reggetvaluew-via-the-windows-crate-for-rust
#[command]
pub fn get_sys_info() {
    unsafe {
  
        let mut value: Vec<u16> = vec![0; 64];
    
        let mut my_size: u32 = (std::mem::size_of::<u16>() * value.len()) as u32;
        let size = &mut my_size as *mut u32;

        // 型の相互変換とかも見たが、多分 PCWSTR に変えるときに null-terminated してないと
        // ダメなのかも。Rust は null-terminated じゃなくて別途管理とのこと。
        // https://qiita.com/legokichi/items/0f1c592d46a9aaf9a0ea
        let subkey = "HARDWARE\\DESCRIPTION\\System\\CentralProcessor\\0";
        let mut subkey_u16: Vec<u16> = subkey.encode_utf16().collect();
        subkey_u16.push(0);

        let keyname = "ProcessorNameString";
        let mut keyname_u16: Vec<u16> = keyname.encode_utf16().collect();
        keyname_u16.push(0);
    
        let result = RegGetValueW(
            HKEY_LOCAL_MACHINE,
            PCWSTR::from_raw(subkey_u16.as_ptr() as *const u16),
            PCWSTR::from_raw(keyname_u16.as_ptr() as *const u16),
            RRF_RT_ANY,
            Some(std::ptr::null_mut()), // Doesn't allow None
            Some(value.as_mut_ptr() as *mut c_void),
            Some(size)
        );
    
        println!("Result: {:?}", result);
        println!("Value data: {:?} ({:?})", String::from_utf16(&value).unwrap(), *size);
        // Result: LSTATUS(234)         // 234 = ERROR_MORE_DATA, so pvData is not large enough
        // Value data: [0, 0, ...] (14) // 14 is peculiar given the C++ size reports 12
    }
}


/*
#[command]
pub fn get_sys_info() -> u64 {
    let mut memValue: u64 = 0;
    let cpuValue: PCWSTR = PCWSTR::null();
    //let keystr = ;
    //let keystr_ptr: *const u16 = keystr.as_ptr() as *const u16;
    //let key = PCWSTR::from_raw(keystr_ptr);
    let subkey = PCWSTR::from_raw("HARDWARE\\DESCRIPTION\\System\\CentralProcessor\\0".as_ptr() as *const u16);
    let key_name= PCWSTR::from_raw("ProcessorNameString".as_ptr() as *const u16);
    //let mut data: Option<*mut REG_VALUE_TYPE> = None;
    let mut value: Vec<u16> = vec![0; 64];
    let mut value_size: u32 = 0;
    let size = &mut value_size as *mut u32;

    unsafe {
        // RRF_RT_ANY & KEY_QUERY_VALUE
        let ret = match RegGetValueW(
            HKEY_LOCAL_MACHINE,
            subkey,
            key_name, 
            RRF_RT_REG_SZ,
            None,
            Some(value.as_mut_ptr() as *mut c_void),
            Some(size)
        ) {
            Ok (val) => val,
            Err (e) => { println!("{}: {}", e.code(), e.message()); }
        };
        GetPhysicallyInstalledSystemMemory(&mut memValue);
        //println!("cpuValue: {}", cpuValue.to_string().unwrap());
        
    }
    println!("memValue: {}", memValue);
    return memValue;
}*/

/*
#[command]
pub fn getSysInfo() -> u64 {
    let mut memValue: u64 = 0;
    unsafe {
        GetPhysicallyInstalledSystemMemory(&mut memValue);
    }
    return memValue;
}
 */