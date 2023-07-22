import styles from '../styles/SearchCard.module.css';

// eslint-disable-next-line react/prop-types
function SearchCard({title, text, img, date, author})
{
    const publish_date = new Date(date);

    return(
        <div className={styles.search_card}>
            <span>{`${Date(date).slice(3,7)}. ${publish_date.getDay()}, ${publish_date.getFullYear()}`}</span>
           
            <div className={styles.text_container}>   
                <h4>{title}</h4>
                <p className={styles.card_text}>{text}</p>
                <p className={styles.author}>{author}</p>
           
            </div>
            
            {
                img && (
                    <div className={styles.card_img}>
                        <img src={'https://static01.nyt.com/' + img} alt="" />
                    </div>
                )
            }
          
        </div>
    )
}

export default SearchCard