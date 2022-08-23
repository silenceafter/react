import React, { useEffect, useState } from 'react';
import './App.css';

export function DDD(props) {
  const [messageList, setMessageList] = useState([]);
  const updateMessageList = event => {
    setMessageList(current => [...current, {id: 1, text: 'ddd', author: 'kkk'}]);
    event.preventDefault();
  };
  /*useEffect(() => {
    console.log(messageList);
  }, [messageList]);*/
  return (
    <div>
      {messageList.map((element, index) => {
        return (
          <div key={index}>
            <h2>{element.id} текст: {element.text}, сообщение: {element.author}</h2>
          </div>
        );
      })}
    </div>
  );
  /*
  <div>
          {messageList.map((element, index) => {
            return (
              <div key={index}>
                <h2>{element.id} текст: {element.text}, сообщение: {element.author}</h2>
              </div>
            );
          })}
        </div> 
   */
}

function App() {
  const [messageList, setMessageList] = useState([]);
  const updateMessageList = (event) => {
    for(let value of event.target) {
      if (value.name.trim().toLowerCase() == 'message') {
        console.log('find');  
        break;
      }          
    }
    //
    console.log(event.target[1].value);
    //setMessageList(current => [...current, {id: 1, text: 'ddd', author: 'kkk'}]);
    setMessageList(current => [...current, {id: 1, text: 'ddd', author: 'kkk'}]);//event.target.value
    event.preventDefault();
  };
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={updateMessageList}>
          <fieldset>
            <label>
              <p>Сообщение: </p>
              <input type="text" onChange={event => updateMessageList} name='message'/>
            </label>
          </fieldset>
          <button type='submit'>Отправить</button>
        </form>
      </header>
    </div>
  );
}

export default App;