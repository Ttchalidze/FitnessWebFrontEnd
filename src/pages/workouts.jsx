import { useState, useEffect } from "react";
import { addWorkout, getWorkoutsById } from "../api/workout";
import { useParams } from "react-router";
import { useAuth } from "../auth/AuthContext";

const Workoutvideo = () => {
  const { token } = useAuth();
  const [workout, setWorkout] = useState(null);
  const [success, setSuccess] = useState(false);

  const params = useParams();

  useEffect(() => {
    const callWorkout = async () => {
      try {
        const result = await getWorkoutsById(params.id);
        setWorkout(result);
      } catch (error) {
        console.error("Failed to load workout:", error);
      }
    };
    callWorkout();
  }, [params.id]);

  const handleAddWorkout = async () => {
    if (!token) {
      console.error("You must be loged in ");
      return;
    }
    try {
      await addWorkout(params.id, token);
      setSuccess(true);

      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Error adding workout:", error);
      setSuccess(false);
    }
  };

  if (!workout) return <div>Loading... </div>;

  return (
    <div>
      {success && <div>Workout added successfully!</div>}
      <div>
        {workout?.video ? (
          <div>
            <h2>{workout.title || "Workout Video"}</h2>
            <iframe
              width="560"
              height="315"
              src={workout.video}
              title={workout.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <div>
              <h2>Description of Workouts</h2>
              <div>
                <p>{workout.description}</p>
              </div>
              <button onClick={handleAddWorkout}>Add Workout</button>
            </div>
          </div>
        ) : (
          <p>Loading video...</p>
        )}
      </div>
    </div>
  );
};

export default Workoutvideo;
