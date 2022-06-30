import React from "react";

function Footing(){
    const yr=new Date().getFullYear();
    return <footer>
        <p>© Anurag Dubey {yr}</p>
    </footer>
}

export default Footing;