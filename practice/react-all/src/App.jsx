import { useState } from "react";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Accordian/> */}
      {/* <RandomColor/> */}
      {/* <StarRating noOfStars={10}/> */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={"10"} page={"1"} /> */}
      <LoadMoreData />
    </>
  );
}

export default App;
