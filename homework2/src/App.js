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
  const updateMessageList = (props) => {
    const formData = new FormData(props.currentTarget);
    let author = '',
      message = '';
    //
    for(let [key, value] of formData.entries()) {
      //message
      if (key.trim().toLowerCase() == 'message')
        message = value;

      //author
      if (key.trim().toLowerCase() == 'author')
        author = value;
    }
    setMessageList(current => [...current, {text: message, author: author}]);
    //event.preventDefault();
  };
  /*const updateMessageList = (event) => {
    const formData = new FormData(event.currentTarget);
    let author = '',
      message = '';
    //
    for(let [key, value] of formData.entries()) {
      //message
      if (key.trim().toLowerCase() === 'message')
        message = value;

      //author
      if (key.trim().toLowerCase() === 'author')
        author = value;
    }
    setMessageList(current => [...current, {text: message, author: author}]);
    event.preventDefault();
  };*/

  const ggg = () => {
    //setMessageList(current => [...current, {text: 'message', author: 'author'}]);
  };
  
  useEffect(() => {
    let gg = messageList.text;
    let g = 5;
    ggg();
    //const lastMessage = messageList[messageList.length - 1];
    /*if (lastMessage != null) {
      return () => {
        setMessageList(current => [...current, {text: 'message', author: 'author'}]);
      };
    }*///setMessageList({text: '11', author: '22'});
  }, [messageList.text]);

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={updateMessageList}>
          <fieldset>
            <input type="text" name='author' placeholder='Автор:' onChange={event => updateMessageList}/><br/>
            <input type="text" name='message' placeholder='Сообщение:' onChange={event => updateMessageList}/>
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