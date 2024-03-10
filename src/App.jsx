import React, {useState, useEffect} from "react"; 
import './App.css';
import Title from './components/Title';
import Button from './components/Button';
import { FaRegUser } from "react-icons/fa";
import { GoCommentDiscussion } from "react-icons/go";

const buttonAText = "Users"; 
const buttonBText = "Comments"; 
const buttonCText = "Photos"; 

function App() {
  const [apis, setApis] = useState("");
  const [items, setItems] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${apis}?_start=0&_limit=5`)
      .then((response) => response.json())
      .then((json => setItems(json)), [apis]);
  }, [apis]);

  return (
    <div className="App">
      <div className='container m-auto'>
        <Title text={"React Api Requests"} />
        <Title  text={ apis ? apis : "What do you want to see?" } />
        <Button 
          text={buttonAText}
          btnClass="btn-primary"
          icon={<FaRegUser />}
          onClick={() => setApis("Users")}
        />
        <Button 
          text={buttonBText}
          btnClass="btn-primary"
          icon={<GoCommentDiscussion />}
          onClick={() => setApis("Comments")}
        />
        <Button 
          text={buttonCText}
          btnClass="btn-primary"
          icon={<GoCommentDiscussion />}
          onClick={() => setApis("Photos")}
        />
        {items
          ? items.map((item) => {
            return (
              <div className="" key={item.id}>
                {item.name && <h3>{item.name}</h3>}
                <div>
                  {item.email && <h4>{item.email}</h4>}
                  {item.body && <p>{item.body}</p>}
                </div>
                <div>
                  {item.title && <h3>{item.title}</h3>}
                  {item.thumbnailUrl && <img src={item.thumbnailUrl} alt={item.id} />}
                </div>
              </div>
          )})
          : null
            }
      </div>
    </div>
  );
}

export default App;
