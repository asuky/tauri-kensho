use tauri::command;

use windows::Win32::System::Diagnostics::Debug::MessageBeep;
use windows::Win32::UI::WindowsAndMessaging::MB_OK;
use windows::Win32::System::SystemInformation::GetPhysicallyInstalledSystemMemory;

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

#[command]
pub fn getMem() -> u64 {
    let mut memValue: u64 = 0;
    unsafe {
        GetPhysicallyInstalledSystemMemory(&mut memValue);
    }
    return memValue;
}
