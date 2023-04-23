import { Typography, Box, TextField, Button } from "@mui/material";
import { useState } from "react";
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

  const handleVerify = () => {
    // create a new Web3 instance
    const web3 = new Web3();

    // Define the message to be signed
    const message = 'Hello, World!';

    // Calculate the Ethereum address from the private key
    const address = web3.eth.accounts.privateKeyToAccount(privateKey).address;

    // Sign the message with the private key
    const signature = web3.eth.accounts.sign(message, privateKey);
    console.log(signature)

    // Verify the signature using the Ethereum address
    const verifiedAddress = web3.eth.accounts.recover(message, signature.signature);

    // Check if the verified address matches the original address
    if (verifiedAddress === address) {
      console.log('Signature verified successfully!');

      // Recover the original message from the signed message and the signature
      const recoveredMessage = web3.eth.accounts.hashMessage(signature.message);
      console.log(`Original message: ${recoveredMessage}`);
    } else {
      console.log('Failed to verify signature.');
    }
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