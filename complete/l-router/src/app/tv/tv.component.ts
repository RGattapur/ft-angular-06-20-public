import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface TvChannel{
  name:string,
  image:string
}

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['../app.component.css']
})

export class TvComponent implements OnInit {

  channel:TvChannel;

  constructor( private activatedRoute: ActivatedRoute) {}

  ngOnInit() {

    /*
    • activatedRoute.paramMap.params is an Observable stream of variable route data e.g. { channel:4 }
    • history.state is set by the STATE attribute attached to links in tv.component.html
    */

    this.activatedRoute.paramMap.subscribe(() => this.channel = window.history.state)

  }
}
