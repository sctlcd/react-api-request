import './App.css';
import Title from './components/Title';
import Button from './components/Button';
import {BsFillFileEarmarkPostFill} from 'react-icons/bs';

function App() {
  return (
    <div className="App">
      <div className='container m-auto'>
        <Title text={"React Api Requests"} />
        <Button 
          text={"Button A"} 
          btnClass="btn-primary"
          icon={<BsFillFileEarmarkPostFill />}
        />
      </div>
    </div>
  );
}

export default App;
