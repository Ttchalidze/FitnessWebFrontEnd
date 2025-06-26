import { useState, useEffect } from "react";
import { addWorkout, getWorkoutsById } from "../api/workout";
import { useParams } from "react-router";
import { useAuth } from "../auth/AuthContext";
import "../styles/workout.css";
import "../styles/notification.css";

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
      console.error("You must be logged in");
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

  if (!workout) return <div>Loading...</div>;

  return (
    <div>
      {/* ✅ Styled Success Notification */}
      {success && (
        <div className="notification success" onClick={() => setSuccess(false)}>
          <p>Workout added successfully!</p>
          <button className="close-btn" onClick={() => setSuccess(false)}>
            &times;
          </button>
        </div>
      )}

      {/* ✅ Main Workout Section */}
      <div className="workout-page">
        {workout?.video ? (
          <div className="workout-container">
            <h1>{workout.title || "Workout Video"}</h1>

            <div className="workout-video-container">
              <iframe
                src={workout.video}
                title={workout.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            <h2>Description of Workouts</h2>
            <p className="workout-description">{workout.description}</p>

            <button onClick={handleAddWorkout} className="add-workout-btn">
              Add Workout
            </button>
          </div>
        ) : (
          <p>Loading video...</p>
        )}
      </div>
    </div>
  );
};

export default Workoutvideo;
