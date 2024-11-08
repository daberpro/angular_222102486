import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { WeatherComponent } from './weather/weather.component';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "admin",
        component: AdminComponent,
        children: [
            {
                path: "main-dashboard",
                component: MainDashboardComponent,
                data: {
                    nim: "222102486",
                    nama: "Ari susanto"
                }
            },
            {
                path: "weather",
                component: WeatherComponent
            }
        ]
    },
    {
        path: "",
        redirectTo: "/login",
        pathMatch: 'full'
    }
];
