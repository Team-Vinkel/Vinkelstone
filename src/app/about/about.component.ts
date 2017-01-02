import { Component, OnInit, trigger, state, style, animate, transition, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
    animations: [
    trigger('visibilityChanged', [
      state('true' , style({ opacity: 1, transform: 'scale(1.0)' })),
      state('false', style({ opacity: 0, transform: 'scale(0.0)'  })),
      transition('1 => 0', animate('1000ms')),
      transition('0 => 1', animate('1000ms'))
    ])
  ],
})
export class AboutComponent implements OnInit, AfterViewInit {

    @Input() isVisibleCreators: boolean = false;
    @Input() isVisibleTelerikLogo: boolean = false;
    @Input() isVisibleAngularLogo: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.isVisibleCreators = !this.isVisibleCreators;
    setTimeout((() => this.isVisibleTelerikLogo = !this.isVisibleTelerikLogo), 1000);
    setTimeout((() => this.isVisibleAngularLogo = !this.isVisibleAngularLogo), 2000);
  }

}
