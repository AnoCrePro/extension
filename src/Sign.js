import { Typography, Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import { generateProof } from "./utils/circuit";
const Web3 = require('web3');


const Sign = () => {
  const [privateKey, setPrivateKey] = useState("")
  const [message, setMessage] = useState("")
  const [publicKey, setPublickey] = useState("")
  const [copied, setCopied] = useState(false)

  const handleChangePrivateKey = (e) => {
    setPrivateKey(e.target.value)
  }

  const handleChangeMessage = (e) => {
    setMessage(e.target.value)
  }

  const handleChangePublicKey= (e) => {
    setPublickey(e.target.value) 
  }

  const handleVerify = async () => {
    // // create a new Web3 instance
    // const web3 = new Web3();

    // // Define the message to be signed
    // const message = 'Hello, World!';

    // // Calculate the Ethereum address from the private key
    // const address = web3.eth.accounts.privateKeyToAccount(privateKey).address;

    // // Sign the message with the private key
    // const signature = web3.eth.accounts.sign(message, privateKey);
    // console.log(signature)

    // // Verify the signature using the Ethereum address
    // const verifiedAddress = web3.eth.accounts.recover(message, signature.signature);

    // // Check if the verified address matches the original address
    // if (verifiedAddress === address) {
    //   console.log('Signature verified successfully!');

    //   // Recover the original message from the signed message and the signature
    //   const recoveredMessage = web3.eth.accounts.hashMessage(signature.message);
    //   console.log(`Original message: ${recoveredMessage}`);
    // } else {
    //   console.log('Failed to verify signature.');
    // }
    let input = {
      "mainPub": "0x58DB2D72371027f54765220BB18f51fd4f3b4cc5",
      "subPub": "0x8fb4098d403A64b3b01123C5bA6d12a667089de1",
      "userInfo": "0509",
      "authHash": "20399428837619545360851582194187840573075746779966594682742826792586463356443",
      "creditScore": "300",
      "timestamp": "1680855954",
      "root": "18381576242222793511439148291204524041677320484807580851866313955116231621950",
      "signature": "123",
      "verifyTimestamp": "1680846047",
      "condition": "200",
      "direction": [
        "0",
        "0",
        "1",
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
        "0"
      ],
      "siblings": [
        "11056303290608053757818338497378185224650847831866986213648148921604549528104",
        "13447473568237336080074287553509134876367934983960183584021950401858483893251",
        "16790543712951769424656518194552057037574035676573090050981507593007263923979",
        "14063455937974548900872691027359863780957115961291619089556330030363488392631",
        "13857816604511831810517629530423610449421423363537958799326257374087605277870",
        "6480711540876681417383410989862467987942647390103139587725680301164240274179",
        "354021821267339480895939267509344031823067628705396150800992434172021849626",
        "16305143181776598917943622339422723906462704871064520017905791744434882600713",
        "14184538841128403852934117483846418405664320175389851061243618270022249715246",
        "10938074564067287569302907141973550282855168941903417199894239143550937177131",
        "20168251435414330307687674348910157372509387505713490583459353179001780709258",
        "13400025793226212375662955427306016010640458341635704679802194566816239188647",
        "12736037348599195994779288726511227557116430465462718704386796501080660932672",
        "1334547403028978828968275858869624258655091058301513515371869808350537103281",
        "8079579843320771712414658655315067918775449720880526741714688042849987809856",
        "19505389520909694285488574212859051141998753746198574972347996388170418626987"
      ]
    }
    let res = await generateProof(input)
    console.log(res)
  }

  return (
    <div className="App">
     <Typography variant="h5" sx={{textAlign: "center"}} pb={3}>Extension</Typography>
     <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}} pb={3}>
      <Typography variant="body1" sx={{width: "90px"}}>Private Key</Typography>
      <TextField id="outlined-basic" variant="outlined" sx={{width: "180px", marginLeft: "20px"}} value={privateKey} onChange={handleChangePrivateKey}/>
     </Box>
     <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}} pb={3}>
      <Typography variant="body1" sx={{width: "90px"}}>Message</Typography>
      <TextField id="outlined-basic" variant="outlined" sx={{width: "180px", marginLeft: "20px"}} value={message} onChange={handleChangeMessage}/>
     </Box>
     <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}} pb={3}>
      <Typography variant="body1" sx={{width: "90px"}}>Public Key</Typography>
      <TextField id="outlined-basic" variant="outlined" sx={{width: "180px", marginLeft: "20px"}} value={publicKey} onChange={handleChangePublicKey}/>
     </Box>
     <Button variant="contained" sx={{margin: "0 auto", marginBottom:"10px", display: "block"}} onClick={handleVerify}>Sign And Verify</Button>
     {/* {authHash ?<Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Typography variant="body2" sx={{textAlign: "center"}}>{authHash.substring(0, 35)}...</Typography>
        <CopyToClipboard text={authHash}>
          {copied ? <DoneIcon/> : <ContentCopyIcon sx={{marginLeft: "10px"}} onClick={handleCopyHash}/>}
        </CopyToClipboard>
      </Box>  : ""} */}
    </div>
  )
}

export default Sign