import { IUser } from '@nms/types';

export const users: IUser[] = [
  {
    id: '1',
    name: 'Susan',
    image: 'assets/images/mental-fitness/users/user-1.svg',
    designation: 'Frontend Engineer',
    projects: ['Kesher'],
    inCharge: 'Arun',
    reportedOn: 1667054535000,
    mentalFitness: 'neutral',
  },
  {
    id: '2',
    name: 'Max',
    image: 'assets/images/mental-fitness/users/user-2.svg',
    designation: 'UI Designer',
    projects: ['NMS', 'IBS'],
    inCharge: 'Rahul',
    reportedOn: 1666881735000,
    mentalFitness: 'sad',
  },
  {
    id: '3',
    name: 'Megan',
    image: 'assets/images/mental-fitness/users/user-3.svg',
    designation: 'Backend Engineer',
    projects: ['Kesher'],
    inCharge: 'Sreenath',
    reportedOn: 1666795335000,
    mentalFitness: 'sad',
  },
  {
    id: '4',
    name: 'Tim',
    image: 'assets/images/mental-fitness/users/user-4.svg',
    designation: 'Intern',
    projects: [],
    inCharge: 'Fahad',
    reportedOn: 1666449735000,
    mentalFitness: 'neutral',
  },
];
