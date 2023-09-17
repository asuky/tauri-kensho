import React from 'react';
import { Avatar as _Avatar_ } from '@mui/material';

export default function Avatar(props){
    return (
        <_Avatar_ {...props}>
            {props.children}
        </_Avatar_>
    );
}