import { Typography, Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import { sha256 } from "js-sha256";
import CopyToClipboard from "react-copy-to-clipboard";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneIcon from '@mui/icons-material/Done';

function App() {
  const [mainPub, setMainPub] = useState("")
  const [subPub, setSubPub] = useState("")
  const [pass, setPass] = useState("")
  const [authHash, setAuthHash] = useState("")
  const [copied, setCopied] = useState(false)

  const handleChangeMainPub = (e) => {
    setMainPub(e.target.value)
  }

  const handleChangeSubPub = (e) => {
    setSubPub(e.target.value)
  }

  const handleChangePass = (e) => {
    setPass(e.target.value) 
  }

  const genAuthHash = () => {
    setAuthHash(sha256(mainPub.concat(subPub, pass)))
    setCopied(false)
  }

  const handleCopyHash = () => {
    setCopied(true)
  }

  return (
    <div className="App">
     <Typography variant="h5" sx={{textAlign: "center"}} pb={3}>Extension</Typography>
     <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}} pb={3}>
      <Typography variant="body1" sx={{width: "90px"}}>Main Public</Typography>
      <TextField id="outlined-basic" variant="outlined" sx={{width: "180px", marginLeft: "20px"}} value={mainPub} onChange={handleChangeMainPub}/>
     </Box>
     <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}} pb={3}>
      <Typography variant="body1" sx={{width: "90px"}}>Sub Public</Typography>
      <TextField id="outlined-basic" variant="outlined" sx={{width: "180px", marginLeft: "20px"}} value={subPub} onChange={handleChangeSubPub}/>
     </Box>
     <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}} pb={3}>
      <Typography variant="body1" sx={{width: "90px"}}>Password</Typography>
      <TextField id="outlined-basic" variant="outlined" sx={{width: "180px", marginLeft: "20px"}} value={pass} onChange={handleChangePass}/>
     </Box>
     <Button variant="contained" sx={{margin: "0 auto", marginBottom:"10px", display: "block"}} onClick={genAuthHash}>Generate AuthHash</Button>
     {authHash ?<Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Typography variant="body2" sx={{textAlign: "center"}}>{authHash.substring(0, 35)}...</Typography>
        <CopyToClipboard text={authHash}>
          {copied ? <DoneIcon/> : <ContentCopyIcon sx={{marginLeft: "10px"}} onClick={handleCopyHash}/>}
        </CopyToClipboard>
      </Box>  : ""}
    </div>
  );
}

export default App;
