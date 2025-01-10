import { AfterViewInit, Component } from '@angular/core';
import DataTable from 'datatables.net-dt';
import 'datatables.net-responsive-dt';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements AfterViewInit {
  table: any;
  async getData(){
    const raw = await fetch("https://api.openweathermap.org/data/2.5/forecast?id=1630789&appid=7dd0819f04d5c2f9ac87e3eadc78f2e7");
    const data = await raw.json();
    console.log(data);

    data.list.forEach((d: any) =>{
      const waktu = new Date(d.dt_txt);
      console.log(waktu)
      const row = [
        `${waktu.toDateString()} ${waktu.toTimeString().replace("GMT+0700 (Western Indonesia Time)","WIB")}`,
        `<b>${d.weather[0].main}</b><br/><p>${d.weather[0].description}</p>`,
        d.weather[0].icon,
        `${Math.round(parseFloat(d.main.feels_like) - 273.15)} °C`,
        `${d.wind.speed} m/s`,
        `${d.main.humidity} g/m3`,
        `${d.main.sea_level} mdpl`
      ];
      this.table.row.add(row);
    });
    this.table.draw(false);
  }
  ngAfterViewInit(): void {
    this.table = new DataTable('#table_id', {
      responsive: true,
      columnDefs: [
        {
          targets: [2],
          render(data, type, row, meta) {
            return `<img src=" https://openweathermap.org/img/wn/${data}@2x.png"/>`;
          },
        },
        {
          targets: [4,5,6],
          className: "text-center"
        }
      ]
    });
    this.getData();
  }
  
}
