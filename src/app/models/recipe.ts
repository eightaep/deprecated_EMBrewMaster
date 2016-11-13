import { Ingredient, Hop, Yeast, Grain, MiscIngredient } from './ingredients';
import { Rest } from './rest';

export class Recipe {
    constructor(public name: string,
                public yeast: Array<Ingredient<Yeast>>, 
                public hops: Array<[Ingredient<Hop>, number]>, // number of milliseconds from begin of cooking
                public grains: Array<Ingredient<Grain>>,
                public miscIngredients: Array<Ingredient<MiscIngredient>>,
                public rests: Array<Rest>,
                public coldHop: Ingredient<Hop>) {
        
    }
}