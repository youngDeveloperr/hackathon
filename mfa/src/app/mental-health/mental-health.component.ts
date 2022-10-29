import { Component, OnInit } from '@angular/core';

type UserFitness = 'sad' | 'neutral';

interface IUser {
  id: string;
  name: string;
  image: string;
  designation: string;
  projects: string[];
  inCharge: string;
  reportedOn: number;
  mentalFitness: UserFitness;
}

@Component({
  selector: 'mfa-mental-health',
  templateUrl: './mental-health.component.html',
  styleUrls: ['./mental-health.component.scss'],
})
export class MentalHealthComponent implements OnInit {
  readonly users: IUser[] = [
    {
      id: '1',
      name: 'Susan',
      image: 'assets/images/mental-fitness/users/user-1.svg',
      designation: 'Frontend Engineer',
      projects: ['Kesher'],
      inCharge: 'Arun',
      reportedOn: 123123,
      mentalFitness: 'neutral',
    },
    {
      id: '2',
      name: 'Max',
      image: 'assets/images/mental-fitness/users/user-2.svg',
      designation: 'UI Designer',
      projects: ['NMS', 'IBS'],
      inCharge: 'Rahul',
      reportedOn: 123123,
      mentalFitness: 'sad',
    },
    {
      id: '3',
      name: 'Megan',
      image: 'assets/images/mental-fitness/users/user-3.svg',
      designation: 'Backend Engineer',
      projects: ['Kesher'],
      inCharge: 'Sreenath',
      reportedOn: 123123,
      mentalFitness: 'sad',
    },
    {
      id: '4',
      name: 'Tim',
      image: 'assets/images/mental-fitness/users/user-4.svg',
      designation: 'Intern',
      projects: [],
      inCharge: 'Fahad',
      reportedOn: 123123,
      mentalFitness: 'neutral',
    },
  ];

  ngOnInit(): void {}

  getUserProjects(projects: string[]) {
    if (projects.length === 0) {
      return 'Not Assigned';
    }

    return projects.join(', ');
  }

  getUserFitnessImage(fitness: UserFitness) {
    return `assets/images/mental-fitness/status/${fitness}.svg`;
  }
}
