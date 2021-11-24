import { Component, OnInit, Input }    from '@angular/core';
import { HttpClient }                  from '@angular/common/http';

import { VencedoresModel }             from './vencedores.model';
import { environment }                 from './../../environments/environment';


//---------------------------------------------------------
@Component({
//---------------------------------------------------------
  selector: 'app-vencedores',
  templateUrl: './vencedores.component.html',
  styleUrls: ['./vencedores.component.css'],
})

//---------------------------------------------------------
export class VencedoresComponent implements OnInit {
//---------------------------------------------------------
  public dbResults      : VencedoresModel[] = [];
  public errorMsgs      : string;
  public nCountRgs      : number;
  public showSpinner    : boolean;
  public nValorProgress : number;

//---------------------------------------------------------
  constructor(private http: HttpClient) {
//---------------------------------------------------------
  this.nCountRgs      = 0;
  this.showSpinner    = true;
  this.nValorProgress = 0;
  }

//---------------------------------------------------------
  ngOnInit() {
//---------------------------------------------------------
    this.http.get(environment.urlResultados)
             .subscribe( 
                         resultados => {this.dbResults = resultados as VencedoresModel[] , 
                                        this.nCountRgs = this.dbResults.length           ,
                                        this.showSpinner = false                         },

                         error      => {this.errorMsgs = error.message                   , 
                                        console.log('Error:',error)                      , 
                                        this.showSpinner = false                         },
                        );
  }

}
