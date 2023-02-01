import { ProductCategoryEnum } from "@features/shop/enums";

export const PRODUCT_NAVIGATION_MAP = new Map<ProductCategoryEnum, string>([
    [ProductCategoryEnum.Electronics, 'electronics'],
    [ProductCategoryEnum.MensClothing, 'mens'],
    [ProductCategoryEnum.WomensClothing, 'womens'],
    [ProductCategoryEnum.Jewelery, 'jewelery']
]);
