import { useState } from "react";
import "./Icon.css";

const FlipIcon = ({ icon1, icon2 }) => {
  const [selected, setSelected] = useState(true);

  const iconSelected = () => {
    setSelected(!selected);
  };

  const thumbsUp = "fa " + icon1;
  const thumbsDown = "fa " + icon2;

  return (
    <i
      className={`${selected ? thumbsUp : thumbsDown}`}
      onClick={iconSelected}
    ></i>
  );
};

export default FlipIcon;
