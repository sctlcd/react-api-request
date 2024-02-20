import './App.css';
import Title from './components/Title';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <div className='container m-auto'>
        <Title text={"React Api Requests"} />
        <Button 
          text={"Button A"} 
          btnClass="btn-primary"
        />
      </div>
    </div>
  );
}

export default App;
