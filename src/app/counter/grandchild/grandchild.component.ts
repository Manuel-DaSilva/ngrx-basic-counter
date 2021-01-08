import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../counter.actions';
@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styles: [],
})
export class GrandchildComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  reset(): void {
    this.store.dispatch(actions.reset());
  }
}
