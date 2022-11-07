import { useSelector } from "react-redux";

const Temp = () => {
  const count = useSelector((state: any) => state.counter);
  const search = useSelector((state: any) => state.search);
  return <div>temp:{search.value}</div>;
};

export default Temp;
