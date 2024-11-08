import { Component ,Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.css'
})
export class MainDashboardComponent implements OnInit {
  @Input() nim: string = "";
  @Input() nama: string = "";

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
      const main = this;
      this.route.data.subscribe(d =>{
        main.nama = d["nama"];
        main.nim = d["nim"];
      })
  }
}
