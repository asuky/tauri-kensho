import Layout from "./components/Layout";
import Container from "./components/elms/Container";
import Grid from "./components/elms/Grid";

import Greet from "./components/Greet";
import FileOpen from "./components/FileOpen";
import EmitMessage from "./components/EmitMessage";
import SysInfo from "./components/SysInfo";

// TODO: union: obj | func の様子、後で書き方調べる
// https://mui.com/material-ui/customization/theming/
export default function App({ setTheme }: any) {
  return (
    <Layout>
      <Container sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Greet />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <FileOpen />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <EmitMessage />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <SysInfo />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

/*
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
*/