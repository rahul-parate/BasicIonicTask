import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

items: any[] = [
    {
      id: 1,
      name: "Item 1"
    },
    {
      id: 2,
      name: "Item 2"
    },
    {
      id: 3,
      name: "Item 3"
    },
    {
      id: 4,
      name: "Item 4"
    },
    {
      id: 5,
      name: "Item 5"
    }
  ];


 selected_item:String = '';

  compareWithFn(o1, o2){
  	console.log('not working');
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };

  onChange(cvalue){
  	console.log(cvalue);
  	this.selected_item = cvalue
  	return this.selected_item;
  }


  constructor(public navCtrl: NavController) {

  }

}


