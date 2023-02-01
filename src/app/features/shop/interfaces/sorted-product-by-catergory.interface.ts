import { IProduct } from './product.interface';

export interface IProductByCategory {
    readonly electronics: IProduct[];
    readonly jewelery: IProduct[];
    readonly mens: IProduct[];
    readonly womens: IProduct[];
}
