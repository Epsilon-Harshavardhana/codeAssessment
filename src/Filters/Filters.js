import { Button } from "react-bootstrap";
import "./Filters.css";
const filters = [
  "Instant",
  "DSLR",
  "Convernience, Security & Collision Avoidance",
  "Action",
  "Camcorders",
  "Drones",
  "Super Mega Pixel Ultimate Zoom",
  "Wearables"
];

// add more button functionality

function Filters() {
  return (
    <div className="filterButtonsContanier">
      {filters.map((filter, index) => (
        <Button className="filterButton" variant="outline-primary">
          {filter}
        </Button>
      ))}
    </div>
  );
}

export default Filters;
