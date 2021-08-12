import { reactive } from "vue";
import Exercise from "@/interfaces/Exercise";
import Workout from "@/interfaces/Workout";
import {
  defaultSquat,
  defaultBench,
  defaultRows,
  defaultOverheadPress,
  defaultDeadlift,
} from "@/store/ExerciseDefaults.ts";

// const workoutA: Workout = {
//   id: 0,
//   cycle: "A",
//   exercises: [defaultSquat, defaultBench, defaultRows],
//   completed: false,
// };

// const workoutB: Workout = {
//   id: 0,
//   cycle: "B",
//   exercises: [defaultSquat, defaultOverheadPress, defaultDeadlift],
//   completed: false,
// };

const projectedWorkout: Workout = reactive({
  id: 0,
  cycle: "B",
  exercises: [defaultSquat, defaultOverheadPress, defaultDeadlift],
  completed: false,
});

export const getCurrentWorkout = () => {
  return projectedWorkout;
};
