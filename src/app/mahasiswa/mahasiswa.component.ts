import { AfterViewInit, Component } from '@angular/core';
import DataTable from 'datatables.net-dt';
import 'datatables.net-responsive-dt';

@Component({
  selector: 'app-mahasiswa',
  standalone: true,
  imports: [],
  templateUrl: './mahasiswa.component.html',
  styleUrl: './mahasiswa.component.css'
})
export class MahasiswaComponent implements AfterViewInit {
  constructor() { }
  table: any = null;
  data: any = null;
  Object: Object = Object;

  async getData(): Promise<void> {
    this.table.clear();
    const raw_data = await fetch("https://stmikpontianak.cloud/011100862/tampilMahasiswa.php");
    const data: any = await raw_data.json();
    console.log(data);

    data.forEach((d: any) => {
      const row = Object.keys(data[0]).map(key => d[key]);
      this.table.row.add(row);
    });
    this.table.draw(false);
  }

  Add(){
    const nim = document.querySelector('input[name="Nim"]');
    const nama = document.querySelector('input[name="Nama"]');
    const alamat = document.querySelector('input[name="Alamat"]');
    const jk = document.querySelector('select[name="JenisKelamin"]');
    const tl = document.querySelector('input[name="TempatLahir"]');
    const tgl = document.querySelector('input[name="TanggalLahir"]');
    const jp = document.querySelector('select[name="JP"]');
    const status = document.querySelector('select[name="StatusPernikahan"]');
    const thn_msk = document.querySelector('input[name="TahunMasuk"]');
    
    //@ts-ignore
    fetch(`https://stmikpontianak.cloud/011100862/tambahMahasiswa.php?alamat=${encodeURIComponent(alamat.value)}&jenisKelamin=${encodeURIComponent(jk.value)}&jp=${encodeURIComponent(jp.value)}&nama=${encodeURIComponent(nama.value)}&nim=${encodeURIComponent(nim.value)}&statusPernikahan=${encodeURIComponent(status.value)}&tahunMasuk=${encodeURIComponent(thn_msk.value)}&tanggalLahir=${encodeURIComponent(tgl.value)}&tempatLahir=${encodeURIComponent(tl.value)}`)
    .then(d => d.text())
    .then(d =>{
      this.getData();

      //@ts-ignore
      console.log(`${d.status}: ${d.message}`);
      //@ts-ignore
      $("#exampleModal").modal("hide");
      console.log("success to add data");
    })
    .catch(d =>{
      console.log(d);
      alert("Gagal menambahkan data");
    });


  }

  ngAfterViewInit(): void {

    this.table = new DataTable('#table_id', {
      responsive: true,
     
    });
    this.getData().then().catch(console.error);
  }
}