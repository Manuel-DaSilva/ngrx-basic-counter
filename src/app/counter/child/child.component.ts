import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../counter.actions';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [],
})
export class ChildComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  multiply(): void {
    this.store.dispatch(actions.multiply({ value: 8 }));
  }

  divide(): void {
    this.store.dispatch(actions.divide({ value: 8 }));
  }
}
