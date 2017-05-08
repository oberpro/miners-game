import { Injectable } from '@angular/core';
import { MgIfdataservice } from 'app/mg-ifdataservice';
export class MgDataserviceService implements MgIfdataservice {

  constructor(public copper: number, public silver: number, public gold: number, public titan: number) { }

}
