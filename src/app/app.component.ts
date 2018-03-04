import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  btcPln = 0;
  balance = 0;
  last24h = 0;
  workers = '';
  wallet = '';

  constructor(private appService: AppService) {
    this.refAI();
  }

  refAI() {
    this.balance = 0;
    this.last24h = 0;
    this.bitbayBtcPln();
    this.niceHashBalance();
    this.niceHashLast24h();
    this.nicehashWorkers();
    setTimeout(() => {
      console.log(this.workers);
    }, 1500);
    this.wallet = this.appService.wallet;
  }

  bitbayBtcPln() {
    this.appService.getBitbyBtcPln().then(btcpln => (this.btcPln = parseFloat(btcpln.ask)));
  }
  niceHashBalance() {
    let balanceArray = [];
    this.appService
      .getNicehashBalance()
      .then(btcpln => (balanceArray = btcpln.result.stats));

    setTimeout(() => {
      for (let i = 0; i < balanceArray.length; i++) {
        this.balance = this.balance + parseFloat(balanceArray[i].balance);
      }
    }, 1500);
  }

  niceHashLast24h() {
    this.appService.getNicehashLast24h()
    .then(l24h => (this.last24h = parseFloat(l24h.last24h)));
  }

  nicehashWorkers () {
    this.appService.getNicehashWorkers()
    .then(work => (this.workers = work.result.workers));
  }

    private newFunction() {
        return this.niceHashLast24h;
    }
}
