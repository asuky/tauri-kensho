import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import { open } from "@tauri-apps/api/dialog";
import { emit } from "@tauri-apps/api/event";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");
  const [filepath, setFilepath] = useState("");
  const [memValue, setMemValue] = useState(null);

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  async function handleOpenButtonClick(e: React.MouseEvent) {
    open().then(files => console.log(files))
  }

  async function handleOnEmitMessage(e: React.MouseEvent) {
    emit("front-to-back", "hello from front");
  }

  async function beep() {
    await invoke("beep");
  }

  async function getmem() {
    setMemValue(await invoke("getMem"));
  }

  return (
    <div className="container">
      <h1>Welcome to Tauri!</h1>

      <div className="row">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Greet</button>
      </form>

      <p>{greetMsg}</p>

      <button onClick={(e) => handleOpenButtonClick(e)} style={{width: '15%'}}>Open Dialogue</button>
      <p>{filepath}</p>

      <button onClick={(e) => handleOnEmitMessage(e)}>Msg</button>

      <button onClick={beep}>Beep</button>
      <button onClick={getmem}>Get Mem</button>
      <p>Mem Value: {memValue}</p>
    </div>
  );
}

export default App;
