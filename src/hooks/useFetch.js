
import {useState,useEffect} from 'react';
const useFetch = (url) => {
    const [data, setData] = useState(null );    
    const [error, setError] = useState(null);
    const [isPending, setPending] = useState(true);

    useEffect(()=>{
        fetch(url)
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
          setPending(false); 
          setError(err.message);
      })
    },[]);
    // returing all reqd values
    return {data,error,isPending};

}
 
export default useFetch;
