import React from 'react';

import { invoke } from "@tauri-apps/api/tauri";

import Button from './elms/Button';
import Card from "./elms/Card";
import CardHeader from "./elms/CardHeader";
import CardContent from "./elms/CardContent";
import Typography from "./elms/Typography";


// _CardName を適当な名前に変える
export default function SysInfo() {

    const [sysInfo, setSysInfo] = React.useState({});
    async function getSysInfo() {
        setSysInfo(await invoke("get_sys_info"));
        console.log(sysInfo);
    }
    


    return (
        <Card variant="outlined">
            <CardHeader title={<Typography sx={{ fontSize: '100%', fontWeight: 'bold' }}>Sysinfo</Typography>} />
            <CardContent sx={{ pt: 0, pb: 0 }}>
                <Typography sx={{ fontSize: '80%' }}>機器情報を取得してみる</Typography>
                <Button variant="contained" onClick={getSysInfo}>取得</Button>
            </CardContent>
        </Card>
    );
}