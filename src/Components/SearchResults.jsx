import styles from '../styles/SearchResults.module.css'
import Loader from './Loader';
import SearchCard from './SearchCard';

// eslint-disable-next-line react/prop-types
function SearchResults({articles, loading})
{

    // useEffect(() => {


    //     async function getData()
    //     {
           
    //         if(!value)
    //         {
    //             return;
    //         }
            
    //         setLoading(true);
          
    //         //Get the result from the search
    //         const res = await fetch(url);
    //         const data = await res.json().catch(err => console.log(err));

    //         //Set the articles state
    //         console.log(data);
    //         setArticles(data.response.docs);

    //         setLoading(false);
            
    //     }
      
    //     let timer = setTimeout(() => {
            
    //         //Delay the data fetch to wait for the input
    //         getData();
              
    //     }, 300);
    //     return(
    //         () => {
                
    //             clearTimeout(timer);
    //         }
    //     )
        

    // }, [value, url])

    return(
        <>       
         {
           loading ? (
            
            <Loader/>
           
            ) : (
            <div className={styles.results_container}>
                {
                
                    // eslint-disable-next-line react/prop-types
                    articles.map((value, index) => {

                        console.log(value.multimedia);

                        if(value.multimedia[1])
                        {
                            return(
                                // eslint-disable-next-line react/prop-types
                                <SearchCard title={value.abstract} text={value.lead_paragraph} img={value.multimedia[3].url} date={value.pub_date} author={value.byline.original} key={index} />
                             
                            )
                        }

                        return(
                            // eslint-disable-next-line react/prop-types
                            <SearchCard title={value.abstract} text={value.lead_paragraph} img={''} date={value.pub_date} author={value.byline.original} key={index}/>
                         
                        )
                       
                    })
                }
            </div>
           )
        }
        </>

    )
}

export default SearchResults;