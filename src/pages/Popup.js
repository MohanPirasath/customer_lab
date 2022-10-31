import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import SelectTextFields from "./Scrolldoswn.js"
import { useState } from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import "./ViewPage.css"
import Chip from '@mui/material/Chip';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function ResponsiveDialog() {
    const Api = "https://webhook.site/ec2de894-5be4-4b98-8578-ad90c19555f6"
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const [inputcount,addcount]=useState([{now:"account_name"}])
  const [input,addinput]=useState([{now:"account_name"}])
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [sName,setsName]=useState("")

  let Result=[]

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Addsegment =()=>{
    addcount([...inputcount,{Addsegment:""}])
  }
 const Removesegment = (index)=>{
    const List = [...inputcount]
    List.splice(index,1)
    addcount(List)
 }

const Expose =async()=>{
    try{

        const fet = await fetch(`${Api}`,{
            mode:'no-cors',
            method:"POST",
            body:JSON.stringify({
                "segment_name":sName,
                "schema":Result
              
             
            }),
            headers:{
                // "access-control-allow-origin" : "*",
              "Content-type":"application/json",
            },
          });
          console.log(fet)
    }catch(err){
        console.log(err)
    }
}


 const Save=()=>{
    
    return(
        // console.log(input),
        // console.log(sName),
        input.map((e)=>{
        //    console.log("e",e)
           if(e.now=='account_name'){
            // setAcc(true)
           Result.push({account_name:"Account Name"})
        //    console.log("acc",Result.account_name)
        //    console.log("ac",Result)
           }else if(e.now=="first_name"){
           
            // setFName(true)
            Result.push({first_name:"First Name"})
           
        //    console.log("FS",Result)
           }else if(e.now=="last_name"){
         
            // setLName(true)
            Result.push({last_name:"Last Name"})
            // console.log("LN",Result)
            }else if(e.now=="gender"){
                // Result.map((e)=>{
                //     if(  !e.account_name && !e.first_name && !e.last_name && !e.gender &&!e.age && !e.city && !e.state  ){
                //         Result.push({gender:"Gender"})
                //     }
                // })
                Result.push({gender:"Gender"})
                // setgender(true)
                // console.log("GEN",Result)
                }else if(e.now=="age"){
                    Result.push({age:"Age"})
                    
                    // setage(true)
                    // console.log("age",Result)
                    }
                else if(e.now=="city"){
                 
                    Result.push({city:"City"})
                        // setcity(true)
                    // console.log("cit",Result)
                    }
                else if(e.now=="state"){
                 Result.push({state:"State"})
                        // setstate(true)
                    // console.log("state",Result)
                    }
        }),
        
        console.log("segment_name : ",sName),
        Expose()
        // if(first_name){}
        
    )

 }
  return (
    <div>
      <Button variant="outlined"  color="success"
          sx={{
            borderColor: "black",
            backgroundColor: "transparent",
            color: "black",
          }} onClick={handleClickOpen}>
        save segment
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
       
      >
        <AppBar sx={{ position: 'relative' , backgroundColor:'lightseagreen' }}>
        <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <KeyboardArrowLeftIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Save segment
            </Typography>
            </Toolbar>
        </AppBar>
        <DialogTitle id="responsive-dialog-title">
          {"Enter the Name of the Segment"}
        </DialogTitle>
        <DialogContent>
        <TextField id="outlined-basic" label="Name of the Segment" variant="outlined" sx={{width:"40vw",margin:'.5rem'}} onChange={(e)=>{
            return(

                setsName(e.target.value)
               
            )
        
        }
            } />
          <DialogContentText>
          To save your segment,you need to add the schemas to build the query

          
          </DialogContentText>
          <div className='makeres'>
         
          <Chip label="-User Traits" variant="outlined" color='success' sx={{border:0}} key="s"  icon={<CircleIcon />}/>
           
        
          <Chip label="-Group Traits" key="ss"  variant="outlined" color='error' sx={{border:0}}  icon={<CircleIcon  />}/>
          

          </div>
        </DialogContent>
        <DialogContent>
            {
                inputcount.map((count,index)=>{
                    return(
                        <div className='makeress' key={index}>
            <SelectTextFields inputcount={input}addcount={addinput} />
            {
                // inputcount.length-1 === index && 
                inputcount.length >1?
            <IconButton
            onClick={(index)=>Removesegment(index)}
>
  <RemoveCircleIcon />
</IconButton>:""
            }

                        </div>
                    )
                })
            }
        {
               
                inputcount.length <7?
                <Button onClick={()=>Addsegment()}> + Add segment</Button>:""


            }
        </DialogContent>
        <DialogActions>
          <Button autoFocus variant='contained' color='success' onClick={()=>{
            return(
                handleClose(),
                Save()
            )
            
        }}>
            save the segment
          </Button>
          <Button color='error' onClick={()=>{
            return(
                handleClose(),
                window.location.reload()

            )
            }} autoFocus>
           cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
