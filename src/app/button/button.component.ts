import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  styles: [`
        .example-wrapper,.example-col{ vertical-align: top; }

        .pedro {
            background-image: url("https://demos.telerik.com/kendo-ui/content/web/Customers/SPLIR.jpg");
        }

        .thomas {
            background-image: url("https://demos.telerik.com/kendo-ui/content/web/Customers/RICSU.jpg");
        }

        .christina {
            background-image: url("https://demos.telerik.com/kendo-ui/content/web/Customers/BERGS.jpg");
        }

        .paula {
            background-image: url("https://demos.telerik.com/kendo-ui/content/web/Customers/RATTC.jpg");
        }
    `],
    encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent{
    public imageUrl = 'https://demos.telerik.com/kendo-ui/content/shared/icons/sports/snowboarding.png';
    value1 = '';
    update(value: string) { this.value1 = value; }
    formatLabel(value: number) {
        if (value >= 1000) {
          return Math.round(value / 1000) + 'k';
        }
    
        return value;
      }
    public splitButtonItems: Array<any> = [{
        text: 'Keep Text Only',
        icon: 'paste-plain-text',
        click: () => { console.log('Keep Text Only click handler'); }
    }, {
        text: 'Paste as HTML',
        icon: 'paste-as-html'
    }, {
        text: 'Paste Markdown',
        icon: 'paste-markdown'
    }, {
        text: 'Set Default Paste'
    }];

    public dropDownButtonItems: Array<any> = [{
        text: 'My Profile'
    }, {
        text: 'Friend Requests'
    }, {
        text: 'Account Settings'
    }, {
        text: 'Support'
    }, {
        text: 'Log Out'
    }];

    public chips: Array<any> = [
        {
            label: 'Pedro Afonso',
            iconClass: 'k-chip-avatar pedro'
        },
        {
            label: 'Thomas Hardy',
            iconClass: 'k-chip-avatar thomas'
        },
        {
            label: 'Christina Berg',
            iconClass: 'k-chip-avatar christina'
        },
        {
            label: 'Paula Wilson',
            iconClass: 'k-chip-avatar paula'
        }
    ];

    public onSplitButtonClick(): void {
        console.log('Paste');
    }

    public onSplitButtonItemClick(dataItem: any): void {
        if (dataItem) {
            console.log(dataItem.text);
        }
    }

    public onButtonClick() {
        console.log('click');
    }
}
