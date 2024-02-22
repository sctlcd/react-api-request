import './App.css';
import Title from './components/Title';
import Button from './components/Button';
import {BsFileEarmarkPost} from 'react-icons/bs';

const buttonAText = "Button A";
function handleClick() {
  alert('Btn A clicked');
};

function App() {
  return (
    <div className="App">
      <div className='container m-auto'>
        <Title text={"React Api Requests"} />
        <Button 
          text={buttonAText}
          btnClass="btn-primary"
          icon={<BsFileEarmarkPost />}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default App;
