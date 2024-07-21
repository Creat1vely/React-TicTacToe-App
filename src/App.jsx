import { useRef, useState } from "react"
import CreativelyTitle from "./creatively-branding/CreativelyTitle";
import CreativelyLinks from "./creatively-branding/CreativelyWebDevLinks";
import "./creatively-branding/creatively.css"

// tictactoe board data array
let boardData = [
  "", "", "",
  "", "", "",
  "", "", ""
]


function App() {

  // create stateful variable: count
  // keeps track of how many times users have played
  const [ count, setCount ] = useState(0);

  // create stateful variable: lockBoard
  // flags if there's has been a winner and no input
  // is to be accepted on the box
  const [ lockBoard, setLockBoard ] = useState( false );

  // box refs 
  // used to clear box display on game reset
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  // array of boxRefs to which we map and erase their DOM
  let boxRefs = [ box1, box2, box3, box4, box5, box6, box7, box8, box9 ];


  // togglePlayer()
  // used to switc between two player types ( x and o )
  // keeps track of the number of times users have played( as count )
  // keeps track of player options in game's boardData
  function togglePlayer( boxEventObject, num ) {
    
    // check if board is locked and exit the 
    // function
    if ( lockBoard ) {
      return;
    }
    
    // since board is not locked
    // check whether play count is even or not, use this
    // to determine which player type is to play next
    // , save player option in boardData
    if ( count % 2 === 0 ) {
      boxEventObject.target.innerHTML = `
        <span class="material-symbols-outlined icon">
          close
        </span>
      `;
      boardData[ num ] = "x";

      // increment play count for each player option
      setCount( ( count ) => ++count ); 
    } else {
      boxEventObject.target.innerHTML = `
        <span class="material-symbols-outlined icon">
          radio_button_unchecked
        </span>
      `;
      boardData[ num ] = "o";

      // increment play count for each player option
      setCount( ( count ) => ++count ); 
    }

    // check if any winner per play
    checkAnyWinner()
  }


  // checkAnyWinner()
  // used to span throughout the boardData, check for
  // winner patterns and then call won()
  function checkAnyWinner() {
    if ( boardData[0] === boardData[1] && boardData[1] === boardData[2] && boardData[2] !== "" ) {
      won( boardData[2] )
    }
    else if ( boardData[3] === boardData[4] && boardData[4] === boardData[5] && boardData[5] !== "" ) {
      won( boardData[5] )
    }
    else if ( boardData[6] === boardData[7] && boardData[7] === boardData[8] && boardData[8] !== "" ) {
      won( boardData[8] )
    }
    else if ( boardData[0] === boardData[3] && boardData[3] === boardData[6] && boardData[6] !== "" ) {
      won( boardData[6] )
    }
    else if ( boardData[1] === boardData[4] && boardData[4] === boardData[7] && boardData[7] !== "" ) {
      won( boardData[7] )
    }
    else if ( boardData[2] === boardData[5] && boardData[5] === boardData[8] && boardData[8] !== "" ) {
      won( boardData[8] )
    }
    else if ( boardData[0] === boardData[4] && boardData[4] === boardData[8] && boardData[8] !== "" ) {      
      won( boardData[8] )
    }
    else if ( boardData[2] === boardData[4] && boardData[4] === boardData[6] && boardData[6] !== "" ) {
      won( boardData[6] )
    }
  }


  // won()
  // used to alert the winner player and then 
  // lock the board from continual play
  function won( winner ) {
    // lock the board
    setLockBoard( true )

    // alert the winner
    alert(`Congrats!, Player ${ winner.toUpperCase() } Wins`);
  }


  // resetBoard()
  // used to reset the board and game state back to defaults
  function resetBoard() {
    // reset game state
    setLockBoard( false );
    boardData = [
      "", "", "",
      "", "", "",
      "", "", ""
    ];

    // reset board
    boxRefs.map( function( box ) {
      box.current.innerHTML = "";
    })
  }


  return (
    <div className='app'>
      {/* app's title */}
      <CreativelyTitle title="React TicTacToe App"/>

      {/* app's board component */}
      <div className="board">
        {/* first row of boxes on board */}
        <div className="box" ref={box1} onClick={ ( event ) => { togglePlayer( event, 0 ) }}></div>
        <div className="box" ref={box2} onClick={ ( event ) => { togglePlayer( event, 1 ) }}></div>
        <div className="box" ref={box3} onClick={ ( event ) => { togglePlayer( event, 2 ) }}></div>

        {/* second row of boxes on board */}
        <div className="box" ref={box4} onClick={ ( event ) => { togglePlayer( event, 3 ) }}></div>
        <div className="box" ref={box5} onClick={ ( event ) => { togglePlayer( event, 4 ) }}></div>
        <div className="box" ref={box6} onClick={ ( event ) => { togglePlayer( event, 5 ) }}></div>

        {/* third row of boxes on board */}
        <div className="box" ref={box7} onClick={ ( event ) => { togglePlayer( event, 6 ) }}></div>
        <div className="box" ref={box8} onClick={ ( event ) => { togglePlayer( event, 7 ) }}></div>
        <div className="box" ref={box9} onClick={ ( event ) => { togglePlayer( event, 8 ) }}></div>
      </div>

      {/* board reset button */}
      <button className="reset-btn" onClick={ resetBoard }>
        reset game
      </button>

      {/* creatively brand links */}
      <CreativelyLinks/>
    </div>
  )
}

export default App
