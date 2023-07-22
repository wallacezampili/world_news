import SearchResults from '../Components/SearchResults';
import { useSearchParams } from 'react-router-dom';
import styles from '../styles/SearchPage.module.css';
import {IoIosArrowDown as Arrow} from 'react-icons/io'
import {PiMagnifyingGlassBold as Glass} from 'react-icons/pi'
import { useEffect, useState } from 'react';

function SearchPage() {

    const [search, setSearch] = useSearchParams();
    const [loading, setLoading] = useState(true);
    const [articles, setArticles] = useState([]);


    //Api Url and Key
    const apikey = '4ift7a6J7vs2UufQnUuS2MKXMMmOr9Cl';

    async function getData()
    {
        const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=${search.get('search')}&sort=${search.get('sort')}&api-key=${apikey}`
        console.log(url);

        setLoading(true);
       

        //Get the Data from the api
        const res = await fetch(url);
        const data = await res.json();

        //Set results
        setArticles(data.response.docs);

        console.log(data.response.docs);

        setLoading(false);
    }

    useEffect(() => {

        getData();

    }, [])

    function handleSubmit(e)
    {
       e.preventDefault();
       getData();
    }

    function handleChange(e)
    {
        if(e.target.type === 'text')
        {
            setSearch({
                search: e.target.value,
                sort: search.get('sort')
            })
        }
        else{
            setSearch({
                search: search.get('search'),
                sort: e.target.value
            })
        }
    }
    

    return ( 
        <div className={styles.search_container}>

            <form className={styles.search_form} onSubmit={handleSubmit}>

                <div className={styles.search_control}>
                    <input type="text" name="search" value={search.get('search')} onChange={handleChange}/>
                    <button type='submit'><Glass/></button>
                </div>
                
                <div className={styles.select_control}>
                    <select name="sort" onChange={handleChange}>
                        <option value="relevance">Sort by Relevance</option>
                        <option value="newest">Sort by Newest</option>
                        <option value="oldest">Sort by Oldest</option>
                    </select>
                    <Arrow/>
                </div>

            </form>

            {

                (articles.length > 0 ) ?
                (
                    <SearchResults articles={articles} loading={loading}/>
                ) 
                :
                (
                   (loading === false)  && (
                   
                    <div className={styles.not_found}>
                            <p>
                                Any articles found, please try again.
                            </p>
                        </div>
                    )

                )
            }
        </div>
     );
}

export default SearchPage;
