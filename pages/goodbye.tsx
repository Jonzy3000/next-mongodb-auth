import { useQuery } from "react-query";

const Hello = () => {
  const { isLoading, data } = useQuery("coolness", () => {
    return fetch("/api/collection").then((res) => res.json());
  });

  console.log(data);
  return <div>Hello World</div>;
};

export default Hello;
