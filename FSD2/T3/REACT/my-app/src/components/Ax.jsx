// import {useState,useEffect} from 'react';
// import axios from 'axios';

// const Ax = () => {
//     const [joke, setJoke] = useState("");
//     function getJoke() {
//         axios.get("https://api.chucknorris.io/jokes/random")
//             .then((response) => {
//                 setJoke(response.data.value);
//             })
//             .catch((error) => {
//                 console.error("Error fetching joke:", error);
//             });
//     }

//     useEffect(() => {
//         getJoke();
//     }, []);
//     return (
//         <>
//             <h1>Random Joke</h1>
//             <p>{joke}</p>
//             <button onClick={getJoke}>Get New Joke</button>
//         </>
//     );
// }
// export default Ax;


import {useState,useEffect} from 'react';
import axios from 'axios';

const Ax = () => {
    const [joke, setJoke] = useState("");
    function getJoke() {
        // axios.get("https://api.chucknorris.io/jokes/random")
        //     .then((response) => {
        //         setJoke(response.data.value);
        //     })
        //     .catch((error) => {
        //         console.error("Error fetching joke:", error);
        //     });
        axios.get("https://official-joke-api.appspot.com/random_joke")
        .then((res) => {
            setJoke(res.data)
        })
        .catch((err) => {
            console.error("Error fetching joke:", err);
        });
    }
    function getPunchline() {
        alert(joke.punchline);
    }
    useEffect(() => {
        getJoke();
    }, []);
    return (
        <>
            <h1>Random Joke</h1>
            <h2>{joke.setup}</h2>
            {/* <p>{joke.punchline}</p> */}
            <button onClick={getJoke}>Get New Joke</button>
            <button onClick={getPunchline}>Get Punchline</button>
        </>
    );
}
export default Ax;