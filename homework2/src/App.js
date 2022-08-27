import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [messageList, setMessageList] = useState([]);
  const [robotAnswer, setRobotAnswer] = useState('');
  //
  const updateMessageList = event => {
    if (typeof event === 'undefined')
      return;
    //
    if (event.hasOwnProperty('currentTarget')) {
      //новая запись
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
    };  

    /*if (event.hasOwnProperty('record')) {
      //ответ
      if (event.record != null) {
        const author = event.record.author;
        const message = event.record.text;
        let mm = messageList.length;
        let y = 5;
      }
      
      
    }*/
    event.preventDefault();
  };
  const updateRobotAnswer = record => {
    if (record != null)
      setRobotAnswer(`Добавлено сообщение пользователя "${record.author.trim().toLowerCase()}"`);
  };

  useEffect(() => {
    if (messageList.length > 0) {
      setTimeout(() => {
        updateRobotAnswer(messageList[messageList.length - 1]);
    }, 1500);
    }
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
        {
          <div>
            {
              messageList.map((element, index) => {
                return (
                  <div key={index}>
                    <h2>текст: {element.text}, сообщение: {element.author}</h2>
                  </div>
                );
              })
            }
          </div>
        }
        <p class="Robot"><i>{robotAnswer}</i></p>
      </header>
    </div>
  );
}

export default App;