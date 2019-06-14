import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  personalDetails = this.formBuilder.group({
    purposeOfInsurance : null,
    FirstName: null,
    MiddleName:null,
    LastName:null,
    DateOfBirth: null,  
    FirstName2: null,
    MiddleName2:null,
    LastName2:null,
    DateOfBirth2: null,
    Nationality:null,
    Nationality2:null
  });
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
  }

}
