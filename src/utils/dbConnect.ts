// utils/dbConnect.js
import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://admin:admin@cluster0.hoygmeu.mongodb.net/'; // Replace this with your MongoDB connection URI
const client = new MongoClient(uri);

export async function connectToDatabase() {
  if (!client.isConnected()) {
    await client.connect();
  }
  return client.db();
}
