
import { of, pipe, timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { fakeAsync, tick } from "@angular/core/testing";

import { AppComponent } from "../app.component";
import { CityService } from '../services/city.service';

import { TESTDATA } from "../services/city.testdata" ;
