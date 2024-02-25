import React, {useState, useEffect} from "react"; 
import './App.css';
import Title from './components/Title';
import Button from './components/Button';
import {BsFileEarmarkPost} from 'react-icons/bs';

const buttonAText = "Users"; 

function handleClick() {
  // alert('Btn A clicked');
  console.log('Btn A clicked');
};

function App() {
  const [users, setusers] = useState("");
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
        <Title className="h1" text={ users ? users : "Click on your choice above" } />
        {items
          ? items.map((item) => {
            return <div className="" key={item.id}>{item.name && <h3>{item.name}</h3>}</div>;
          })
          : null
            }
      </div>
    </div>
  );
}

export default App;
