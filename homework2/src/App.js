import React, { useEffect, useState } from 'react';
import './App.css';

export function DDD() {
  const [messageList, setMessageList] = useState([]);
  const updateMessageList = () => {
    setMessageList({ text: "", author: ""});
  };


  /*useEffect(() => {
    console.log(messageList);
  }, [messageList]);*/
  return (<div>{messageList}</div>);//messageList.map((messageList) => <div>{messageList}</div>);   
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {DDD()}
      </header>
    </div>
  );
}

export default App;
