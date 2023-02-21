
export class Recipe{

    constructor(
        public id?: number, 
        public name?: string,
        public description?: string, 
        public type?: string, 
        public cook_time?: string, 
        public img_url?: string,
        public instructions?: string, 
        public looks?: number  
    ){

    }
}
