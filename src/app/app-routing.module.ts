import { HeroesComponent } from './heros-app/heros.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    //{path:'',component:HeroesComponent},
    { path: 'heros' , component : HeroesComponent
    }
    //{ path: '**', redirectTo: '' , pathMatch: 'full' }
];

@NgModule({
    exports: [
        RouterModule,
    ],
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
})
export class AppRoutingModule { 
    
}
