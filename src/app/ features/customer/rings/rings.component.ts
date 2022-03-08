import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jewellery-center-rings',
  templateUrl: './rings.component.html',
  styleUrls: ['./rings.component.scss']
})
export class RingsComponent implements OnInit {
  public pruducts:Array<any>=[{
    id:'1',
    value:'product'
    
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
