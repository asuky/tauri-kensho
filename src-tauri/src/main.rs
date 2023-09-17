// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::Manager;

mod commands;
use commands::*;
// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let id = app.listen_global("front-to-back", |event|{
                println!("got front-to-back with payload {:?}", event.payload().unwrap())
            });
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![greet, beep, get_sys_info])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
