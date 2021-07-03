import React from 'react';

function CenteredText(props) {
    return (
        <div style={{position: "fixed", top: 0, display: "flex", height: "100vh", width: "100vw", padding: "2.5vh", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
            <p style={{marginBottom: "20px", textAlign: "center"}}>{props.children}
            </p>
        </div>
    );
}

export default CenteredText;