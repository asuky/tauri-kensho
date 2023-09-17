import React from 'react';
import { Typography as _Typography_ } from '@mui/material';

export default function Typography(props){
    return (
        <_Typography_ {...props}>
            {props.children}
        </_Typography_>
    );
}