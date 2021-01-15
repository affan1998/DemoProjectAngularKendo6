import { Component, ViewEncapsulation } from '@angular/core';
import { BreadCrumbItem } from '@progress/kendo-angular-navigation';

@Component({
  selector: 'app-root',
 templateUrl: './app.component.html',
  
styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,  
})
export class AppComponent {
  public kendokaAvatar = 'https://www.telerik.com/kendo-angular-ui-develop/components/navigation/appbar/assets/kendoka-angular.png';
  currentItem = 'Television';
  flag:boolean=false;
  public items: BreadCrumbItem[] = [
      {
          text: 'Home',
          title: 'Home',
          icon: 'home'
      },
      {
          text: 'Products',
          title: 'Products'
      },
      {
          text: 'Computer peripherals',
          title: 'Computer peripherals'
      },
      {
          text: 'Keyboards',
          title: 'Keyboards'
      },
      {
          text: 'Gaming keyboards',
          title: 'Gaming keyboards'
      }
  ];
}
