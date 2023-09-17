import React from 'react';
import { Container as _Container_ } from '@mui/material';

export default function Container(props){
    return (
        <_Container_ {...props}>
            {props.children}
        </_Container_>
    );
}