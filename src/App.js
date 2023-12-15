import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Counter from './Components/Counter';
import { handleReset, handleShow } from './Redux/Actions';

function App() {
  const show = useSelector(state => state.show)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Workshop Redux</h1>
      <button onClick={()=>dispatch(handleReset())}>Reset</button>
      <button onClick={()=> dispatch(handleShow())}>Show</button>
      {
        show && <Counter/>
      }
      
    </div>
  );
}

export default App;
