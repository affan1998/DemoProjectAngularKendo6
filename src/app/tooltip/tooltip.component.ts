import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css'],
  styles: [`
  #agglomerations {
      position: relative;
      width: 692px;
      height: 480px;
      margin: 0 auto;
      background: url('https://www.telerik.com/kendo-angular-ui-develop/components/tooltip/assets/world-map.jpg') no-repeat 0 0;
  }

  #agglomerations > span {
      cursor: pointer;
      position: absolute;
      display: block;
      width: 12px;
      height: 12px;
      background-color: #fff600;
      border-radius: 30px;
      border: 0;
      box-shadow: 0 0 0 1px rgba(0,0,0,0.5);
      transition:  box-shadow .3s;
      z-index: 10;
  }

  #agglomerations > span:hover {
      box-shadow: 0 0 0 15px rgba(0,0,0,0.5);
  }

  #canton { top: 226px; left: 501px; }
  #jakarta { top: 266px; left: 494px; }
  #mexico { top: 227px; left: 182px; }
  #delhi { top: 214px; left: 448px; }
  #karachi { top: 222px; left: 431px; }
  #newyork { top: 188px; left: 214px; }
  #saopaolo { top: 304px; left: 248px; }
  #bombay { top: 233px; left: 438px; }
  #losangeles { top: 202px; left: 148px; }
  #osaka { top: 201px; left: 535px; }
  #moscow { top: 153px; left: 402px; }
`]
})
export class TooltipComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public data: any[] = [
    {
        text: 'Furniture', items: [
            { text: 'Tables & Chairs' },
            { text: 'Sofas' },
            { text: 'Occasional Furniture' }
        ]
    },
    {
        text: 'Decor', items: [
            { text: 'Bed Linen' },
            { text: 'Curtains & Blinds' },
            { text: 'Carpets' }
        ]
    }
];

}
