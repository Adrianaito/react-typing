import React, {useState, useEffect} from 'react'
import './App.css';

function App() {
const STARTING_TIME = 5

  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
  const [isTimeRunning, setIsTimeRunnin] = useState(false)
  const [wordCount, setWordCount] = useState(0)

  function handleChange(e) {
    const {value} = e.target
    setText(value)
  }
  // console.log(text)

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(" ")
    return wordsArr.filter(word => word !== "").length
  }

  function startClock() {
    setIsTimeRunnin(true)
    setTimeRemaining(STARTING_TIME)
    setText(" ")
    // setWordCount(0)
  }

  function endGame() {
    setIsTimeRunnin(false)
    const numWords = calculateWordCount(text)
    setWordCount(numWords)
  }

  useEffect(() => {
    if(isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
      }, 1000);
    } else if(timeRemaining === 0) {
      endGame()
    }
  }, [timeRemaining, isTimeRunning])

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        onChange={handleChange}
        value={text}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button
        onClick={startClock}
        disabled={isTimeRunning}
      >
        Start
      </button>
      <h1>Word count: {wordCount}</h1>
    </div>
  )
}

export default App;
