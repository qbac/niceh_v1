import { Injectable } from '@angular/core';
import { Http, Jsonp, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
  public wallet = '3LpVLgqKGMeomB2vZQswkHuvVJkUTqAxwh';
  // public wallet = '3Mc6NytY5xgP39JTVn9ouinmVMTThuwdAc';
  private urlBitbyBtcPln = 'https://bitbay.net/API/Public/BTCPLN/ticker.json';
  private urlNicehash = 'http://piho.co.pl/niceh/niceh_api.php?balance&wall=' + this.wallet;
  private urlNicehashLast24h = 'http://piho.co.pl/niceh/niceh_api.php?last24h&wall=' + this.wallet;
  private urlNicehashWorkers = 'http://piho.co.pl/niceh/niceh_api.php?workers&wall=' + this.wallet;

  constructor(private http: Http, private jsonp: Jsonp) {}

  getBitbyBtcPln() {
    return this.http
      .get(this.urlBitbyBtcPln)
      .toPromise()
      .then(response => response.json());
  }

  getNicehashBalance() {
    return this.http
      .get(this.urlNicehash)
      .toPromise()
      .then(response => response.json());
  }

  getNicehashLast24h() {
    return this.http
    .get(this.urlNicehashLast24h)
    .toPromise()
    .then(response => response.json());
  }

  getNicehashWorkers() {
    return this.http
    .get(this.urlNicehashWorkers)
    .toPromise()
    .then(response => response.json());
  }

  getTestData() {
    return this.jsonp
      .request(this.urlNicehash)
      .map(res => {
        return res.json();
      })
      .toPromise();
  }

  getRecent() {
    return this.jsonp
      .get(this.urlNicehash)
      .toPromise()
      .then(response => response.json());

/*return this.jsonp
.get(this.urlNicehash)
.subscribe(
 (data) => {
     console.log(data);
 },
 (error) => {
     console.log(error);
 });*/
  }
}
