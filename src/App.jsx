import './App.css'
import Friends from './Friends';
import Team from './Team';
import User from './User';
import Counter from './counter';

function App() {

  function handleClick() {
    alert('Button Clicked');
  }
  const addToFive = (num) => {
    alert(num + 5)
  }
  return (
    <>
      <Friends></Friends>
      <User></User>
      {/* <Team></Team> */}
      {/* <Counter></Counter> */}
      {/* <button onClick={handleClick}>Click Me</button> 
      <button onClick={() => addToFive(3)}>ADD SUM</button> */}

    </>
  )
}

export default App
