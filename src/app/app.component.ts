import { Component } from '@angular/core';
import { ressults, Result } from './results';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  results = ressults;
  selectedResultIndex: number | undefined;
}
