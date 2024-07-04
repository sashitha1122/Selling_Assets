import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddCardComponent } from './add-card/add-card.component';
import { ViewmoreComponent } from './viewmore/viewmore.component';


export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    { 
         component: ViewmoreComponent,
         path: 'viewmore/:productId' 
    },
];
