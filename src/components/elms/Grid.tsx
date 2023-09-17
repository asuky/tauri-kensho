import React from 'react';
import { Grid as _Grid_ } from '@mui/material';

export default function Grid(props){
    return (
        <_Grid_ {...props}>
            {props.children}
        </_Grid_>
    );
}