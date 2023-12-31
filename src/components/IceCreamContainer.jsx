import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "../redux/iceCream/iceCreamActions";

const IceCreamContainer = () => {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h2>Number of iceCream: {numOfIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy iceCream</button>
    </div>
  );
};

export default IceCreamContainer;
