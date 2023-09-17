import React, { useState } from 'react';

import { invoke } from '@tauri-apps/api/tauri';

import Styled from '@mui/material/styles';
import Card from "./elms/Card";
import CardHeader from "./elms/CardHeader";
import CardContent from "./elms/CardContent";
import Typography from "./elms/Typography";
import Button from './elms/Button';
import TextField from './elms/TextField';

// _CardName を適当な名前に変える
export default function Greet() {

    const [name, setName] = useState("");
    const [greetMsg, setGreetMsg] = useState("");
    async function greet() { setGreetMsg(await invoke("greet", { name })); }

    return (
        <Card variant="outlined">
            <CardHeader title={<Typography sx={{ fontSize: '100%', fontWeight: 'bold' }}>WebView to Core</Typography>} />
            <CardContent sx={{ pt: 0, pb: 0 }}>
                <Typography sx={{ fontSize: '80%' }}>Core 側へメッセージを送る（サンプルのもの）</Typography>
                <TextField size="small" onChange={(e: Event) => setName(e.currentTarget.value)} value={name} />
                <Button variant="contained" onClick={greet}>Greet</Button>
                <Typography>{greetMsg}</Typography>
            </CardContent>
        </Card>
    );
}