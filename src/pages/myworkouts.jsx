import { useState, useEffect } from "react";
import { deleteWorkout, getWorkoutsByUserId } from "../api/workout";
import { useAuth } from "../auth/AuthContext";

const Myworkouts = () => {
  const { token } = useAuth();
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState();
  const callWorkout = async () => {
    try {
      const result = await getWorkoutsByUserId(token);
      setWorkouts(result);
    } catch (err) {
      setError(err.message);
    }
  };
  useEffect(() => {
    if (token) {
      callWorkout();
    }
  }, [token]);

  const handleDeleteWorkout = async (id) => {
    try {
      await deleteWorkout(id, token);
      setWorkouts(workouts.filter((w) => w.id !== id));
      callWorkout();
    } catch (error) {
      console.error("Error deleting workout:", error);
      setError("Failed to delete workout.");
    }
  };

  if (error) return <div className="container">Error: {error}</div>;

  return (
    <div>
      <div>
        {workouts?.map((workout) => (
          <div key={workout.id}>
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
              <button onClick={() => handleDeleteWorkout(workout.id)}>
                delete workout
              </button>
            </div>
          </div>
        ))}
        {workouts.length === 0 && <p>Please add workouts</p>}
      </div>
    </div>
  );
};

export default Myworkouts;
