import {INFURA_ADDRESS, ADDRESS, ABI} from "../../config.js"
import Web3 from "web3";

// import the json containing all metadata. not recommended, try to fetch the database from a middleware if possible, I use MONGODB for example
import traits from "../../database/traitsfinal.json";

const infuraAddress = INFURA_ADDRESS

const wassiesApi = async(req, res) => {

    // SOME WEB3 STUFF TO CONNECT TO SMART CONTRACT
  const provider = new Web3.providers.HttpProvider(infuraAddress)
  const web3infura = new Web3(provider);
  const wassiesContract = new web3infura.eth.Contract(ABI, ADDRESS)
  


  // IF YOU ARE USING INSTA REVEAL MODEL, USE THIS TO GET HOW MANY NFTS ARE MINTED
   const totalSupply = await wassiesContract.methods.totalSupply().call();
   console.log(totalSupply)
  


// THE ID YOU ASKED IN THE URL
  const query = req.query.id;


  // IF YOU ARE USING INSTA REVEAL MODEL, UNCOMMENT THIS AND COMMENT THE TWO LINES BELOW
  if(parseInt(query) < totalSupply) {
  //const totalBananas = 8888;
  //if(parseInt(query) < totalBananas) {


    // CALL CUSTOM TOKEN NAME IN THE CONTRACT
    //const tokenNameCall = await bananaContract.methods.bananaNames(query).call();
    //let tokenName = `#${query}${(tokenNameCall === '') ? "" : ` - ${tokenNameCall}`}`

    // IF YOU ARE NOT USING CUSTOM NAMES, JUST USE THIS
     let tokenName= `#${query}`

    
    
    const signatures = [1000,1999]
    const trait = traits[parseInt(query)]
    //const trait = traits[ Math.floor(Math.random() * 2000) ] // for testing on rinkeby 

    // CHECK OPENSEA METADATA STANDARD DOCUMENTATION https://docs.opensea.io/docs/metadata-standards
    let metadata = {}
    // IF THE REQUESTED TOKEN IS A SIGNATURE, RETURN THIS METADATA
    if (signatures.includes(parseInt(query))) {
    
      metadata = {
        "name": tokenName,
        "description": "Help us save the Wassie from extinction by adopting one of the little pes.. loveable, adorable, cute creatures. There are 2000 WASSIES roaming across the cryptosphere. They MUST be stopped. Please beware! WASSIES are in disguise and are DANGEROUS.",
        "tokenId" : parseInt(query),
        "image": `https://gateway.pinata.cloud/ipfs/${trait["imagesIPFS"]}`,
        "external_url":"https://www.wassies.wtf",
        "attributes": [   
          {
            "trait_type": "Signature Series",
            "value": trait["Signature Series"]
          }    
        ]
      }
      // console.log(metadata)
    } else {
    // GENERAL BANANA METADATA
      metadata = {
        "name": tokenName,
        "description": "Help us save the Wassie from extinction by adopting one of the little pes.. loveable, adorable, cute creatures. There are 2000 WASSIES roaming across the cryptosphere. They MUST be stopped. Please beware! WASSIES are in disguise and are DANGEROUS.",
        "tokenId" : parseInt(query),
        "image": `https://gateway.pinata.cloud/ipfs/${trait["imagesIPFS"]}`,
        "external_url":"https://www.wassies.wtf",
        "attributes": [          
          {
            "trait_type": "Background",
            "value": trait["background"]
          },
          {
            "trait_type": "Body",
            "value": trait["body"]
          },
          {
            "trait_type": "Shirt",
            "value": trait["shirt"]
          },
          {
            "trait_type": "Face",
            "value": trait["face"]
          },
          {
            "trait_type": "Weapon",
            "value": trait["weapon"]
          }
    
        ]
      }
      
       //console.log(metadata)

    }
    
    res.statusCode = 200
    res.json(metadata)
  } else {
    res.statuscode = 404
    res.json({error: "The banana you requested is out of range"})

  }


  // this is after the reveal

  
}

export default wassiesApi
