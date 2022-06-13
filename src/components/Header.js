import {format} from 'date-fns'
import './Header.css';
import React, {useState, useEffect} from 'react'

function Header() {
  const [date, setDate] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
        const currentDate = new Date();
        setDate(format(currentDate, 'MM.dd.yyyy hh:mm:ss'));
    }, 1000);

    return () => clearInterval(interval); 
  }, [])
  return (
    <div className='header_container'>
        <div className='header_logo'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png' alt="facebook logo" />
        </div>
        <div className='header_date'>{date}</div>
    </div>
  )
}

export default Header

