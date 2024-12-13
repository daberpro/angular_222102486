import { Component,ViewEncapsulation } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

declare const $:any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  constructor(private cookie: CookieService, private router: Router){
    document.body.classList.add("login-page");
  }

  async SignIn(): Promise<void>{
    const username = (document.querySelector("#username") as HTMLInputElement)?.value;
    const password = (document.querySelector("#password") as HTMLInputElement)?.value;

    const data = [
      encodeURIComponent(username),
      encodeURIComponent(password)
    ];

    const response = await fetch(`https://stmikpontianak.cloud/011100862/login.php?id=${data[0]}&password=${data[1]}`);
    const result_json = await response.json();
    const row_data = result_json[0];

    if(row_data.idCount !== "1"){
      console.log(result_json);
      this.ShowWarning("Id atau password tidak cocok");
      return;
    }

    this.cookie.set("userId",username);
    this.router.navigate(["/admin"]);

  }

  ShowWarning(message: string = ""){
    $("#loginModal").modal("show");
    (document.querySelector("#message") as HTMLSpanElement).innerHTML = message;
  }
}
