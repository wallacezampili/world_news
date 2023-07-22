import  { useState } from 'react';
import styles from '../styles/SearchBar.module.css';
import {PiMagnifyingGlassBold as Glass} from 'react-icons/pi'
import { useNavigate } from 'react-router-dom';


function SearchBar()
{

    //Search value, Loading and Search results
    const [search, setSearch] = useState('');
    const navigate = useNavigate();


    function handleChange(e)
    {
        setSearch(e.target.value);
    }

    

    function handleClick()
    {
       // getData(search);
       navigate(`/search?search=${search}&sort=relevance`)
    }

    return(
       

       <div className={styles.search_bar}>
            
            <input type="text" placeholder='Search for an article' onChange={handleChange}/>
            <button className={styles.search_btn} onClick={handleClick}> <Glass/> </button>
        
        </div>
                   
      
    )
}

export default SearchBar;