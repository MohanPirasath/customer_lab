

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
    {
        label: 'Account Name',
        value: 'account_name',
      },
  
  {
    label: 'First Name',
    value: 'first_name',
  },
  {
    label: 'Last Name',
    value: 'last_name',
  },
  {
    label: 'Gender',
    value: 'gender',
  },
  {
    label: 'Age',
    value: 'age',
  },
 
  {
    label: 'City',
    value: 'city',
  },
  {
    label: 'State',
    value: 'state',
  },
];

export default function SelectTextFields({inputcount,addcount}) {
  const [currency, setCurrency] = React.useState('account_name');
//   const [currentName,setName]=React.useState('');

  const handleChange = async(event) => {
   setCurrency(event.target.value);
   
//    addcount([...inputcount,{}])

 console.log(inputcount)
  };

 
  var now;

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '30vw' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label={currency}
          value={currency}
        //   onChange={handleChange}
          onChange={(event)=>{
            setCurrency(event.target.value)
            now=event.target.value
            // setName(currency)
            // console.log(event)
            
            addcount([...inputcount,{now}])
            console.log(inputcount)
            
          }}
          sx={{width:"25ch",margin:'.5rem'}}
          helperText={`Please select your segment name`}
          name={currency}
          
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
     
      </div>
    </Box>
  );
}
