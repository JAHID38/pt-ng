import { Component, OnInit } from '@angular/core';
import { PtNgDistribution } from '../Model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-distribution',
  templateUrl: './distribution.component.html',
  styleUrls: ['./distribution.component.css']
})
export class DistributionComponent implements OnInit {

  distributeObj: any;
  errMessage:any;

  constructor(
    private _service: ApiService
  ) { }

  ngOnInit(): void {
    debugger;
    this.distributionData();
  }

  distributionData()
  {
    this._service.getDistribution()
    .subscribe(
      response=>{
        debugger;
        this.distributeObj = response;
        console.info(response)
      },
        error => {
          this.errMessage = error;
        }
    )
  }

}
