import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  logo = '../assets/logo-mini.svg';
  amount= 2000;
  publicKey = 'FLWPUBK-1bbfa0f1eddcd5841b0de5de23d193f4-X';

  update(value: number) {
    this.amount = value;
  }

  payNow() {
    window.getpaidSetup({
        amount: this.amount,
        txref: 'rave-checkout-1508751596',
        PBFPubKey: this.publicKey,
        custom_title: 'Pay OG',
        payment_method: 'both',
        customer_email: 'john@example.com',
        customer_phone: '0247643454',
        country: 'Ghana',
        currency: 'GHS',
        pay_button_text : 'Pay OG',
        onclose: function() {},
        callback: function(d) {
          // var flw_ref = d.tx.flwRef;
          if (d.tx.chargeResponseCode === '00' || d.tx.chargeResponseCode === '0') {
            console.log('Fast and easy! Payment processed')
          } else {
            console.log('Sorry, please try again!');
          }
          console.log(d);
      }
    });
  }
}
