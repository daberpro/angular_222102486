import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { WeatherComponent } from './weather/weather.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { otentikasiGuard } from './otentikasi.guard';
import { RealtimeCryptoComponent } from './realtime-crypto/realtime-crypto.component';
import { ForexComponent } from './forex/forex.component';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "admin",
        component: AdminComponent,
        canActivate: [otentikasiGuard],
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
            },
            {
                path: "mahasiswa",
                component: MahasiswaComponent
            },
            {
                path: "realtime-crypto",
                component: RealtimeCryptoComponent
            },
            {
                path: "forex",
                component: ForexComponent
            }
        ]
    },
    {
        path: "",
        redirectTo: "/login",
        pathMatch: 'full'
    }
];
