import { Component, OnInit } from '@angular/core';
import { CommonModule, NgStyle ,NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'website-options-changepass',
  templateUrl: './options-changepass.page.html',
  styleUrls: ['./options-changepass.page.css']
})
export class OptionsChangepassPage implements OnInit {

email: any;
hatali: false;

  constructor() { }

  ngOnInit(): void {
  }

}
