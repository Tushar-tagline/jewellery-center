import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'jewellery-center-go-back',
  templateUrl: './go-back.component.html',
  styleUrls: ['./go-back.component.scss']
})
export class GoBackComponent implements OnInit {

  @Input() goBack?= 'Back to Page';

  constructor() { }

  ngOnInit(): void { }

}
