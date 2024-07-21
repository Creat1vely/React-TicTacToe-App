function App() {
  return (
    <div className='app'>
      {/* app's title */}
      <h1 className="app-title">tic tac toe</h1>

      {/* app's board component */}
      <div className="board">
        {/* first row of boxes on board */}
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>

        {/* second row of boxes on board */}
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>

        {/* third row of boxes on board */}
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>

      {/* board reset button */}
      <button className="reset-btn">
        reset
      </button>
    </div>
  )
}

export default App
