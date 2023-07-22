import {FaLinkedin as Linkedin, FaGithub as Git} from 'react-icons/fa'
import styles from '../styles/Footer.module.css';

function Footer()
{
    return(
        <footer className={styles.footer}>
            <div className={styles.social_media}>
                <a className={styles.linkedin} href='https://www.linkedin.com/in/wallace-zampili-palacio-dos-santos-a62503203/' target='_blank' rel='noreferrer'><Linkedin/></a>
                <a className={styles.github} href='https://github.com/wallacezampili' target='_blank' rel='noreferrer'><Git/></a>
            </div>
            <p>
                <span>World News</span> &copy; 2023
            </p>
        </footer>
    )
}

export default Footer;