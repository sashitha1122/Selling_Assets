import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddCardComponent } from './add-card/add-card.component';
import { ViewmoreComponent } from './viewmore/viewmore.component';


// @NgModule({
//     imports: [
//       CommonModule,
//       RouterModule.forRoot(routes)
//     ],
//     exports: [RouterModule]
//   })

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    { path: 'product/:id',
     component: ViewmoreComponent 
    },
];
