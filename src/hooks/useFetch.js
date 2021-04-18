
import {useState,useEffect} from 'react';
const useFetch = ({url}) => {
    const [blogs, setBlogs] = useState(null );    

    const [error, setError] = useState(null);

    // loading comp / piece of state
    const [isPending, setPending] = useState(true);


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
