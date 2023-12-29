import { Routes } from '@angular/router';


import { HomeComponent } from './components/pages/user/home/home.component';
import { AboutusComponent } from './components/pages/user/aboutus/aboutus.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "about-us",
        component: AboutusComponent
    }
];
