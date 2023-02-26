import { useState } from "react";
import Card from "react-bootstrap/Card";

const PlayerCard = ({name, img, statistics}) => {
const [showImage, setShowImage] = useState(true)
  return (
    <Card className="" role="button">
      <Card.Img variant="top" src={img} className="player-logo" />
    </Card>
  );
}

export default PlayerCard