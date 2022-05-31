import {React, useState} from 'react';
import {Link} from "react-router-dom"

let LinkStyle = {fontFamily:"Arial", fontWeight:"bold", fontSize:"15px", color:"#FFF", textDecoration:"none"}

export default function Footer() {
    return(
        <div className="d-flex flex-column align-items-center justify-content-center ">
        <div className="pt-5 d-flex flex-row align-items-center justify-content-center">
        <Link className="p-3 text-break" style={LinkStyle} to="/#Contact">Contact</Link>
        <Link className="p-3 text-break" style={LinkStyle} to="/#OtherProjects">Other Projects</Link>
        </div>
        <h1 className="text-break" style={{fontFamily:"Arial", fontSize:"15px", color:"#FFF"
        }}> Second Dapp / BootStrap & Moralis Use</h1>
        </div>
    )
}