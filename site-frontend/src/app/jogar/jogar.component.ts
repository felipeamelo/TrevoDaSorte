import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jogar',
  templateUrl: './jogar.component.html',
  styleUrls: ['./jogar.component.css']
})
export class JogarComponent implements OnInit {
  @Input()
  public cTxtJogar: string = ""
  constructor() { }
  ngOnInit() {
  }

}
