import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'website-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.css'],
})
export class TestPage implements OnInit {
  list: tests[] = [
    {
      title: 'SORU 1',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
interface tests {
  title: string;
}
