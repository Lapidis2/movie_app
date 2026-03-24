
import {Client, TablesDB,Query, ID} from 'react-native-appwrite'

const DB_ID=process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID=process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;

const client=new Client()
           .setEndpoint("https://nyc.cloud.appwrite.io/v1")
           .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)


const database=new TablesDB(client);

export const UpdateSearchCount = async(SearchTerm:string,movie:Movie)=>{
    try {
        
         const result=await database.listRows(
        {databaseId:DB_ID,
        tableId:COLLECTION_ID,
        queries:[Query.equal('SearchTerm',SearchTerm)]
    })
    if(result.rows.length>0){
        const existmovie=result.rows[0];
        await database.updateRow(
            {
                databaseId:DB_ID,
                tableId:COLLECTION_ID,
                rowId:existmovie.$id,
               data: {
                    count:existmovie.count+1
                }
            }
        )
    }
    else{
        await database.createRow(
            {
                databaseId:DB_ID,
                tableId:COLLECTION_ID,
                rowId:ID.unique(),
                data:{
                    SearchTerm:SearchTerm,
                    movie_id:movie.id,
                    title:movie.title,
                    count:1,
                    poster_url:`https://image.tmdb.org/t/p/w500/${movie.poster_path}`

                }
            }
        )
    }
    console.log(result)
    } catch (error) {
        console.log(error)
        throw error
        
    }
   
}

export const GetTrendingMovies=async():Promise<TrendingMovie[]|undefined>=>{
    try {
        const result=await database.listRows({
            databaseId:DB_ID,
            tableId:COLLECTION_ID,
            queries:[
                Query.limit(5),
                Query.orderDesc('count')]
            
        });
        return result.rows as unknown as TrendingMovie[];

    } catch (error) {
        
        console.log(error)
        return undefined;
    }
}