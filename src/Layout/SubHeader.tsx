import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import React from 'react'

const SubHeader = () => {
    
    const [region, setRegion] = React.useState('');
    const [mstone, setMstone] = React.useState<string>('');

    function changehandler(event: SelectChangeEvent){
    setRegion(event.target.value);
   }
    function handleChange(event: SelectChangeEvent): void {
        setMstone(event.target.value);
    }

  return (
    <div style={{marginBottom:"10px",paddingLeft:"50px", display:"flex", alignItems:"center", boxShadow:"0 4px 2px -2px gray"}}>
      <FormControl sx={{m:1, minWidth: 190}}>
        <InputLabel id="demo-simple-select-label2">
            region
        </InputLabel>
        <Select
        labelId='demo-simple-select-label2'
          value={region}
          label="Age"
          onChange={changehandler}
          sx={{width:"100%"}}
        >
          <MenuItem value="NorthEast">NorthEast</MenuItem>
          <MenuItem value="NorthWest">NorthWest</MenuItem>
          <MenuItem value="SouthEast">SouthEast</MenuItem>
          <MenuItem value="SouthWest">SouthWest</MenuItem>
        </Select>
      </FormControl>
        <FormControl sx={{m: 1, minWidth:190}}>
        <InputLabel id="demo-simple-select-label">MileStone</InputLabel>
        <Select
          value={mstone}
          label="Age"
          onChange={handleChange}
          sx={{width:"100%"}}
        >
          <MenuItem value={1}>{1}</MenuItem>
          <MenuItem value={2}>{2}</MenuItem>
          <MenuItem value={3}>{3}</MenuItem>
          <MenuItem value={4}>{4}</MenuItem>
          
        </Select>
        
      </FormControl>
      
      </div>
    
  )
}

export default SubHeader