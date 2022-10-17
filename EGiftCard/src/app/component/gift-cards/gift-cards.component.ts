import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GiftCard } from 'src/app/models/gift-card';
import { GiftcardService } from 'src/app/service/giftcard.service';

@Component({
  selector: 'app-gift-cards',
  templateUrl: './gift-cards.component.html',
  styleUrls: ['./gift-cards.component.css']
})
export class GiftCardsComponent implements OnInit {
/*getGiftCardByCategory(arg0: any) {
throw new Error('Method not implemented.');
}*/

sendGiftCard(arg0: any) {
throw new Error('Method not implemented.');
}

  giftcard:GiftCard[];
 
  constructor(private giftservice:GiftcardService) { 
    this.giftcard=new Array();
  }

  ngOnInit(): void {
    alert('Hello');
    this.giftservice.getAllGiftCards()
    .subscribe(
      data=>{
        alert(JSON.stringify(data))
this.giftcard=data},
      err=>{console.log(err)}
    );

  }
/*getCardByCategory(){
  this.giftservice.getGiftCardByCategory()
}
  */

}
