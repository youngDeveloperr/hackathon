import { Component, OnInit } from '@angular/core';

import { intervalToDuration } from 'date-fns';

import { UserFitness } from '@nms/types';
import { users } from '@nms/constants';

@Component({
  selector: 'mfa-mental-health',
  templateUrl: './mental-health.component.html',
  styleUrls: ['./mental-health.component.scss'],
})
export class MentalHealthComponent implements OnInit {
  users = users;

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
