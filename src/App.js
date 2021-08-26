import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./navBar/navBar.js";
import { Breadcrumb } from "react-bootstrap";
import CardElement from "./Card/Card.js";
import { useEffect, useState } from "react";
import Filters from "./Filters/Filters.js";
import { HiPlusCircle } from "react-icons/hi";
import SideScroller from "./Carousel/Carousel";
import Footer from "./Footer/Footer.js";
import DropDownBar from "./DropDownBar/DropDownBar";

export default function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://eps-gigya.herokuapp.com/rewardProducts")
      .then((response) => response.json())
      .then(setData);
  }, []);

  return (
    <div className="App">
      <NavigationBar />
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Mechandise</Breadcrumb.Item>
        <Breadcrumb.Item>Electronics</Breadcrumb.Item>
        <Breadcrumb.Item>Cameras</Breadcrumb.Item>
      </Breadcrumb>
      <h1 style={{ textAlign: "center" }}>Cameras</h1>
      <div style={{ display: "grid", placeItems: "center" }}>
        <Filters />
        <div className="moreFiltersButtonContainer">
          <h6> More Filters </h6>
          <HiPlusCircle color="red" />
        </div>
      </div>
      <div className="sortBySelectionContainer">
        <DropDownBar />
      </div>
      <div className="cardContiner container">
        {data &&
          data.map(({ image, title, points }, index) => (
            <CardElement image={image} title={title} points={points} />
          ))}
      </div>
      <div className="relatedItemsCarosel">
        <SideScroller title={"Related Items"} />
      </div>
      <div className="RecentlyViwedItems">
        <SideScroller title={"Recently Viewed Items"} />
      </div>
      <Footer />
    </div>
  );
}
