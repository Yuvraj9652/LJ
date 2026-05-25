import {useState} from 'react';
import img1 from '../assets/hero.png';
import img2 from '../assets/bird.png';

function US3(){
    const [pic,setPic] = useState(img1);

    const ci=()=>{
        if(pic==img1){
            setPic(img2)
        }
        else{
            setPic(img1)
        }
    }
    return(
        <>
        <img src={pic} height='200px' width='200px'/>
        <button onClick={ci}>Change Image</button>
        </>
    )
}
export default US3