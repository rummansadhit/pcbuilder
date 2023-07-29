import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../utils/dbConnect';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end(); // Return Method Not Allowed for non-GET requests
  }

  const db = await connectToDatabase('pc_components');
  const productsCollection = db.collection('components');
  const products = await productsCollection.find().toArray();

  res.status(200).json(products); // Return product data as JSON
}