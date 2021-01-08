import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducers';
import * as actions from './counter/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  counter: number;

  constructor(private store: Store<AppState>) {
    this.counter = 0;
  }
  ngOnInit(): void {
    this.store.select('counter').subscribe((state) => (this.counter = state));
  }

  increment(): void {
    this.store.dispatch(actions.increment());
  }

  decrement(): void {
    this.store.dispatch(actions.decrement());
  }
}
