import Exercise from "./Exercise";
export default interface IWorkout {
  Id: number;
  Cycle: string;
  Exercises: Exercise[];
  DateCompleted: string;
}
