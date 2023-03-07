import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { HomeComponent } from './components/home/home.component';
import { ProductsRoutingModule } from './products-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects, productFeatureKey, productReducer } from './store';
import { ProductsService } from './service/products.service';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StoreModule.forFeature(
      productFeatureKey,
      productReducer
    ),
    EffectsModule.forFeature([ProductEffects]),
    MatTableModule,
  ],
  providers: [ProductsService],
})
export class ProductsModule {}
