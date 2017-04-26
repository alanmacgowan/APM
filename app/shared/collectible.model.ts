export class Collectible{
    public id: number;
    public name:string;
    public description:string;
    public rating: number;

    constructor(id:number, name:string, description:string, rating: number){
        this.id = id;
        this.name = name;
        this.description = description;
        this.rating = rating;
    }
}