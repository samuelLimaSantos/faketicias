import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  textDTO: string;
  locationDTO: string;

  @Input()
  set text(text: string) {
    this.textDTO = text;
  }

  @Input()
  set location(location: string) {
    this.locationDTO = location;
  }

  ngOnInit(): void {
  }

}
