import { Component, OnInit, Input } from '@angular/core';
import { Subscription,Observable } from "rxjs";
import { Circle } from "../types/type.circle";

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['../app.component.css']
})

export class DrawComponent implements OnInit {

  circles:Circle[] = [ { colour:"green", id:4567 }, { colour:"blue", id:7654 } ];

  ngOnInit() {}

}
