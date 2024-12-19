import { Component,ViewEncapsulation } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, RouterModule, Router } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CookieService } from 'ngx-cookie-service';

declare const $:any;

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, RouterModule, SidebarComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AdminComponent {
  constructor(private cookie: CookieService, private route: Router){
    document.body.classList.remove("login-page");
  }

  LogOut(){
    $("#logoutModal").modal("hide");
    document.body.classList.add("login-page");
    this.cookie.delete("userId");
    this.route.navigate(["/login"]);
  }

  ShowWarningLogout(message: string = ""){
    $("#logoutModal").modal("show");
    (document.querySelector("#message") as HTMLSpanElement).innerHTML = message;
  }

  moduleName: string = "";
}
