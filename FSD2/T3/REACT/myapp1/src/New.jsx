import img1 from "./assets/hero.png";
import img2 from "./assets/hero.png";
const New = () => {
    const images=[{ id:1,pic:img1 },{id:1,pic:img2}];
  return (
    <div>
        {images.map((val) => {
           return ( <div><img src={val.pic} heigth="200px" width="200px" alt="logo" /></div> ) })}
   </div>
  )}
export default New