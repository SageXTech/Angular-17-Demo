import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-task';
  t1: boolean = true;
  t2: boolean = false;
  t3: boolean = true;
  t4: boolean = false;
  t5: boolean = true;
  t6: boolean = false;
  expandAll: boolean = false;

  expand() {
    this.expandAll = !this.expandAll
    if (this.expandAll) {
      this.t1 = true;
      this.t2 = true;
      this.t3 = true;
      this.t4 = true;
      this.t5 = true;
      this.t6 = true;
    } else {
      this.t1 = false;
      this.t2 = false;
      this.t3 = false;
      this.t4 = false;
      this.t5 = false;
      this.t6 = false;
    }
  }
}
