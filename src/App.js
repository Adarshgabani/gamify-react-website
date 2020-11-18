import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadGames } from './actions/gamesAction';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('in useEffect')
    dispatch(loadGames());
  })
  return (
    <div className="App">
      App container
    </div>
  );
}

export default App;
