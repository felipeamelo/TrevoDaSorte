import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-premios',
  templateUrl: './premios.component.html',
  styleUrls: ['./premios.component.css']
})
export class PremiosComponent implements OnInit {
  @Input()
  public cTxtPremios: string = ""
  constructor() { }
  ngOnInit() {
  }

}
