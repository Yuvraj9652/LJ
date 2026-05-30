import React from 'react';
import img1 from '../assets/bird.png'
import img2 from '../assets/turtle.png'
import img3 from '../assets/deer.png'
import img4 from '../assets/tiger.png';
import {useState} from 'react';

const arr = [img1,img2,img3,img4];
function US7(){
    const [img,setImg] = useState(arr[0]);
    const changeImg = () => {
        const randomIndex = Math.floor(Math.random() * arr.length);
        setImg(arr[randomIndex]);
    }
    return(
        <>
            <h1>Random Image</h1>
            <img src={img} alt="Random" width="300" height="200"/>
            <br />
            <button onClick={changeImg}>Change Image</button>
        </>
    );
}

export default US7;