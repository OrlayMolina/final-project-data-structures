/**
 * Represents a category for posts.
 */
export class CategoryPost {
    
    /**
     * The ID of the category.
     */
    private id: number;

    /**
     * The name of the category.
     */
    private category: string;

    /**
     * Creates an instance of CategoryPost.
     * @param id The ID of the category.
     * @param category The name of the category.
     */
    public constructor(id: number, category: string){
        this.id = id;
        this.category = category;
    }

    /**
     * Retrieves the ID of the category.
     * @returns The ID of the category.
     */
    public getId(): number{
        return this.id;
    }

    /**
     * Sets the ID of the category.
     * @param id The ID to set.
     */
    public setId(id: number){
        this.id = id;
    }

    /**
     * Retrieves the name of the category.
     * @returns The name of the category.
     */
    public getCategory(): string {
        return this.category;
    }

    /**
     * Sets the name of the category.
     * @param category The name to set.
     */


    
    public setCategory(category: string) {
        this.category = category;
    }
}