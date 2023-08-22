import classes from './Counter.module.css';
import { counterActions } from '../Store/redux-demo';
import { useSelector,useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch=useDispatch();
  const counter=useSelector(state=>state.counter.counter);
  const show=useSelector(state=>state.counter.showcounter)
  const incrementhandler=()=>{
  dispatch(counterActions.increment())
  }
  const increasehandler=()=>{
    dispatch(counterActions.increase(5))
  }
  const decreasehandler=()=>{
    dispatch(counterActions.decrease(5))
  }
  const decrementhandler=()=>{
    dispatch({type:'decrement'})
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {console.log(counter)}
      {show && <div className={classes.value}>{counter}</div>}
      <div>
      <button onClick={increasehandler}>Increment</button>
      <button onClick={decreasehandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
