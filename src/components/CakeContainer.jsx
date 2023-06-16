import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

const CakeContainer = () => {
  const numOfCakes = useSelector((state) => state.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h2>Number of cakes: {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
};

export default CakeContainer;
