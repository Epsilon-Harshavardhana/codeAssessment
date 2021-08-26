import { useEffect, useState } from "react";
import "./Carousel.css";

export default function Carousel({ title }) {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://eps-gigya.herokuapp.com/rewardProducts")
      .then((res) => res.json())
      .then(setData);
  }, []);
  // console.log(data)
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="rowPosters">
        {data &&
          data.map((data, index) => (
            <div className="rowPoster">
              <img key={index} calssName="posterImg" src={data.image} />
            </div>
          ))}
      </div>
    </div>
  );
}
