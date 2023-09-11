# Tauri + React + Typescript

This template should help get you started developing with Tauri, React and Typescript in Vite.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

# メモ

## はじめに
- [基本的メモ](https://zenn.dev/kumassy/books/6e518fe09a86b2/viewer/521d6b)

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



## 資料類
- [Tauri 公式](https://docs.rs/tauri/)
- [Windows Crate](https://microsoft.github.io/windows-docs-rs/doc/windows/)
- [windows-rs 説明](https://kennykerr.ca/rust-getting-started/index.html)
- [Windows API インデックス](https://learn.microsoft.com/ja-jp/windows/win32/apiindex/windows-api-list)
- [Win オーディオスイッチャー作った話](https://qiita.com/namn1125/items/fa59ba4e499d770921db)