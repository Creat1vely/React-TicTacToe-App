function App() {
  return (
    <div className='app'>
      {/* app's title */}
      <h1 className="app-title">tic tac toe</h1>

      {/* app's board component */}
      <div className="board">
        {/* first row of boxes on board */}
        <div className="box hover-x hover-o select-x select-o">
          <span className="material-symbols-outlined icon x">
            close
          </span>

          <span className="material-symbols-outlined icon o">
            radio_button_unchecked
          </span>
        </div>
        <div className="box hover-x hover-o select-x select-o">
          <span className="material-symbols-outlined icon x">
            close
          </span>

          <span className="material-symbols-outlined icon o">
            radio_button_unchecked
          </span>
        </div>
        <div className="box hover-x hover-o select-x select-o">
          <span className="material-symbols-outlined icon x">
            close
          </span>

          <span className="material-symbols-outlined icon o">
            radio_button_unchecked
          </span>
        </div>

        {/* second row of boxes on board */}
        <div className="box hover-x hover-o select-x select-o">
          <span className="material-symbols-outlined icon x">
            close
          </span>

          <span className="material-symbols-outlined icon o">
            radio_button_unchecked
          </span>
        </div>
        <div className="box hover-x hover-o select-x select-o">
          <span className="material-symbols-outlined icon x">
            close
          </span>

          <span className="material-symbols-outlined icon o">
            radio_button_unchecked
          </span>
        </div>
        <div className="box hover-x hover-o select-x select-o">
          <span className="material-symbols-outlined icon x">
            close
          </span>

          <span className="material-symbols-outlined icon o">
            radio_button_unchecked
          </span>
        </div>

        {/* third row of boxes on board */}
        <div className="box hover-x hover-o select-x select-o">
          <span className="material-symbols-outlined icon x">
            close
          </span>

          <span className="material-symbols-outlined icon o">
            radio_button_unchecked
          </span>
        </div>
        <div className="box hover-x hover-o select-x select-o">
          <span className="material-symbols-outlined icon x">
            close
          </span>

          <span className="material-symbols-outlined icon o">
            radio_button_unchecked
          </span>
        </div>
        <div className="box hover-x hover-o select-x select-o">
          <span className="material-symbols-outlined icon x">
            close
          </span>

          <span className="material-symbols-outlined icon o">
            radio_button_unchecked
          </span>
        </div>
      </div>

      {/* board reset button */}
      <button className="reset-btn">
        reset
      </button>
    </div>
  )
}

export default App
