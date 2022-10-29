export type UserFitness = 'sad' | 'neutral'| 'happy';

export interface IUser {
  id: string;
  name: string;
  image: string;
  designation: string;
  projects: string[];
  inCharge: string;
  reportedOn: number;
  mentalFitness: UserFitness;
  email:string,
  empCode:string,
  mobile:string
}
