import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  charData_1 =  [220, 101, 90, 89, 88];
  usedRade = [76,65,55,57,38];

  charData_2 = ['RN001','RN002','RN003','RN004','RN005','RN006','RN007','RN008','RN009','RN002','RN002','RN002','RN002','RN002','RN009']
  usedRade_2 = [10,15,10,18,8,20,19,12,8,9,15,13,8,9,10];
  constructor() { }
}
