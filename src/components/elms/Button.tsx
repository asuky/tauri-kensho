import React from 'react';
import {
    Button as _Button
} from '@mui/material';

export default function Button(props: any) {
    return (<_Button {...props}>{props.children}</_Button>);
}