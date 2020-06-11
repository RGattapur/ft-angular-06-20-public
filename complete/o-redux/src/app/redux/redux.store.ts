// redux.store.ts
// app.module.ts ========> providers: [storeProvider]

import { InjectionToken } from '@angular/core';

import { createStore } from 'redux';
import { reducer } from './redux.reducer';

declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION__: any }
}

const makeStore = () => createStore( reducer, window.__REDUX_DEVTOOLS_EXTENSION__())

// Without Chrome Redux Dev Tools:
// const makeStore = () => createStore( reducer )

const MovieStore = new InjectionToken('Movie.store');

const storeProvider = [{ provide: MovieStore, useFactory: makeStore }];

export{ MovieStore, storeProvider }
