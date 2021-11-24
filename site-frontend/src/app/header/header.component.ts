import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd    } from '@angular/router';
import { ViewportScroller }                         from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public fragment: string = ""

  constructor( private viewportScroller: ViewportScroller, 
               private route: ActivatedRoute, 
               private router: Router ) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  onClick(): void {
    this.route.fragment.subscribe ( f => {
      const element = document.querySelector ( '#' + this.fragment )
      if ( element ) element.scrollIntoView ( {behavior: "smooth"} )
    });
  }

}
