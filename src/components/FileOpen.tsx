import React, { useState } from 'react';
import Styled from '@mui/material/styles';

import { invoke } from '@tauri-apps/api/tauri';
import { open } from '@tauri-apps/api/dialog';

import Card from "./elms/Card";
import CardHeader from "./elms/CardHeader";
import CardContent from "./elms/CardContent";
import Typography from "./elms/Typography";
import Button from './elms/Button';

// _CardName を適当な名前に変える
export default function FileOpen() {

    const [filepath, setFilepath] = useState("");

    async function handleOpenButtonClick(e: React.MouseEvent) {
        open().then(files => setFilepath(files));
        await invoke("beep");
    }

    return (
        <Card variant="outlined">
            <CardHeader title={<Typography sx={{ fontSize: '100%', fontWeight: 'bold' }}>File Open Dialogue</Typography>} />
            <CardContent sx={{ pt: 0, pb: 0 }}>
                <Typography sx={{ fontSize: '80%' }}>ファイルオープンダイアログ、パスが取れるので後は適当になんかやる</Typography>
                <Typography sx={{ fontSize: '50%', fontWeight: 'bold' }}>{filepath}</Typography>
                <Button variant="contained" onClick={handleOpenButtonClick}>Dialog</Button>
            </CardContent>
        </Card>
    );
}