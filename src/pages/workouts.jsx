import { useState, useEffect } from "react";
import { addWorkout, getWorkoutsById } from "../api/workout";
import { useParams } from "react-router";
import { useAuth } from "../auth/AuthContext";

const Workoutvideo = () => {
  const token = useAuth();
  const [workout, setWorkout] = useState();
  console.log(workout);
  const [error, setError] = useState();

  let params = useParams();
  useEffect(() => {
    const callWorkout = async () => {
      const result = await getWorkoutsById(params.id);
      setWorkout(result);
    };
    callWorkout();
  }, []);
  const handleAddWorkout = async () => {
    if (!token) {
      setError("You must be logged in to add a workout.");
      return;
    }
    try {
      await addWorkout(params.id, token);
    } catch (error) {
      console.error("Error adding workout:", error);
      setError("Failed to add workout.");
    }
  };
  if (!workout) return <div>loading: {error}</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <div>
        {workout?.video ? (
          <div>
            <h2>chest workout</h2>
            <iframe
              width="560"
              height="315"
              src={workout.video}
              title={workout.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <div>
              <h2>description of workouts</h2>
              <div>
                <p>{workout.description}</p>
              </div>
              <button onClick={handleAddWorkout}>add workOut</button>
            </div>
          </div>
        ) : (
          <p>Loading..</p>
        )}
      </div>
    </div>
  );
};

export default Workoutvideo;
