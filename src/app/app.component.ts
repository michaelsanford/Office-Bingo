import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Office Bingo';

  bannerType: "info" | "primary" | "success" | "warning" = "info";
}
