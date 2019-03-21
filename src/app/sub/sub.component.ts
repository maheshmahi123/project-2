import { Component, OnInit, Input } from '@angular/core';
import { all } from 'q';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {


  @Input() all ;

  constructor() { }

  ngOnInit() {


  }


}