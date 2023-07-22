import styles from '../styles/Nav.module.css';
import { Link } from 'react-router-dom';
import {FiMenu as Menu} from 'react-icons/fi';
import {AiOutlineClose as Close} from 'react-icons/ai';
import { useState } from 'react';
function Navbar()
{
    const [toggle, setToggle] = useState(true);
    const [navDisplay, setNavdisplay] = useState(`${styles.nav_closed}`);
    

    function handleNav()
    {
        setToggle(!toggle);
        toggle ? setNavdisplay(`${styles.nav_active}`) : setNavdisplay(`${styles.nav_closed}`);
       
    }


    return(
        <nav className={styles.navbar}>

            <div className={styles.nav_display}>
                
                
                <button className={styles.nav_btn} onClick={handleNav}>
                    {
                        toggle ? (
                            <Menu/>
                        ):(
                            <Close/>
                        )

                    }
                </button>

                <Link to='/'>World News</Link>
                
            </div>
            
            <ul className={navDisplay} >
                <li><Link to="/category/world">World</Link></li>
                <li><Link to="/category/politics">Politics</Link></li>
                <li><Link to="/category/business">Business</Link></li>
                <li><Link to="/category/opinion">Opinion</Link></li>
                <li><Link to="/category/science">Science</Link></li>
                <li><Link to="/category/health">Health</Link></li>
                <li><Link to="/category/sports">Sports</Link></li>
                <li><Link to="/category/arts">Arts</Link></li>
                <li><Link to="/category/books">Books</Link></li>
                <li><Link to="/category/style">Style</Link></li>
                <li><Link to="/category/food">Food</Link></li>
                <li><Link to="/category/travel">Travel</Link></li>
                <li><Link to="/category/magazine">Magazine</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;