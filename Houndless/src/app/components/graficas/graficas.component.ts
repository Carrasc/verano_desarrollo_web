import { Component, OnInit } from '@angular/core';
import { GraficasService} from '../../services/graficas.service';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.scss']
})
export class GraficasComponent implements OnInit {
  public chartType: string = 'horizontalBar';
  public chartDatasets: Array<any>;
  public chartLabels: Array<any> = ['Doberman', 'Chihuahua', 'Otro', 'Sahueso', 'Beagle', 'Pitbull'];
  count;
  public jsonString;
  public chihuhua;
  public finalC;

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  constructor( private graficasService:GraficasService) { }

  ngOnInit() {

    this.graficasService.getData("Doverman").subscribe((data: {}) => {
      this.jsonString = JSON.stringify(data);
      this.chihuhua = JSON.parse(this.jsonString);
      this.finalC = this.chihuhua.count;
    });
    console.log(this.finalC);
    var number: number = 1;
    this.chartDatasets = [
      { data: [number, 1, 1, 1, 1, 1, 0], label: 'Razas callejeras en anuncios' }
    ];
  }

}
