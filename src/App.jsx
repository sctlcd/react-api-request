import React, {useState, useEffect} from "react"; 
import './App.css';
import Title from './components/Title';
import Button from './components/Button';
import { FaRegUser } from "react-icons/fa";
import { GoCommentDiscussion } from "react-icons/go";

const buttonAText = "users"; 
const buttonBText = "comments"; 
const buttonCText = "photos"; 

function App() {
  const [apis, setApis] = useState("");
  const [items, setItems] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${apis}?_start=0&_limit=12`)
      .then((response) => response.json())
      .then((json => setItems(json)), [apis]);
  }, [apis]);

  return (
    <div className="App">
      <div className="container text-center">
        <Title 
          text={"React Api Requests"}
          classes={"mb-4 text-center xx-large"}
          />

        <Title 
          text={ apis ? `You're reading the ${apis.charAt(0).toUpperCase() + apis.slice(1)} list` : "What do you want to read?" }
          classes={"mt-2 mb-2 text-center large"}
          />
        <Button 
          id={buttonAText}
          text={buttonAText}
          btnClass="btn-primary"
          icon={<FaRegUser />}
          onClick={() => setApis("users")}
        />
        <Button 
          id={buttonBText}
          text={buttonBText}
          btnClass="btn-primary"
          icon={<GoCommentDiscussion />}
          onClick={() => setApis("comments")}
        />
        <Button 
          id={buttonCText}
          text={buttonCText}
          btnClass="btn-primary"
          icon={<GoCommentDiscussion />}
          onClick={() => setApis("photos")}
        />
      </div>
      <div id={`container-${apis}`} className="container mt-4 m-auto display-flex-row">
        {items
          ? items.map((item) => {
            return (
              <div className="card-container">
                <div className="card" key={`${apis}-id-${item.id}`}>
                  <div className="card-content">
                    <div className="card-header" >
                      {item.name && <h3>{item.name}</h3>}
                      {item.title && <h3>{item.title}</h3>}
                    </div>
                    <div className="card-body">
                      {item.website && <h4>{item.website}</h4>}
                      {item.body && <p>{item.body}</p>}
                      {item.thumbnailUrl && <img src={item.thumbnailUrl} alt={item.id} />}
                    </div>
                    <div className="card-footer">
                      {item.email && <h5>{item.email}</h5>}
                      {item.url && <h5>{item.url}</h5>}
                    </div>
                  </div>
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
