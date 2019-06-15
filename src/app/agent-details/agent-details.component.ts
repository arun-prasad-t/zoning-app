import { MapCordService } from './../map-cord.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-agent-details',
  templateUrl: './agent-details.component.html',
  styleUrls: ['./agent-details.component.css']
})
export class AgentDetailsComponent implements OnInit {

  agentdetails = this.fb.group({
    ProposalNo: null,
    emp1: null,
    ind1: null,
    bankassurance: null,
    Corporate: null,
    DMC: null,
    Others: null,
    BankRefCode: null,
    FSCName: null,
    FSCBranch: null,
    STMName: null,
    STMCode: null,
    FSCCode: null,
    PanNo: null,
    STMBranch: null,
    ReceiptNo: null
  });

  emp1 = false;
  ind1 = false;
  bankassurance = false;
  Corporate = false;
  DMC = false;
  Others = false;
  labelPosition = 'after';
  disabled = false;

  constructor(private fb: FormBuilder,
    private mapCordService: MapCordService) { }

  ngOnInit() {

  }

  GetLocation() {
    this.mapCordService.getLocation();
  }
}




