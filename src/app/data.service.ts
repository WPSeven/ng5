import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class DataService {

	private goals = new BehaviorSubject<any>(['ကနဦးရည်မှန်းချက်','နောက်ထပ်ရီစရာဘဝရည်မှန်းချက်']);
	goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal){
  	this.goals.next(goal);
  }
}
