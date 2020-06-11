
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  europe = [
    {name:"Paris",nation:"FR",capital:true, subway:true, olympic:true, temp:80},
    {name:"Seville",nation:"ES",capital:false, subway:false, olympic:false, temp:107},
    {name:"Rome",nation:"IT",capital:true, subway:true, olympic:true, temp:77},
    {name:"Florence",nation:"IT",capital:false, subway:false, olympic:false,temp:84},
    {name:"Madrid",nation:"ES",capital:true, subway:true, olympic:false, temp:80},
    {name:"Athens",nation:"GR",capital:true, subway:true, olympic:true,temp:104},
    {name:"Oslo",nation:"NO",capital:true, subway:true, olympic:true,temp:45}
  ]

  ngOnit() {}

  remove = name => this.europe = this.europe.filter( city => city.name !== name )

}

