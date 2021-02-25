import { getAllCoolness } from "../../server/mongodb/coolcollection";

export default async (req, res) => {
  const collection = await getAllCoolness();
  res.status(200).json(collection);
};
