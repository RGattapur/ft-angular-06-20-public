import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ErrorComponent } from "../core/error/error.component";

// PreLoading Strategy

// Add this object to the forRoot() statement to preload all modules: {preloadingStrategy:PreloadAllModules}
// Alternatively define a class like CustomLoader for selective preloading
// Each lazy-loaded path adds a custom object with a boolean value that decides if the module loads immediately.
// Name the class {preloadingStrategy:CustomLoader} and providers: [CustomLoader]

class CustomLoader implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    console.log( `PreloadingStrategy for route ${route.path} is ${route.data.lazy}` )
    return route.data && route.data.lazy ? load() : of(null);
  }
}

// ------------------------------------------------------------------------------------

// The routes array uses Angular 8+ syntax to lazy load modules.
// The order of routes matters: the wild card error route needs to be last.

const AppRoutes: Routes = [

  { path: '', children:[] },
  { 
    path: 'fruit', 
    loadChildren: () => import('../features/fruit/fruit.module').then(m => m.FruitModule),
    data : { lazy:true }
  },
  { 
    path: 'vegetables', 
    loadChildren: () => import('../features/vegetables/vegetables.module').then(m => m.VegetablesModule),
    data : { lazy:false }
  },
  { path: '**', component: ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot( AppRoutes,{preloadingStrategy:CustomLoader} )],
  exports: [RouterModule],
  providers: [CustomLoader]
})

export class AppRoutingModule {}
