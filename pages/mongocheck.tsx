import { connectToDatabase } from "../server/mongodb/mongodb";

interface Props {
  isConnected: boolean;
}

const MongoCheck = ({ isConnected }: Props) => {
  return <div>{isConnected ? "HOORAY" : "BOOO"}</div>;
};

export async function getServerSideProps() {
  const { client } = await connectToDatabase();

  const isConnected = await client.isConnected();
  console.log("hello");
  return { props: { isConnected } };
}

export default MongoCheck;
