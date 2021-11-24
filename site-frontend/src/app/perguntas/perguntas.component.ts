import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.css']
})
export class PerguntasComponent implements OnInit {
  @Input()
  public cTxtPerguntas: string = ""
  constructor() { }
  ngOnInit() { }

}
