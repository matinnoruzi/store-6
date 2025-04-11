export interface IProduct {
    id : string,
    name : string ,
    description : string ,
    image : string ,
    price : number,
    category : string ,
    priceTakhfif : number ,
    title : string

}

export interface NewIProduct {
    first : number | null ,
    items : number | null ,
    last : number | null ,
    next : number | null ,
    pages : number  ,
    prev : number | null ,
    data : IProduct[]
 
}