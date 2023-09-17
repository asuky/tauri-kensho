import React from 'react';
import { Box as _Box_ } from '@mui/material';

export default function Box(props){
    return (
        <_Box_ {...props}>
            {props.children}
        </_Box_>
    );
}