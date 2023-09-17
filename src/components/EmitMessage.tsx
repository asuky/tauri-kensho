import React from 'react';
import Styled from '@mui/material/styles';

import { emit } from "@tauri-apps/api/event";

import Card from "./elms/Card";
import CardHeader from "./elms/CardHeader";
import CardContent from "./elms/CardContent";
import Typography from "./elms/Typography";
import Button from './elms/Button';

// _CardName を適当な名前に変える
export default function EmitMessage() {

    async function handleOnEmitMessage(e: React.MouseEvent) {
        emit("front-to-back", "hello from front");
      }

    return (
        <Card variant="outlined">
            <CardHeader title={<Typography sx={{ fontSize: '100%', fontWeight: 'bold' }}>Emit</Typography>} />
            <CardContent sx={{ pt: 0, pb: 0 }}>
                <Typography sx={{ fontSize: '80%' }}>Core へメッセージを飛ばしてコンソールに流す</Typography>
                <Button variant="contained" onClick={handleOnEmitMessage}>Emit</Button>
            </CardContent>
        </Card>
    );
}