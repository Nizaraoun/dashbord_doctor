import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'hospital-sidenav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

}
