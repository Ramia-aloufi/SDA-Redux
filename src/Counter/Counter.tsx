import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./counterSlice"
import { RootState } from "../Store"

const Counter = () => {
    const count = useSelector((state:RootState) => state.counter.value)
    const dispatch = useDispatch()
  
    return (
      <div>
        <div>
        <h1>{count}</h1>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
        </div>
      </div>
    )
}

export default Counter