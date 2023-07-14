export interface Article{
    id:string,
    title:string,
    shortDescription:string,
    longDescription:string,
    example:string,
    tags:string[],
    category:string,
    publisherName:string,
    primaryComments:null,
    metadata:{
        created:string,
        modified:string,
        views:number
    },
    status:string
}


export interface Signup{
    username?:string,
    email:string,
    password:string,
}


