import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromProducts from './reducers';
import { HomeComponent } from './components/home/home.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StoreModule.forFeature(
      fromProducts.productsFeatureKey,
      fromProducts.reducers,
      { metaReducers: fromProducts.metaReducers }
    ),
  ],
})
export class ProductsModule {}
