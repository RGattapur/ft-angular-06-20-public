import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Topic} from "../topics/topic.type";

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['../app.component.css']
})
export class PanelComponent implements OnInit {

  // INPUT contains { name:"angular.json", purpose:"Project configuration"}
  @Input() topic:Topic;
  // Define a custom event which is emitted only once.
  @Output() select = new EventEmitter();

  active:boolean = true;

  ngOnInit() {
    // Input bindings are ready here.
    console.log(this.topic)
  }

  selectPanel = () => {
    // Only emit a custom event the first time this panel is selected.
    if(this.active) {
      this.active = false;
      this.select.emit(this.topic);
    }
  }

}
