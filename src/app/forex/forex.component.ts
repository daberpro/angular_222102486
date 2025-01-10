import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-forex',
  standalone: true,
  imports: [],
  templateUrl: './forex.component.html',
  styleUrl: './forex.component.css'
})
export class ForexComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.getData();
  }

  async getData(){
    const raw = await fetch("https://openexchangerates.org/api/latest.json?app_id=09e84604b1ff40c8805179afc1aba8e8");
    const data = await raw.json();
    console.log(data);
  }

  

}
