import { Component, OnInit } from '@angular/core';
import { LoginsService } from '../logins.service';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.scss']
})
export class LoginsComponent implements OnInit {
  events: any = [];
  search = '';
  logons = true;
  logoffs = true;
  locks = true;
  unlocks = true;
  start = new Date(new Date().getUTCFullYear(), new Date().getUTCMonth(), new Date().getUTCDate());
  end = new Date(new Date().getUTCFullYear(), new Date().getUTCMonth(), new Date().getUTCDate(), 23, 59, 59);
  take = 100;
  skip = 0;
  displayedColumns: string[] = ['timestamp', 'machine', 'username', 'eventType', 'gw', 'dc'];
  
  constructor(private loginsService: LoginsService) { }

  ngOnInit(): void {
    this.update();
  }

  update() {
    this.loginsService
      .getBasicEvents(
        this.start, this.end,
        this.search,
        this.logons, this.logoffs, this.locks, this.unlocks,
        this.take, this.skip)
        .subscribe(data => { this.events = data;
    });
  }

  changeEvent(event: any) {
    console.log(event.value);
  }
}
