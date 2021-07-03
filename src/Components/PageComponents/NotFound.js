import React from 'react';
import CenteredText from '../GeneralUse/CenteredText';
import logo from "../../Images/logo.svg"
function NotFound(props) {
    return (
        <>
<CenteredText><h2 style={{marginBottom:"20px"}}>Error 404</h2>It seems like you got lost, this page is unfortunately non-existent.</CenteredText>
        </>
    );
}

export default NotFound;