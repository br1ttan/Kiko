import { IProduct } from './product.interface';

export interface IProductByCategory {
    readonly electronics: IProduct[];
    readonly jewelry: IProduct[];
    readonly mens: IProduct[];
    readonly womens: IProduct[];
}
