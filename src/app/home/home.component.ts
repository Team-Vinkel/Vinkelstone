import { Component, OnInit, AfterViewInit, trigger, state, animate, transition, style, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('visibilityChanged', [
      state('true' , style({ opacity: 1, transform: 'scale(1.0)' })),
      state('false', style({ opacity: 0, transform: 'scale(0.0)'  })),
      transition('1 => 0', animate('1500ms')),
      transition('0 => 1', animate('1500ms'))
    ])
  ],
})
export class HomeComponent implements OnInit, AfterViewInit {

  @Input() isVisible: boolean = false;
  public innKeeperMessage: string;

  constructor() { }

  ngOnInit() {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let innkeepermessages = [
      `Have you seen the weather out there? Ohh! At least it's warm in here!`,
      `There you are! Back from your adventures?`,
      `I'm glad you're here, friend, there's a chill outside.`,
      `Hurry, before someone steals your seat!`,
      `Busy night... but there's always room for another!`,
      `Ohohoho - it's good to see you again!`
    ];
    let quoteNumber = getRandomInt(0, innkeepermessages.length - 1);
    this.innKeeperMessage = innkeepermessages[quoteNumber];
  }

  ngAfterViewInit() {
    this.isVisible = !this.isVisible;
  }
}


