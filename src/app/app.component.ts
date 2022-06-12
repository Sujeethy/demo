import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  colorOptions: string[] = ['#5d77f5', '#0fd085', '#ffba5b', '#f95e62', 'lightpink'];
  initialColor: string = 'red';
  
}
