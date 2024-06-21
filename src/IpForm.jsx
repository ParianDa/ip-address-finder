import React, { useState } from "react";

export default function IpForm() {
    const [inputIp, setInputIp] = useState("")

    function handleChange(event) {
        setInputIp(event.target.value)
    }

    function handleClick() {
        const format = "json"
        fetch(`https://ipapi.co/${inputIp}/${format}/`)
             .then(response => response.json())
             .then(data => console.log(data))
    }

    return (
        <div>
            <h2>Ip Address Finder</h2>
            <br/>
            Output : <h3>{inputIp}</h3>
            <input type="search" placeholder="search for ip" onChange={handleChange} value={inputIp} className="search-bar"/>
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}