import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';
import DataTable from 'datatables.net-dt';

@Component({
  selector: 'app-mahasiswa',
  standalone: true,
  imports: [],
  templateUrl: './mahasiswa.component.html',
  styleUrl: './mahasiswa.component.css'
})
export class MahasiswaComponent implements AfterViewInit{
  constructor(){}
  table: any = null;

  async getData(): Promise<void>{
    const raw_data = await fetch("https://stmikpontianak.cloud/011100862/tampilMahasiswa.php");
    const data : any = await raw_data.json();
    
    data.forEach((d: any) =>{
      const row = Object.keys(data[0]).map(key => d[key]);
      this.table.row.add(row);
    });

    this.table.draw(false);
    
  }

  ngAfterViewInit(): void {
    this.table = new DataTable('#table_id', {});
    this.getData().then().catch(console.error);
  }
}
