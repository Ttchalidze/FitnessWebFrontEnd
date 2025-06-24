import chest from "../imgSource/chest.png";
import arms from "../imgSource/arms.png";
import back from "../imgSource/back.png";
import legs from "../imgSource/legs.png";
import shoulders from "../imgSource/shoulders.png";
import { useNavigate } from "react-router";

export const WorkoutMenu = () => {
  let navigate = useNavigate();
  const onImgClick = (id) => {
    navigate(`/workouts/${id}`);
  };
  return (
    <div>
      <h1>Select your workouts</h1>
      <div>
        <h2>chest</h2>
        <div>
          <img src={chest} onClick={() => onImgClick("1")} />
        </div>
      </div>
      <div>
        <h2>arms</h2>
        <div>
          <img src={arms} onClick={() => onImgClick("2")} />
        </div>
      </div>
      <div>
        <h2>back</h2>
        <div>
          <img src={back} onClick={() => onImgClick("3")} />
        </div>
      </div>
      <div>
        <h2>legs</h2>
        <div>
          <img src={legs} onClick={() => onImgClick("4")} />
        </div>
        <div>
          <h2>shoulders</h2>
          <div>
            <img src={shoulders} onClick={() => onImgClick("5")} />
          </div>
        </div>
      </div>
    </div>
  );
};
