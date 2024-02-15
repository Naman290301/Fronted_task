import * as React from 'react';
 import '../App.css'
import { Grid } from '@mui/material';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import Calendar from 'react-calendar';
const  MyCalendar:React.FC<{year:number, value:number}> = ({year, value})=>{

  const [highlightedDates, setHighlightedDates] = React.useState([new Date(2024, 1, 14), new Date(2024, 1, 21)]);
    const [date, setDate] = React.useState(new Date(year, value, ));
    const monthNamesArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    React.useEffect(() => {
        setDate(new Date(year, value))
      },[year])

    //   console.log("Date:",date);
    //   console.log("YEar in cal:",year);
    const tileContent = ( date:Date , view:string ) => {
      
      const isHighlighted = highlightedDates.some((highlightedDate) =>
        date.toISOString().includes(highlightedDate.toISOString())
      );
  
      // Add custom content or styling for highlighted dates
      if (isHighlighted) {
        return <div style={{ backgroundColor: 'green', borderRadius: '50%', padding: '2px' }}></div>;
      }
  
      return <></>; // Default, no additional content for other dates
    };
  
    const tileClass = ({ date, view }: { date: Date; view: string }): string | null => {
     
      if (view === 'month' && (date.getMonth() !== value || date.getFullYear() !== year)) {
        return 'disabled-day';
      }
      const isHighlighted = highlightedDates.some((highlightedDate) =>
      date.toISOString().split('T')[0] === highlightedDate.toISOString().split('T')[0]
    );
    if(isHighlighted)
    return "highlighted"
      return 'disabled-highlight';
    };
  return (
    <Grid item>
      <h2>{monthNamesArr[date.getMonth()]} {year}</h2>
    <Calendar value={date} showNavigation={false} tileClassName={tileClass} className="class-calendar"/>
    

      </Grid>
        
    
  );
}

export default MyCalendar