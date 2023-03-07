import { Observable, of } from 'rxjs';
import products from '../../mocks/products.json';
export class ProductsService {
  getProducts(): Observable<any> {
    return of(products.data);
  }
}
