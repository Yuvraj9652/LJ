import {useState,useEffect} from 'react';
import axios from 'axios';

const baseURL="https://randomuser.me/api";

function Ax2(){
    const [post, setPost] = useState(null);

    const fuser = () => {
        axios.get(baseURL)
            .then((response) => {
                setPost(response.data.results[0]);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }
    useEffect(() => {
        fuser();
    }, []);

    if (!post) return <p>Loading...</p>;

    const { name, email, picture } = post;

    return (
        <div>
            <h1>{name.first} {name.last}</h1>
            <p>Email: {email}</p>
            <img src={picture.large} alt="User" height="200" width="200"/>
            <button onClick={fuser}>Get New User</button>
        </div>
    );
}

export default Ax2;