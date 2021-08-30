import Exercise from "@/interfaces/Exercise";
import ExerciseNames from "@/constants/ExerciseNames";

export const defaultSquat: Exercise = {
  id: 1,
  name: ExerciseNames.squat,
  reps: 5,
  sets: 5,
  setsCompleted: 0,
  weight: 45,
  completed: false,
};

export const defaultBench: Exercise = {
  id: 2,
  name: ExerciseNames.benchPress,
  reps: 5,
  sets: 5,
  setsCompleted: 0,
  weight: 45,
  completed: false,
};

export const defaultRows: Exercise = {
  id: 3,
  name: ExerciseNames.barbellRow,
  reps: 5,
  sets: 5,
  setsCompleted: 0,
  weight: 45,
  completed: false,
};

export const defaultOverheadPress: Exercise = {
  id: 4,
  name: ExerciseNames.overheadPress,
  reps: 5,
  sets: 5,
  setsCompleted: 0,
  weight: 45,
  completed: false,
};

export const defaultDeadlift: Exercise = {
  id: 5,
  name: ExerciseNames.deadlift,
  reps: 5,
  sets: 1,
  setsCompleted: 0,
  weight: 45,
  completed: false,
};
