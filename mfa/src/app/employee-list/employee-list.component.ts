import { Component, OnInit } from '@angular/core';
import { users } from '../shared/constants/users';
import { IUser, UserFitness } from '@nms/types';
import { id } from 'date-fns/locale';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  constructor() {}

  employeeList: IUser[] = [
    ...users,
    {
      id: '5',
      name: 'sreenath',
      image: 'assets/images/mental-fitness/users/user-1.svg',
      designation: 'Frontend Engineer',
      projects: ['IBS'],
      inCharge: 'Arun',
      reportedOn: 1667054535000,
      mentalFitness: 'happy',
      email: 'sreenath@gmail.com',
      empCode: 'NE031',
      mobile: '+919562326438',
      resolved: false,
    },
    {
      id: '6',
      name: 'Anu',
      image: 'assets/images/mental-fitness/users/user-1.svg',
      designation: 'Frontend Engineer',
      projects: ['IBS'],
      inCharge: 'Arun',
      reportedOn: 1667054535000,
      mentalFitness: 'happy',
      email: 'anu@gmail.com',
      empCode: 'NE038',
      mobile: '+919995551110',
      resolved: false,
    },
    {
      id: '7',
      name: 'Nimisha',
      image: 'assets/images/mental-fitness/users/user-1.svg',
      designation: 'Frontend Engineer',
      projects: ['IBS'],
      inCharge: 'Arun',
      reportedOn: 1667054535000,
      mentalFitness: 'neutral',
      email: 'nimisha@gmail.com',
      empCode: 'NE030',
      mobile: '+919562326438',
      resolved: false,
    },
  ];

  getFitnessImage(fitness: UserFitness) {
    return `assets/images/mental-fitness/status/${fitness}.svg`;
  }
  getStatusTitle(fitness: UserFitness) {
    switch (fitness) {
      case 'happy':
        return 'Very Happy';
      case 'sad':
        return 'Not Okay since 5 days';
      case 'neutral':
        return 'Not Okay since 2 days';
    }
  }
  ngOnInit(): void {}
}
