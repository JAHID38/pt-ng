import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { PtFile, PtNg } from '../Model';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  // _model: PtNg = new PtNg();
  _model: any;
  errMessage:any;
  ptng: PtNg = new PtNg();
  ptFile: PtFile = new PtFile();

  constructor(
    private _service: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  startRandom()
  {
    debugger;
    if (this.ptFile.fileLength == null)
    {
      debugger;
      this.errMessage = "Please input file size";
    }
    else{
      if (this.ptFile.fileLength < 1)
      {
        this.errMessage = "Invalid file size!";
      }
      else{
        this.errMessage = null;
        this._service.getData(this.ptFile.fileLength).subscribe(response => {
          this.ptng = response;
        },
        error => {
          this.errMessage = error;
        })
      }
    }
    

  }
}
