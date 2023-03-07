import { Component, OnInit } from '@angular/core';
import { ProductActions, ProductState, productList } from '../../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dataSource$: Observable<[]> = new Observable<[]>();
  displayedColumns: string[] = [
    'Product ID',
    'Name',
    'Description',
    'Date Created',
  ];
  constructor(private store: Store<ProductState>) {}

  ngOnInit(): void {
    this.store.dispatch(ProductActions.product());
    this.dataSource$ = this.store.select(productList);
  }
}
