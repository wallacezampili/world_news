import styles from '../styles/Card.module.css';

// eslint-disable-next-line react/prop-types
function Card({title, multimedia, text})
{
    return(
        <div className={styles.article_card}>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}

export default Card;

