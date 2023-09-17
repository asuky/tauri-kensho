import React from 'react';

import {
    TextField as _TextField
} from '@mui/material';

export default function TextField(props :any) {
    return (<_TextField {...props}>{props.children}</_TextField>);
}