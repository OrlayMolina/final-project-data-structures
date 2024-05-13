export class CategoryPost {

    private id: number;
    private category: string;

    public constructor(id: number, category: string){
        this.id = id;
        this.category = category;
    }

    public getId(): number{
        return this.id;
    }

    public setId(id: number){
        this.id = id;
    }

    public getCategory(): string {
        return this.category;
    }

    public setCategory(category: string) {
        this.category = category;
    }
}