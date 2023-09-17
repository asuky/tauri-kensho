import React from 'react';
import Styled from '@mui/material/styles';
import Card from "../elms/Card";
import CardHeader from "../elms/CardHeader";
import CardContent from "../elms/CardContent";
import Typography from "../elms/Typography";
// import Card from "./elms/Card";
// import CardHeader from "./elms/CardHeader";
// import CardContent from "./elms/CardContent";
// import Typography from "./elms/Typography";


// _CardName を適当な名前に変える
export default function _CardName() {
    return (
        <Card variant="outlined">
            <CardHeader title={<Typography sx={{ fontSize: '100%', fontWeight: 'bold' }}>TITLE</Typography>} />
            <CardContent sx={{ pt: 0, pb: 0 }}>
                <Typography sx={{ fontSize: '80%' }}>説明</Typography>

            </CardContent>
        </Card>
    );
}