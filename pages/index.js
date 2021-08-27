import Head from 'next/head'

export default function Home() {

  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Wassies WTF</title>
        <link rel="icon" href="/images/favicon.jpg" />
        <meta name="viewport"content="width=device-width, initial-scale=1.0" />
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
              <a href="#about" className="text-4xl text-white hover:text-white m-6">About</a>
              <a href="/mint" className="text-4xl text-white hover:text-white m-6">Mint</a>
              <a href="#traits" className="text-4xl text-white hover:text-white m-6">Wassie Traits</a>
              <a href="#roadmap" className="text-4xl text-white hover:text-white m-6">Roadmap</a>
              <a href="#team" className="text-4xl text-white hover:text-white m-6">Team</a>
              <a href="https://twitter.com/wassieswtf" className="text-4xl  hover:text-white m-6 text-blau">TWITTER</a>
              <a href="https://discord.gg/WKBSfPaU" className="text-4xl  hover:text-white m-6 text-blau">DISCORD</a>
            </nav>
             
          </div>
          
        </div>

        <div className="md:w-2/3 w-4/5 " id="about">
       
        
          <div className="mt-6 border-b-2 py-6">
            <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
                  <div className="lg:w-1/2 w-3/4">
                    <h1 className="text-6xl Poppitandfinch text-white ">Crypto<span className="text-blau"> Twitter</span></h1>
                    <p className="text-2xl text-white my-6  montserrat">has been blessed with the presence of these little shi..., I mean <span className="text-5xl Poppitandfinch ">WASSIES!</span> <span className="text-blau text-5xl Poppitandfinch">WASSIES</span> <span className="text-5xl Poppitandfinch">sadly</span>  <span className="text-span-2 font-bold">only have a fourty day lifespan (yeah, seriously)</span>.<br />‍<br />But, we&#x27;ve found a way to extended their mischievous, degenerate lives on the <br/>‍<span className="text-blau text-5xl Poppitandfinch">blockchain! </span> <br/>
                    </p>
                    <p className="text-2xl text-white my-6  montserrat">
                    <strong>LAUNCH DATE:</strong> 21 August 2021. 2pm EST <br />‍
                    <span className="text-white text-2xl montserrat"><strong>TOTAL SUPPLY: 2000</strong> Wassies<br/><strong>PRICE: 0.02 ETH </strong>each.</span></p>
                    <iframe src="https://free.timeanddate.com/countdown/i7vcex5b/n107/cf11/cm0/cu4/ct0/cs1/ca2/co0/cr0/ss0/cacfff/cpcfff/pct/tcfff/fn3/fs100/szw448/szh189/iso2021-08-21T21:00:00" allowtransparency="true" frameBorder="0" width="425" height="25"></iframe>

                  </div>
                  <img className="lg:w-1/2 w-3/4" src="images/hola.png" width="500px" />
            </div>
            <div className="flex flex-col items-center">

            <a href="/mint" className="mt-4 Poppitandfinch text-4xl border-6 bg-blau  text-white hover:text-black p-2 ">GO TO MINTING PAGE!</a>
                
                
            </div> 
            </div>



    

                <div id="traits" className="flex flex-wrap justify-around items-center  mx-6 py-6">
                  <div className="border-4 border-blue-300 p-4"><img src="images/hola.gif" alt="" width="400px" className="feature-image"/></div>
                  <div className="flex flex-col justify-between mx-6 sm:w-1/2 w-4/5 py-6 ">
                    <h2 className="text-blau Poppitandfinch text-7xl text-center">WASSIES IN DISGUISE</h2>
                    <p className="text-xl text-white my-6  montserrat"> Today, the lifespan of a Wassie is only fourty days.<span className="font-bold"> Our scientists have found a way to extend their lives.</span> While in the lab, more than 2,000 Wassies escaped <span className="font-bold">and continued their degenerate ways. </span>They have been spotted all over <span className="font-bold"> the cryptosphere. </span> Our team has worked very hard to find them, but they have taken disguise. <span className="font-bold"> Please help catch </span> them in your wallet.  
                    </p>
                    <p className="text-xl text-white my-6  montserrat"> *DISCLAIMER* Wassies are dangerous creatures spawned from the depths of Crypto Twitter and should not be held, petted, fed, or kept near children.
                    </p>
                    <p className="text-xl text-white my-6  montserrat"> Some are known to carry weapons and disguise themselves as humans. Many think they are relevent.
                    </p>
                    <p className="text-xl text-white my-6  montserrat"> If you see a Wassie in the wild (or your fridge) you are obligated to kill it by any means necessary.
  
                    </p>
                  </div>
                </div>

              <div id="roadmap" className="">    
              <h2 className="text-7xl text-center Poppitandfinch text-blau my-6">ROADMAP</h2>
              <ul className="">
                <li className="text-xl text-white my-6  montserrat"><span className="font-bold"> 20% ETH Donation / 100% Minted: </span> This donation will be made to <a target="_blank" href="https://www.autismspeaks.org/" className="underline text-blau font-bold">Autism Speaks</a>, who is working to create a kinder, <span className="font-bold">  </span> more inclusive world for people with autism. Proof of transaction will be linked.</li>
                <li className="text-xl text-white my-6  montserrat"><span className="font-bold"> Wassie Holders Channel: </span> Holders of WASSIES will be able to join a special Discord channel to access upcoming projects.</li>
                <li className="text-xl text-white my-6  montserrat"><span className="font-bold"> Meme Contest: </span> WASSIES NFT holders will be eligible to participate in meme contest for WASSIES and ETHERUEM prizes.</li>
                <li className="text-xl text-white my-6  montserrat"><span className="font-bold"> Community Engagement: </span> Grow the community via Crypto Twitter influencers to increase trade volume (20% donated to charity monthly).</li>
              </ul>


              </div>
              
              <div id="team" className="mx-12 my-16 ">
                <h2 className="text-7xl text-center Poppitandfinch text-blau my-4">WASSIES DREAM TEAM</h2>
                <div className="flex justify-around flex-wrap">
                  <div className="flex flex-col  my-6" style={{width:"360px"}}>
                    <div className="cards-image-mask"><img src="/images/j.png" width="360px" alt="" className="cards-image" /></div>
                    <h3 className="my-4 text-center text-5xl text-center Poppitandfinch text-blau">Jay</h3>
                    <h2 className="text-center text-4xl text-center Poppitandfinch underline text-white"> ARTIST</h2>
                  </div>
                  <div className="flex flex-col  my-6" style={{width:"360px"}}>
                    <div className="cards-image-mask"><img src="/images/b.png" width="360px" alt="" className="cards-image" /></div>
                    <h3 className="my-4 text-center text-5xl text-center Poppitandfinch text-blau">Bee</h3>
                    <h2 className="text-center text-4xl text-center Poppitandfinch underline text-white">DEV</h2>        </div>
                  
                
                </div>
       


              </div>   

          </div>  
    </div>  
    )
  }
