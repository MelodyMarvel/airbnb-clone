import {useState} from 'react'
import './Search.css'
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from 'react-date-range'
import { Button } from '@material-ui/core';
import { People } from '@material-ui/icons';
import {useNavigate} from "react-router-dom"



//Date picker component
//npm i react-date-range
//npm i date-fns
function SearchDate() {
    const navigateTo = useNavigate()
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange ={
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    }
    // this is all done by the library itself
    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
  return (

    <div className="search">
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
        <h2>
            Number of guests <People />
        </h2>

        <input min={0} defaultValue={2} type="number" />
            <Button onClick={() => navigateTo('/search')}>Search Airbnb</Button>
    </div>

  )
}

export default SearchDate