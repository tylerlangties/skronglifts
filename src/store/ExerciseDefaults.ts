import Exercise from "@/interfaces/Exercise";
import ExerciseNames from "@/constants/ExerciseNames";

export const defaultSquat: Exercise = {
  id: 1,
  name: ExerciseNames.squat,
  reps: 5,
  sets: 5,
  weight: 45,
  completed: false,
};

export const defaultBench: Exercise = {
  id: 1,
  name: ExerciseNames.benchPress,
  reps: 5,
  sets: 5,
  weight: 45,
  completed: false,
};

export const defaultRows: Exercise = {
  id: 1,
  name: ExerciseNames.barbellRow,
  reps: 5,
  sets: 5,
  weight: 45,
  completed: false,
};

export const defaultOverheadPress: Exercise = {
  id: 1,
  name: ExerciseNames.overheadPress,
  reps: 5,
  sets: 5,
  weight: 45,
  completed: false,
};

export const defaultDeadlift: Exercise = {
  id: 1,
  name: ExerciseNames.deadlift,
  reps: 5,
  sets: 1,
  weight: 45,
  completed: false,
};
