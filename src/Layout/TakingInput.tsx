import * as React from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

 const TakingInput:React.FC<{value: string, handleChange:(event: any) => any} >= ({value, handleChange})=> {
  const [region, setRegion] = React.useState('');

//   const handleChanger = (event: SelectChangeEvent) => {
//     console.log(typeof(event.target.value))

//      setAge(event.target.value)
    
//      handleChange(Number(event.target.value));
//   };

// console.log("val",value);

 const changehandler = (event:SelectChangeEvent) =>{
  setRegion(event.target.value);
 }


  return (
    <div style={{display:"flex", paddingLeft:"50px", alignItems:"centers", border:"1px solid grey", borderRadius:"5px"}}>
      <FormControl sx={{m: 1, minWidth:190}}>
        <InputLabel id="demo-simple-select-label">Year</InputLabel>
        <Select
          value={value}
          label="Age"
          onChange={handleChange}
          sx={{width:"100%"}}
        >
          <MenuItem value={2023}>{2023}</MenuItem>
          <MenuItem value={2024}>{2024}</MenuItem>
          <MenuItem value={2025}>{2025}</MenuItem>
          <MenuItem value={2026}>{2026}</MenuItem>
          
        </Select>
        
      </FormControl>
      <FormControl sx={{m:1, minWidth: 190}}>
        <InputLabel id="demo-simple-select-label2">Select DMI holiday</InputLabel>
        <Select
        labelId='demo-simple-select-label2'
          value={region}
          label="Age"
          onChange={changehandler}
          sx={{width:"100%"}}
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
        </Select>
      </FormControl>
      </div>
  );
}
export default TakingInput;