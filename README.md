# Tauri + React + Typescript

This template should help get you started developing with Tauri, React and Typescript in Vite.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

# メモ

## はじめに
- Windows + PowerShell + [nvm-windows](https://github.com/coreybutler/nvm-windows)
- node v18.17.1
```bash
npm i
```

### 基本
#### 起動
```bash
npm run tauri dev
```
- 記載通り UI はブラウザ上からでも見える

#### API 許可リスト
- [API 一覧](https://tauri.app/v1/api/js/)
- よく使う機能については API がある、tauri.conf.json に利用する API のカテゴリを許可記載する必要あり

#### プロセス間通信
- [emit](https://tauri.app/v1/api/js/event) を利用する
- Event は特に allowlist 設定は不要の様子

#### ファイル分割
- 基本ファイルやディレクトリがそのままモジュール名になる
```rust
mod hoge; // hoge モジュールの存在を通達
use hoge::piyo; // hoge の piyo を使う
```

## Windows 系
1. [Windows API インデックス](https://learn.microsoft.com/ja-jp/windows/win32/apiindex/windows-api-list) から、使いたい機能を探す
1. [windows-rs 説明](https://kennykerr.ca/rust-getting-started/index.html) から該当関数を探して、Cargo.toml に必要となる features を追加する
1. use してマニュアル通りに使う

### 各種情報

#### メモリ
- [GetPhysicallyInstalledSystemMemory](https://learn.microsoft.com/ja-jp/windows/win32/api/sysinfoapi/nf-sysinfoapi-getphysicallyinstalledsystemmemory)
- [windows::Win32::System::SystemInformation::GetPhysicallyInstalledSystemMemory](https://microsoft.github.io/windows-docs-rs/doc/windows/Win32/System/SystemInformation/fn.GetPhysicallyInstalledSystemMemory.html)
- wmic OS get TotalVisibleMemorySize で得られる値より大きい、wmic の結果は OS 側の予約領域を隠してる？

## 資料類
- [Tauri 公式](https://docs.rs/tauri/)
- [MS の Rust 開発概要](https://learn.microsoft.com/ja-jp/windows/dev-environment/rust/)
- [Windows Crate](https://microsoft.github.io/windows-docs-rs/doc/windows/)
- [windows-rs 説明](https://kennykerr.ca/rust-getting-started/index.html)
- [Windows API インデックス](https://learn.microsoft.com/ja-jp/windows/win32/apiindex/windows-api-list)
- [Tauri の Zenn 記事](https://zenn.dev/kumassy/books/6e518fe09a86b2/viewer/521d6b)
- [Win オーディオスイッチャー作った話](https://qiita.com/namn1125/items/fa59ba4e499d770921db)

### あとで読む
- [Bevy（ゲームエンジン）](https://github.com/bevyengine/bevy)