export default interface IExercise {
  id: number;
  name: string;
  reps: number;
  setsCompleted: number;
  sets: number;
  weight: number;
  completed: boolean;
  dateCompleted?: string;
}
