import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('slideRight', [
      transition('void => *', [
        style({transform: 'translateX(-20%)'}),
        animate('1000ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
    ]),
    trigger('fadeIn', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(2000)),
    ]),
    trigger('slideLeft', [
      transition(':enter', [
        style({transform: 'translateX(20%)', opacity: .5}),
        animate('1000ms ease-in', style({transform: 'translateX(0%)', opacity: 100}))
      ]),
    ]),
    trigger('slideLeftDelayed', [
      transition(':enter', [
        style({transform: 'translateX(20%)', opacity: .5}),
        animate('1000ms ease-in', style({transform: 'translateX(0%)', opacity: 100}), )
      ]),
    ]),
    trigger('slideUp', [
      transition(':enter', [
        style({transform: 'translateY(40%)', opacity: .2}),
        animate('1000ms ease-in', style({transform: 'translateY(0%)', opacity: 100}))
      ]),
    ])
  ]

})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  addClass(event: any): void {
    // adding active for hover class
    event.target.className += ' active';
  }

  removeClass(event: any): void {
    // taking away active for hover class
    event.target.className = event.target.className.replace(' active', '');
  }

  addHoverClass(event: any): void {
    // adding active for hover class
    event.target.className += ' fade-in';
  }

  removeHoverClass(event: any): void {
    // taking away active for hover class
    event.target.className = event.target.className.replace(' fade-in', '');
  }

}
