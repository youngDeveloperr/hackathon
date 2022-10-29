import { Component, OnInit } from '@angular/core';

import { intervalToDuration } from 'date-fns';

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

  getDuration(reportedOn: number) {
    const { weeks, days, minutes } = intervalToDuration({
      start: reportedOn,
      end: Date.now(),
    });

    let text = 'Not feeling well since';
    const parts: string[] = [];

    if (weeks) {
      parts.push(`${weeks} weeks`);
    }

    if (days) {
      parts.push(`${days} days`);
    }

    if (minutes && parts.length === 0) {
      return 'Not feeling well just now!';
    }

    text += ` ${parts.join(', ')} ago!`;

    return parts.length > 0 ? text : null;
  }
}
