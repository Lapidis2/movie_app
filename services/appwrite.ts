
import {Client, TablesDB,Query} from 'react-native-appwrite'

const DB_ID=process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID=process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;

const client=new Client()
           .setEndpoint("https://nyc.cloud.appwrite.io/v1")
           .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)


const database=new TablesDB(client);
export const updateSearchCount = async(SearchTerm:string,movie:Movie)=>{
    const result=await database.listRows(
        {databaseId:DB_ID,
        tableId:COLLECTION_ID,
        queries:[Query.equal('SearchTerm',SearchTerm)]
    })
    console.log(result)
}