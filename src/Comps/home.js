
import {useState} from 'react';



const Home = () => {
    const [reactive, setReactive] = useState("Abhishek");
    const changevalue = () => {
        var name = prompt("Please input your name");
        setReactive(name);
    }
    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <h3>Hello {reactive}</h3>
            <button onClick={changevalue}>
                ChangeName
            </button>
        </div>  
     );
}
 
export default Home;