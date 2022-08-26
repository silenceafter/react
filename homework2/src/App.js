import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [messageList, setMessageList] = useState([]);
  const updateMessageList = event => {
    if (typeof event === 'undefined')
      return;
    //
    if (event.hasOwnProperty('currentTarget')) {
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
    }
    event.preventDefault();
  };

  useEffect(() => {
    const props = 
      <>
        <input type="text" name='author' value='111'/>
        <input type="text" name='message' value='222'/>
      </>;      
    updateMessageList(props);
    let gg = 5;
  }, [messageList]);

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
                <h2>текст: {element.text}, сообщение: {element.author}</h2>
              </div>
            );
          })}
        </div>}
      </header>
    </div>
  );
}

export default App;