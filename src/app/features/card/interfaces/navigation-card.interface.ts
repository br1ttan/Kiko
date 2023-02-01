import { ProductCategoryEnum } from "@features/shop/enums";

export interface INavigationCard {
    category: ProductCategoryEnum;
    id: string | number;    
}
