
import {useState,useEffect} from 'react';
const useFetch = (url) => {
    const [data, setData] = useState(null );    
    const [error, setError] = useState(null);
    const [isPending, setPending] = useState(true);

    useEffect(()=>{

        // abort controller : for our cleanup function 
        const abortCont = new AbortController();


        fetch(url,{ signal: abortCont.signal })
        .then(response=>{ 
            if(!response.ok){
                throw Error("Could not resolve host !")
            }
          return response.json()
        })
        .then(data=>{
            setData(data);
            setError(null); 
            setPending(false); 
        })

        .catch(err=>{
            
            // to handle the error thrown if fetch is aborted
            if (err.name==="AbortError"){console.log("fetch aborted")}
            else{
          setPending(false); 
          setError(err.message);
            }
      })
        
    //   cleanup function with abort controller to abort fetch when switched to diff route
    return () => abortCont.abort();
    },[url]); // URL as dependency :- whenever URL changes, Data will be fetched again


    // returing all reqd values
    return {data,error,isPending};

}
 
export default useFetch;
