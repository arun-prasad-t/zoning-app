import { Injectable } from '@angular/core';
import loc from '../assets/location-map.json';

@Injectable({
  providedIn: 'root'
})
export class MapCordService {

  x1 = 0;
  x2 = 0;
  y1 = 0;
  y2 = 0;
  constructor() { }

  getLocation(){
    console.log(loc.NonMedical.AgentDetails.FSCCode);
    this.x1 = loc.NonMedical.AgentDetails.FSCCode[0];
    this.y1 = loc.NonMedical.AgentDetails.FSCCode[1];
    this.x2 = loc.NonMedical.AgentDetails.FSCCode[2];
    this.y2 = loc.NonMedical.AgentDetails.FSCCode[3];
  }
}
