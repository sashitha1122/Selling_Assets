import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AddCardComponent } from './add-card/add-card.component';
import { ViewmoreComponent } from './viewmore/viewmore.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'add-card',
        component:AddCardComponent
    },
    // {
    //     path:'viewmore',
    //     component:ViewmoreComponent
    // },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'contact',
        component:ContactComponent
    }
];
