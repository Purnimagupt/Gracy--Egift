import { Component, OnInit } from '@angular/core';
import { GiftCard } from 'src/app/models/gift-card';
import { GiftcardService } from 'src/app/service/giftcard.service';



@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit {
  
 giftcard: GiftCard[];
  constructor(private giftservice:GiftcardService) { 
    this.giftcard=new Array();
  }
  ngOnInit(): void {
    let cat="Birthday";
    alert("Display Category Birthday") ;
    if(cat=="Birthday"){
  this.giftservice.getGiftCardByCategoryId(cat).subscribe(

    
    c=>{this.giftcard=c;
      console.log(JSON.stringify(c)); 
    })


  }
  alert(JSON.stringify(this.giftcard))
 
  }
  getCategory(){
    
}
}
