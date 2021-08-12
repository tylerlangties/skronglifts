export default interface IExercise {
  id: number;
  name: string;
  reps: number;
  sets: number;
  weight: number;
  completed: boolean;
  dateCompleted?: string;
}
