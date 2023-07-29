// utils/dbConnect.js
import { Db, MongoClient } from 'mongodb';

const uri = process.env.MONGO || "";

const client = new MongoClient(uri);

export async function connectToDatabase(dbName?: string): Promise<Db> {
  
    await client.connect();
  
  return client.db(dbName);                                                   
}
