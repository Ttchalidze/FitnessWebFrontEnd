import { useState, useEffect } from "react";
import { addWorkout, getWorkoutsById } from "../api/workout";
import { useParams } from "react-router";
import { useAuth } from "../auth/AuthContext";

const VideoIframe = () => {
  const token = useAuth();
  const [ workout, setWorkout ] = useState();
  let params = useParams();
  useEffect(() => {
    const callWorkout = async () => {
      const result = await getWorkoutsById(params.id);
      setWorkout(result);
    };
    callWorkout();
    workout.description;
  }, []);
  const handleAddWorkout = async () => {
    try {
      await addWorkout(params.id, token);
    } catch (error) {
      console.error("Error deleting workout:", error);
    }
  };

  return (
    <div>
      <div>
        <h2>chest workout</h2>
        <iframe
          width="560"
          height="315"
          src={workout.videoUrl}
          title={workout.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div>
          <h2>description of workouts</h2>
          <div>
            <p>{workout.description}</p>s
          </div>
        </div>
        <button onClick={handleAddWorkout}>add workOut</button>
      </div>
    </div>
  );
};

export default VideoIframe;
