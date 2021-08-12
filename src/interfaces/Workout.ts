import Exercise from "./Exercise";
export default interface IWorkout {
  id: number;
  cycle: string;
  exercises: Exercise[];
  completed: boolean;
  dateCompleted?: string;
}
