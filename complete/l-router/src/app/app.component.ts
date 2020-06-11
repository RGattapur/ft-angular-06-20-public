import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute,GuardsCheckEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor( private router: Router, private activatedRoute:ActivatedRoute ) {}

  ngOnInit(): void {
    // Log Router Guard errors to the console.
    this.router.events
      .pipe(filter(event => event instanceof GuardsCheckEnd))
      .subscribe((e:any) => e.shouldActivate ? null : console.error(`Guard blocked access to route ${e.urlAfterRedirects}`))
      // .subscribe(() => this.breadCrumbs(this.activatedRoute.root));
  }

  breadCrumbs( route: ActivatedRoute ) {
    const routes = route.children;

    for (const r of routes) {
      // An array of objects containing  [ { path:"tv"},{ path:"4" }]
      console.log(JSON.stringify(r.snapshot.url.map(segment => ({ path:segment.path }))))
    }
  }

  // Programmatic navigation to routes.

  goRadio = station => this.router.navigate(['radio',station.toLowerCase() ]);

  goBBC4 = () => this.router.navigateByUrl( `/tv/4`, {state:{name:"BBC Four",image:"bbc-four.png"}});

  go17 = () => this.router.navigateByUrl( `/tv/17`, {state:{name:"Channel K17BA-D",image:"channel17.jpg"}});

  goHome = () => this.router.navigate(['/']);

}
