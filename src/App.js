import TeamMembers from './components/TeamMembers';
import './App.css';
import ReactDOM from 'react-dom';
import React from 'react';

function App() {
  return (
    <div>
      <TeamMembers/>
    </div>
  );
}

ReactDOM.render(<TeamMembers />, document.getElementById('root'));

export default App;
