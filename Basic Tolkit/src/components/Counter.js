import classes from './Counter.module.css';
import {useSelector,useDispatch}  from 'react-redux';
import  {counterActions} from '../reducer-slices/counter-slice'
const Counter = () => {
  const dispatch = useDispatch();
  const counterSelector = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter)
  // const toggleCounterHandler = () => {
  //   dispatch({type:'toggle'})
  // };
  // const incrementHandler =  () => {
  //       dispatch({type:'increment'})    //without redux toolkit
  // }

  // const increase =  () => {
  //       dispatch({type:'increase',amount: 5})
  // }

  // const decementHandler =  () => {
  //       dispatch({type:'decrement'})
  // }

  const toggleCounterHandler = () => {
        dispatch(counterActions.toggle());
  };

  const incrementHandler =  () => {
        dispatch(counterActions.increment());   
  }

  const increase =  () => {
        dispatch(counterActions.increase({amount:5}));  //{type:"AUTO_GEN_NAME_BY_TOOLKIT",payload: 5}
  }

  const decementHandler =  () => {
        dispatch(counterActions.decrement());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter ? 
      <>
      <div className={classes.value}>-- COUNTER VALUE --</div> 
      <div>{counterSelector}</div> 
      </>
      : null}
      <div className="actionbuttons">
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increase}>Increment by 5</button>
        <button onClick={decementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
