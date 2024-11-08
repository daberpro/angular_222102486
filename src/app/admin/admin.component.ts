import { Component,ViewEncapsulation } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, RouterModule, SidebarComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AdminComponent {
  constructor(){
    document.body.classList.remove("login-page");
  }

  moduleName: string = "";
}
