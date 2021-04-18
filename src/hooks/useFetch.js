
import {useEffect} from 'react';
const useFetch = ({url}) => {
    return ( useEffect(()=>{
        fetch(url)
        .then(response=>{ 
            if(!response.ok){
                throw Error("Could not resolve host !")
            }
          return response.json()
    
        })
        .then(data=>{
            setBlogs(data);
            setError(null); 
            setPending(false); 
        })
        .catch(err=>{
          setPending(false); 
          setError(err.message);
      })
      },[]) );
}
 
export default useFetch;
