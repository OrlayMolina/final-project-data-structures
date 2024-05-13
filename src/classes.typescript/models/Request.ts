    import { Seller } from "./Sellers";
    import { IRequest } from "../interfaces/Request.type";

    /**
     * Represents a request made by a seller.
     */
    export class Request {
        contact: Seller | null;   // The seller who made the request.
        date: Date;       // The date when the request was made.
        accept: boolean;  // Indicates whether the request has been accepted.

        /**
         * Creates an instance of Request.
         * @param {IRequest} param0 Object containing seller, date, and accept properties.
         */
        public constructor({contact, date, accept}: IRequest) {
            this.contact = contact;
            this.date = date;
            this.accept = accept;
        }

        /**
         * Retrieves the seller who made the request.
         * @returns The seller who made the request.
         */
        public getSeller(): Seller | null{
            return this.contact;
        }

        /**
         * Sets the seller who made the request.
         * @param {Seller} seller The seller who made the request.
         */
        public setSeller(seller: Seller): void {
            this.contact = seller;
        }

        /**
         * Retrieves the date when the request was made.
         * @returns The date when the request was made.
         */
        public getDate(): Date {
            return this.date;
        }

        /**
         * Sets the date when the request was made.
         * @param {Date} date The date when the request was made.
         */
        public setDate(date: Date): void {
            this.date = date;
        }

        /**
         * Checks if the request has been accepted.
         * @returns True if the request has been accepted, otherwise false.
         */
        public isAccepted(): boolean {
            return this.accept;
        }

        /**
         * Sets whether the request has been accepted.
         * @param {boolean} accept True if the request has been accepted, otherwise false.
         */
        public setAccepted(accept: boolean): void {
            this.accept = accept;
        }
    }




