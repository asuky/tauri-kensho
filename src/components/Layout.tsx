import React from 'react';
import AppBar from './elms/AppBar';
import AppBarSpacer from './elms/AppBarSpacer';
/*
import {
    as _
} from '@mui/material';

export default function _(props) {
    return (<_ {...props}>{props.children}</_>);
}
*/

export default function Layout(props: any) {
    return (
        <>
            {props.children}
        </>
    );
}