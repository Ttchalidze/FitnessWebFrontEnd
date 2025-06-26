import chest from "../imgSource/chest.png";
import arms from "../imgSource/arms.png";
import back from "../imgSource/back.png";
import legs from "../imgSource/legs.png";
import shoulders from "../imgSource/shoulders.png";
import { useNavigate } from "react-router";
import "../styles/workouts.css";

export const WorkoutImages = () => {
  let navigate = useNavigate();
  const onImgClick = (id) => {
    navigate(`/workouts/${id}`);
  };
  return (
    <div className="workouts">
      <h1>Select Your Workouts</h1>
      <div className="muscle-groups">
        <div className="muscle-card">
          <h2>Chest</h2>
          <img
            src={chest}
            alt="Chest"
            onClick={() => onImgClick("1")}
            className="muscle-img"
          />
        </div>
        <div className="muscle-card">
          <h2>Arms</h2>
          <img
            src={arms}
            alt="Arms"
            onClick={() => onImgClick("2")}
            className="muscle-img"
          />
        </div>
        <div className="muscle-card">
          <h2>Back</h2>
          <img
            src={back}
            alt="Back"
            onClick={() => onImgClick("3")}
            className="muscle-img"
          />
        </div>
        <div className="muscle-card">
          <h2>Legs</h2>
          <img
            src={legs}
            alt="Legs"
            onClick={() => onImgClick("4")}
            className="muscle-img"
          />
        </div>
        <div className="muscle-card">
          <h2>Shoulders</h2>
          <img
            src={shoulders}
            alt="Shoulders"
            onClick={() => onImgClick("5")}
            className="muscle-img"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkoutImages;
