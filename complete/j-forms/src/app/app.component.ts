
import { Component, OnInit } from '@angular/core';

import {
    FormBuilder,
    FormGroup,
    FormControl,
    FormArray,
    AbstractControl,
    Validators
} from '@angular/forms';

import { Observable, interval } from 'rxjs';
import { map, filter, debounceTime, bufferTime, tap } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    genres = new FormArray([]);

    film: FormGroup;

    // Shorthand variables for the director-control and the title-control

    dc:FormControl;
    tc:FormControl;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.createForm();
    }

    createForm() {

        const config = {
          title :    [ "" , this.checkTitle ],
          director : [ "" , this.checkName ]
        }

        this.film = this.fb.group( config );

        // this.film = new FormGroup({
        //     title: new FormControl("", this.checkTitle),
        //     director: new FormControl("", this.checkName)
        // })

        this.dc = this.film.controls.director as FormControl;
        this.tc = this.film.controls.title as FormControl;

        // this.monitorForm();
        this.debugGenres();
    }

    // Check that director has at least two names.
    checkName(d: FormControl) {
        let check = d.value.trim().split(" ").length >= 2;
        return !check ? { shortName: "Minimum of two words" } : null;
    }

    // Require title case for all words in the film title.

    checkTitle(d: FormControl) {
        let pattern = /^(?:[A-Z][^\s]*\s?)+$/;
        return !pattern.test(d.value) ? { titleCase: "Title Case for all words" } : null;
    }

    addFilm(film) {

        console.log( this.film.value )
        console.log( this.genres.value.filter( g => g.length ))

        if (film.valid) {
            let empty = { title: "", director: "" };
            this.film.reset(empty);
            this.emptyGenres();
        }
    }

    monitorForm() {

        // this.tc.valueChanges is an Observable stream of letters in 1 control
        // this.film.valueChanges is a stream of form objects

        this.film.valueChanges

            // Only logs valid forms
            // Logs changes once every half second.
            // Changes film title to uppercase
            // Uses TAP operator for debugging.

            .pipe(
                debounceTime(500),
                filter(film => this.film.valid),
                map(ob => ({ ...ob, title: ob.title.toUpperCase() })),
                tap(ob => ob)
            )

            .subscribe(film => console.log(JSON.stringify(film)))
    }

    addGenre() {
      this.genres.push(new FormControl(""));
    }

    removeGenre(j) {
      this.genres.removeAt(j);
    }

    emptyGenres() {
      this.genres.clear()
    }

    debugGenres() {
      this.genres.valueChanges.subscribe( d => console.log(d))
    }

}
