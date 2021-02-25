import { Db } from "mongodb";
import { connectToDatabase } from "./mongodb";

export const getAllCoolness = async () => {
  const { db } = await connectToDatabase();

  return db
    .collection("coolcollection")
    .find()
    .toArray()
    .then((res) => res.map((doc) => JSON.parse(JSON.stringify(doc))));
};
