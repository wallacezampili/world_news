import { useState, useEffect } from 'react';
import Card from '../Components/Card';
import styles from '../styles/Home.module.css';
import Loader from '../Components/Loader';
import MainArticles from '../Components/MainArticles';
import { useParams } from 'react-router-dom';
import SearchBar from '../Components/SearchBar';


// eslint-disable-next-line react/prop-types
function CategoryPage()
{

    const [articles, setArticles] = useState([]);
    const [mainArticles, setMainArticles] = useState([])
    const [loading, setLoading] = useState(true);

    let {section} = useParams();

    if(!section)
    {
        section = 'home'
    }
    const apikey = '4ift7a6J7vs2UufQnUuS2MKXMMmOr9Cl';
    const url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apikey}`;

    useEffect(() => {

        setLoading(true);

        async function getData()
        {
       
            const res = await fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apikey}`);
            const data = await res.json().catch(err => console.log(err));

            

            filterArticles(data.results);

            setLoading(false);
        }

       
        setTimeout(() => {getData()}, 1000);
  


    }, [url])

    function filterArticles(articles)
    {

        //Filter for only articles
        articles = articles.filter(value => {if(value.item_type === 'Article') {return value}})
        
        //Get the first two articles
        let main_articles = articles.slice(0, 2) 


        //Get the other articles
        let enum_articles = articles.slice(2)

        setArticles(enum_articles);
        setMainArticles(main_articles);

    }



    return(

        <>
            {loading ? 
            (<Loader/>) : 
            (
                <>

                    <SearchBar/>
                    

                    
                    {mainArticles && (<MainArticles articles={mainArticles}/>)}
                    
                    {articles && (
                    
                        <div className={styles.article_container}>
                            
                            {  
                                articles.map((article, index) => {
                                
                                    return(
                                            article.item_type === 'Article' && ( <Card key={index} title={article.title} multimedia={article.multimedia} text={article.abstract}/>)
                                                
                                        )
                                        
                                })
                            }

                        </div>)}
                    
                </>
            )
        }
        </>

      
    )
}

export default CategoryPage;