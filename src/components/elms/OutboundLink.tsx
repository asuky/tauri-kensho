import React from 'react';
import { OutboundLink as _OutboundLink } from 'gatsby-plugin-gtag';
/*
import {
    as _
} from '@mui/material';

export default function _(props) {
    return (<_ {...props}>{props.children}</_>);
}
*/

export default function OutboundLink(props)
{
    return (<_OutboundLink {...props}>{props.children}</_OutboundLink>);
}