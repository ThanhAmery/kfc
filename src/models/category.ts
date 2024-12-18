import { Food } from "./food";

export interface FoodCategoryType {
    id: number;
    name: string;
    image: string;
    foods: Food[];
}