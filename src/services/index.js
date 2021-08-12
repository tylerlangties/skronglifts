import { reactive } from "vue";

const projectedWorkout = reactive({
  date: new Date(),
  workoutType: "A",
  exercises: [
    {
      id: "squat",
      label: "Squat",
      completed: false,
      weight: 135,
      setCount: 5,
      repCount: 5,
      sets: [
        { totalReps: 5, completedReps: 0 },
        { totalReps: 5, completedReps: 0 },
        { totalReps: 5, completedReps: 0 },
        { totalReps: 5, completedReps: 0 },
        { totalReps: 5, completedReps: 0 },
      ],
    },
    {
      id: "overhead-press",
      label: "Overhead Press",
      completed: false,
      weight: 75,
      setCount: 5,
      repCount: 5,
      sets: [
        { totalReps: 5, completedReps: 0 },
        { totalReps: 5, completedReps: 0 },
        { totalReps: 5, completedReps: 0 },
        { totalReps: 5, completedReps: 0 },
        { totalReps: 5, completedReps: 0 },
      ],
    },
    {
      id: "bb-row",
      label: "Barbell Row",
      completed: false,
      weight: 95,
      setCount: 5,
      repCount: 5,
      sets: [
        { totalReps: 5, completedReps: 0 },
        { totalReps: 5, completedReps: 0 },
        { totalReps: 5, completedReps: 0 },
        { totalReps: 5, completedReps: 0 },
        { totalReps: 5, completedReps: 0 },
      ],
    },
  ],
});

export const getNextWorkout = () => {
  return projectedWorkout;
};
