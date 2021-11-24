import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent }         from './app.component';

const routes: Routes = [
  { path: ''       , component: AppComponent       , pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {
                        useHash: false,
                        enableTracing: false,
                        onSameUrlNavigation: 'reload',
                        /*-----------------------------------------------------------------------------------*/
                        /*Não Usar os parametros abaixo, pois ele fazem o smooth e o click parar de funcionar*/
                        /*scrollPositionRestoration: 'enabled',*/
                        /*anchorScrolling: 'enabled',*/
                        /*-----------------------------------------------------------------------------------*/
                        }
                     )
       ],

  exports: [RouterModule]
})

export class AppRoutingModule { }