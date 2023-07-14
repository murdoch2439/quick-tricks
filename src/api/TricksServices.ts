import axios from "axios"
import {BACK_END_PORT} from "../constants/variableNames";


export class ArticlesService {
    private static articleBaseUrl =axios.create({
        baseURL:`http://${BACK_END_PORT}:5000/api/v1`
    })
    static async getAllArticles (){
        try{
            return await this.articleBaseUrl.get("/articles")
        }catch(error){
            return console.log("Error on getting all articles ===>", error)
        }
    }

    // static async getSingleArticle(id:any){
    //     try{
    //         return await this.articleBaseUrl.get(`/articles/article/`, {headers: {articleId:id}} )
    //     }catch(error){
    //         return console.log("Error on getting one article ===>", error)
    //     }
    // }
    static async getSingleArticle(){
        try{
            return await this.articleBaseUrl.get(`/articles/article/` )
        }catch(error){
            return console.log("Error on getting one article ===>", error)
        }
    }
}
