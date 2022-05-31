import {React, useState, useEffect} from 'react'
import logo from '../logo.svg';
import {ListGroup,} from "react-bootstrap"
import { ethers } from "ethers";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMoralisWeb3Api } from "react-moralis";
import {useGlobal} from "reactn"
import Navbar from './Navbar'


let styleListItem = {backgroundColor:"#2a2b34", fontFamily:"Roman", fontSize:"15px", color:"#FFF"}
let styleHeader = {fontFamily:"Arial", fontWeight:"bold", fontSize:"15px", color:"#FFF"}
let styleHeader2 = {fontFamily:"Arial", fontWeight:"", fontSize:"15px", color:"#FFF"}
let styleContainer = {backgroundColor:"", width:'100%'}
let styleListGroup = {backgroundColor:"#2a2b34"}
let styleContainer2 = {backgroundColor:"#3a4859", width:'80%'}
let styleContainer3 = {backgroundColor:"#2a2b34", width:'100%'}


export default function Wallet() {
    var[Account] = useGlobal('');
    var[Balance, setBalance] = useState(0)
    var[BalanceUSD, setBalanceUSD] = useState(0)

    const Web3Api = useMoralisWeb3Api();

    const fetchTokenPrice = async () => {
    //Get token price on PancakeSwap v2 BSC
    const options = {
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    };
    const price = await Web3Api.token.getTokenPrice(options)
    const eth_price = ethers.utils.formatEther(price.nativePrice.value)
    setBalanceUSD(Balance / eth_price)
};

    const fetchNativeBalance = async () => {
        // get mainnet native balance for the current user
        const options = {
            address: Account,
            };
        const balanceWEI = await Web3Api.account.getNativeBalance(options);
        const balance = ethers.utils.formatEther(balanceWEI.balance)
        setBalance(balance);}

        useEffect(() => {fetchNativeBalance()
            fetchTokenPrice()})


    return(
    
    <div className="pt-5 pb-5" style={styleContainer}>
    <div className="d-flex flex-column align-items-center justify-content-center" style={styleContainer}>
    <div className="d-flex flex-column align-items-center justify-content-center m-5 p-1 rounded-3  w-80" style={styleContainer2}>
    <div className="d-flex flex-column align-items-center text-justify justify-content-center rounded-3" style={styleContainer3}>
    <h3 className="pt-3 badge badge-primary text-wrap" style={styleHeader}>Public address</h3>
    <h3 className="badge badge-primary text-wrap text-break"style={styleHeader2}>{Account}</h3>
    </div>
    <ListGroup className="mt-1 w-100" style={styleListGroup}>
        <ListGroup.Item className="m-1 d-flex align-items-center justify-content-center text-break" style={styleListItem}>{Balance} ETH
        <img
        className=""
        src={logo}
            width="30"
            height="30"
            alt="React Bootstrap logo">
        </img>
       ({BalanceUSD} USD)</ListGroup.Item>
    </ListGroup>
    </div>
    </div>

    </div>
    )
}