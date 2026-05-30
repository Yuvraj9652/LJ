import P from "./P.jsx";
import img from "./bird.png"

function T(){
    // title, price, rating, and image.

    const prod=[{
        title: "Product 1",
        price: 19.99,
        rating: 4.5,
        image: img
    },
    {
        title: "Product 2",
        price: 29.99,
        rating: 4.0,
        image: img
    },
    {
        title: "Product 3",
        price: 39.99,
        rating: 4.8,
        image: img
    }]

    return(
        <>
        <P info={prod}/>
        </>
    )
}
export default T