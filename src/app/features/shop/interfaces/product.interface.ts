import { ProductCategoryEnum } from "../enums";

export interface IProduct {
    readonly productId?: string | number;
    readonly id: string | number;
    readonly title: string;
    readonly price: number;
    readonly description: string;
    readonly category: ProductCategoryEnum;
    readonly image: string;
    readonly rating: Rating;
}

interface Rating {
    readonly rate: number;
    readonly count: number;
}
