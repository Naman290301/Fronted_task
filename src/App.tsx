// import YearView from "./YearView"/;
import 'react-calendar/dist/Calendar.css';
import PersistentDrawerLeft from "./Layout/Sidebar";

// import { useState } from "react";

function App() {
  const date = new Date();
  console.log(date.getFullYear())
 

  
//   const handler = (value:number)=>
// {
//     setYear(value);
//     console.log(year)
//   }
//   console.log(Calendar)

// console.log("YEar ::",year);


  return (
    <div>
      <PersistentDrawerLeft >
        
      </PersistentDrawerLeft>
      {/* <Header/>

      <TakingInput value={year} handleChange={handleChange}/>
      <Grid container spacing={2}>
       {
      arr.map((value)=><MyCalendar key={value} year={Number(year)} value={value} />)
      } 

      </Grid> */}
    </div>
  );
}

export default App;
