import React from 'react';
import { Link as _Link } from 'gatsby';

function Link(props) {
    return (<_Link {...props}>{props.children}</_Link>);
}

export default Link;