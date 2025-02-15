import { Component } from '@angular/core';
import { HeaderComponent} from '../../Shared/Header/Header.component';

@Component({
  selector: 'app-Home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent {
}
