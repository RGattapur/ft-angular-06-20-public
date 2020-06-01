
import { 
	of as ObservableOf,
	from, 
	Subject, 
	interval as ObservableInterval } from 'rxjs';

import { filter,map,reduce,tap,take } from 'rxjs/operators';

import {draw,randomLetter,fourBases,europe} from "./utils";
import './styles.css';
