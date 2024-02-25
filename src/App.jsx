import React, {useState, useEffect} from "react"; 
import './App.css';
import Title from './components/Title';
import Button from './components/Button';
import {BsFileEarmarkPost} from 'react-icons/bs';

const buttonAText = "Button A"; 

function handleClick() {
  // alert('Btn A clicked');
  console.log('Btn A clicked');
};

function App() {
  const [users, setusers] = useState();
  const [items, setItems] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((json => setItems(json)));
  }, [users]);

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
        <Title text={ users ? users : "select users" } />
        {items
          ? items.map((item) => {
            return <div className="">{item.name}</div>;
          })
          : null
            }
      </div>
    </div>
  );
}

export default App;
