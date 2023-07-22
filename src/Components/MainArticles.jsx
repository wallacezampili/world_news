import styles from "../styles/MainArticles.module.css";
import Card from "./Card";

// eslint-disable-next-line react/prop-types
function MainArticles({ articles }) {
  return (
    <>
        {articles && (
            <div className={styles.main_articles}>
                {
                    // eslint-disable-next-line react/prop-types
                    articles.map((article, index) => {
                        return (
                       <>
                        <Card
                            key={index}
                            title={article.title}
                            multimedia={article.multimedia}
                            text={article.abstract}
                        />

                        {index === 0 &&(
                           <div className={styles.img_container}>
                             <img src={article.multimedia[0].url} key={4}/>
                           </div>
                        )}

                       </>
                        );
                })
                }

               
            </div>
        )}
    </>
  );
}

export default MainArticles;
