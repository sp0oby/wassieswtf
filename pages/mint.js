import Head from 'next/head'
import Web3 from "web3";
import { useState, useEffect } from 'react';

import {ADDRESS, ABI} from "../config.js"

export default function Mint() {

  // FOR WALLET
  const [signedIn, setSignedIn] = useState(false)

  const [walletAddress, setWalletAddress] = useState(null)

  // FOR MINTING
  const [how_many_wassies, set_how_many_wassies] = useState(1)

  const [wassiesContract, setWassiesContract] = useState(null)

  // INFO FROM SMART Contract

  const [totalSupply, setTotalSupply] = useState(0)

  const [saleStarted, setSaleStarted] = useState(false)

  const [wassiesPrice, setWassiesPrice] = useState(0)

  useEffect( async() => { 

    signIn()

  }, [])

  async function signIn() {
    if (typeof window.web3 !== 'undefined') {
      // Use existing gateway
      window.web3 = new Web3(window.ethereum);
     
    } else {
      alert("No Ethereum interface injected into browser. Read-only access");
    }

    window.ethereum.enable()
      .then(function (accounts) {
        window.web3.eth.net.getNetworkType()
        // checks if connected network is mainnet (change this to rinkeby if you wanna test on testnet)
        .then((network) => {console.log(network);if(network != "main"){alert("You are on " + network+ " network. Change network to mainnet or you won't be able to do anything here")} });
        let wallet = accounts[0]
        setWalletAddress(wallet)
        setSignedIn(true)
        callContractData(wallet)

  })
  .catch(function (error) {
  // Handle error. Likely the user rejected the login
  console.error(error)
  })
  }

//

  async function signOut() {
    setSignedIn(false)
  }
  
  async function callContractData(wallet) {
    // let balance = await web3.eth.getBalance(wallet);
    // setWalletBalance(balance)
    const wassiesContract = new window.web3.eth.Contract(ABI, ADDRESS)
    setWassiesContract(wassiesContract)

    const salebool = await wassiesContract.methods.saleIsActive().call() 
    // console.log("saleisActive" , salebool)
    setSaleStarted(salebool)

    const totalSupply = await wassiesContract.methods.totalSupply().call() 
    setTotalSupply(totalSupply)

    const wassiesPrice = await wassiesContract.methods.wassiesPrice().call() 
    setWassiesPrice(wassiesPrice)
   
  }
  
  async function mintWassies(how_many_wassies) {
    if (wassiesContract) {
 
      const price = Number(wassiesPrice)  * how_many_wassies

      const gasAmount = await wassiesContract.methods.mintWassiesWtf(how_many_wassies).estimateGas({from: walletAddress, value: price})
      console.log("estimated gas",gasAmount)

      console.log({from: walletAddress, value: price})

      wassiesContract.methods
            .mintWassiesWtf(how_many_wassies)
            .send({from: walletAddress, value: price, gas: String(gasAmount)})
            .on('transactionHash', function(hash){
              console.log("transactionHash", hash)
            })
          
    } else {
        console.log("Wallet not connected")
    }
    
  };

  



  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Wassies WTF</title>
        <link rel="icon" href="/images/favicon.jpg" />

        <meta property="og:title" content="Wassies WTF" key="ogtitle" />
        <meta property="og:description" content="Help us save the Wassie from extinction by adopting one of the little pes.. loveable, adorable, cute creatures. There are 2000 randomly generated Wassies waiting to be minted." key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://wassies.wtf/" key="ogurl"/>
        <meta property="og:image" content="https://wassies.wtf/images/Hola.gif" key="ogimage"/>
        <meta property="og:site_name" content="https://wassies.wtf/" key="ogsitename" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="twitter:card" content="summary_large_image" key="twcard"/>
        <meta property="twitter:domain" content="wassies.wtf" key="twdomain" />
        <meta property="twitter:url" content="https://wassies.wtf/" key="twurl" />
        <meta name="twitter:title" content="Wassies WTF" key="twtitle" />
        <meta name="twitter:description" content="Help us save the Wassie from extinction by adopting one of the little pes.. loveable, adorable, cute creatures. There are 2000 randomly generated Wassies waiting to be minted." key="twdesc" />
        <meta name="twitter:image" content="https://wassies.wtf/images/Hola.gif" key="twimage" />
      </Head>


      <div >
          <div className="flex items-center justify-between w-full border-b-2	pb-6">
            <nav className="flex flex-wrap flex-row justify-around Poppitandfinch">
              <a href="/#about" className="text-4xl text-white hover:text-black m-6">About</a>
              <a href="/mint" className="text-4xl text-white hover:text-black m-6">Mint</a>
              <a href="/#traits" className="text-4xl text-white hover:text-black m-6">Wassie Traits</a>
              <a href="/#roadmap" className="text-4xl text-white hover:text-black m-6">Roadmap</a>
              <a href="/#team" className="text-4xl text-white hover:text-black m-6">Team</a>
              <a href="https://twitter.com/wassieswtf" className="text-4xl  hover:text-white m-6 text-blau">TWITTER</a>
              <a href="https://discord.gg/DcJhqMXR" className="text-4xl  hover:text-white m-6 text-blau">DISCORD</a>
            </nav>
             
          </div>
          <div className="flex auth my-8 font-bold  justify-center items-center vw2">
            {!signedIn ? <button onClick={signIn} className="montserrat inline-block border-2 border-black bg-white border-opacity-100 no-underline hover:text-black py-2 px-4 mx-4 shadow-lg hover:bg-blue-500 hover:text-gray-100">Connect Wallet with Metamask</button>
            :
            <button onClick={signOut} className="montserrat inline-block border-2 border-black bg-white border-opacity-100 no-underline hover:text-black py-2 px-4 mx-4 shadow-lg hover:bg-blue-500 hover:text-gray-100">Wallet Connected: {walletAddress}</button>}
          </div>
        </div>

        <div className="md:w-2/3 w-4/5">
       
        
          <div className="mt-6 border-b-2 py-6">

            <div className="flex flex-col items-center">

                <span className="flex Poppitandfinch text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none my-4 ">TOTAL WASSIES MINTED:  <span className="text-blau text-6xl"> {!signedIn ?  <>-</>  :  <>{totalSupply}</> } / 2000</span></span>

                <div id="mint" className="flex justify-around  mt-8 mx-6">
                  <span className="flex Poppitandfinch text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold">CATCH</span>
                  
                  <input 
                                      type="number" 
                                      min="1"
                                      max="20"
                                      value={how_many_wassies}
                                      onChange={ e => set_how_many_wassies(e.target.value) }
                                      name="" 
                                      className="Poppitandfinch pl-4 text-4xl  inline bg-grey-lighter  py-2 font-normal rounded text-grey-darkest  font-bold"
                                  />
                  
                  <span className="flex Poppitandfinch text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold">WASSIES!</span>
    
                </div>
                {saleStarted ? 
                <button onClick={() => mintWassies(how_many_wassies)} className="mt-4 Poppitandfinch text-4xl border-6 bg-blau  text-white hover:text-black p-2 ">MINT {how_many_wassies} WASSIES FOR {(wassiesPrice * how_many_wassies) / (10 ** 18)} ETH + GAS</button>        
                  : <button className="mt-4 Poppitandfinch text-4xl border-6 bg-blau  text-white hover:text-black p-2 ">SALE IS NOT ACTIVE OR NO WALLET IS CONNECTED</button>        
            
              }
                
            </div> 
            </div>
 
          </div>  
    </div>  
    )
  }
