import { Component, OnInit } from '@angular/core';
import { CommonService} from '../service/common.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  testList:any = [];
  constructor(private service: CommonService ) { }

  ngOnInit(): void {
  }
  Test()
  {
    this.service.test1(0).subscribe((res:any)=>{
      this.testList = res;
    })
  }
}
