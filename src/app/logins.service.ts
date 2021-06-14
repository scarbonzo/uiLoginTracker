import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginsService {
  private baseUrl = 'http://logins.api.dev.lsnj.org/api/v1/';

  constructor(private httpClient: HttpClient) { }

  getEvents(start: Date, end: Date,
            machine: string, username: string,
            startups: boolean, shutdowns: boolean, crashes: boolean, renames: boolean,
            logons: boolean, logoffs: boolean, locks: boolean, unlocks: boolean,
            take: number, skip: number) {
    let endpoint = 'logins';
    endpoint = endpoint + '?machine=' + machine + '&username=' + username;
    endpoint = endpoint + '&start=' + start.toISOString() + '&end=' + end.toISOString();
    endpoint = endpoint + '&startups=' + startups + '&shutdowns=' + shutdowns + '&crashes=' + crashes + '&renames=' + renames;
    endpoint = endpoint + '&logons=' + logons + '&logoffs=' + logoffs + '&locks=' + locks + '&unlocks=' + unlocks;
    endpoint = endpoint + '&take=' + take + '&skip=' + skip + '&desc=true';
    return this.httpClient.get(this.baseUrl + endpoint);
  }

  getBasicEvents(start: Date, end: Date,
                 search: string,
                 logons: boolean, logoffs: boolean, locks: boolean, unlocks: boolean,
                 take: number, skip: number) {
    let endpoint = 'logins/quick';
    endpoint = endpoint + '?search=' + search;
    endpoint = endpoint + '&start=' + start.toISOString() + '&end=' + end.toISOString();
    endpoint = endpoint + '&logons=' + logons + '&logoffs=' + logoffs + '&locks=' + locks + '&unlocks=' + unlocks;
    endpoint = endpoint + '&take=' + take + '&skip=' + skip + '&desc=true';
    return this.httpClient.get(this.baseUrl + endpoint);
  }
}
