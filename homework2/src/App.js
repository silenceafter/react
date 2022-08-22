import React, { useEffect, useState } from 'react';
import './App.css';

export function DDD(props) {
  /*useEffect(() => {
    console.log(messageList);
  }, [messageList]);
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
  );*/
}

function App() {
  const [messageList, setMessageList] = useState([]);
  const updateMessageList = (props) => {
    setMessageList(current => [...current, {id: 1, text: props.message, author: 'kkk'}]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={updateMessageList}>
          <fieldset>
            <label>
              <p>Сообщение: </p>
              <input name='message'/>
            </label>
          </fieldset>
          <button type='submit'>Отправить</button>
        </form>
        <div>
          {messageList.map((element, index) => {
            return (
              <div key={index}>
                <h2>{element.id} текст: {element.text}, сообщение: {element.author}</h2>
              </div>
            );
          })}
        </div> 
      </header>            
    </div>
  );
}

export default App;