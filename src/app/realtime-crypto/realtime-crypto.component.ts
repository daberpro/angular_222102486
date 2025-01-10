import { Component, AfterViewInit } from '@angular/core';
import DataTable from 'datatables.net-dt';
import 'datatables.net-responsive-dt';

@Component({
  selector: 'app-realtime-forex',
  standalone: true,
  imports: [],
  templateUrl: './realtime-crypto.component.html',
  styleUrl: './realtime-crypto.component.css'
})
export class RealtimeCryptoComponent implements AfterViewInit {

  table: any;
  data_label: any;
  data: any;

  constructor(){
    this.data_label = [];
    this.data = {};
  }

  formatNumberWithDollar(number: number) {
    let formatting_options = {
       style: 'currency',
       currency: 'USD',
       minimumFractionDigits: 3,
    }
    // users can see how locale passed as a parameter.
    //@ts-ignore
    let dollarString = new Intl.NumberFormat("en-US", formatting_options);
    let finalString = dollarString.format(number);
    return finalString;
 }

  async getData(): Promise<void>{

    const raw_data = await fetch("https://api.coincap.io/v2/assets");
    const result_data = await raw_data.json();
    const labels = [];

    // @ts-ignore
    this.table = new DataTable('#table_id',{ responsive: true });
    for(let x of result_data.data){
      this.table.row.add(
        Object.keys(x).map(d => x[d])
      );
      labels.push(x.id);
    }
    this.table.draw(false);

    const ws = new WebSocket(`wss://ws.coincap.io/prices?assets=${labels.join(",")}`);
    ws.onmessage = ({data}) =>{
      let update_data = JSON.parse(data);
      this.data = {...this.data,...update_data};
      this.data_label = Object.entries(this.data);
    };

  }

  ngAfterViewInit(){
    this.getData();
  }

}
