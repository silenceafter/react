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
    const formData = new FormData(event.currentTarget);
    for(let [key, value] of formData.entries()) {
      //if (value.name.trim().toLowerCase() == 'message') {
        console.log(key, value);
        setMessageList(current => [...current, {id: 1, text: value, author: 'kkk'}]);//event.target.value
        //break;
      //}          
    }
    //setMessageList(current => [...current, {id: 1, text: 'ddd', author: 'kkk'}]);
    event.preventDefault();
  };
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={updateMessageList}>
          <fieldset>
            Автор: <input type="text" onChange={event => updateMessageList} name='author'/><br/>
            Сообщение: <input type="text" onChange={event => updateMessageList} name='message'/>
          </fieldset>
          <button type='submit'>Отправить</button>
        </form>
        {<div>
          {messageList.map((element, index) => {
            return (
              <div key={index}>
                <h2>{element.id} текст: {element.text}, сообщение: {element.author}</h2>
              </div>
            );
          })}
        </div>}
      </header>
    </div>
  );
}

export default App;