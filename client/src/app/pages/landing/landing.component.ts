import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  message: string;

  constructor() {
    this.message = 'Seja Bem-vindo';
  }

  @Input() text: string;
  @Input() location: string;

  ngOnInit(): void {
  }

}
