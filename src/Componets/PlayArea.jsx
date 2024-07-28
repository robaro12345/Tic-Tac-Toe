import React from "react";
import Square from "./square";

function PlayArea() {
    let [playes,setplayes] = React.useState(["","","","","","","","",""])
    let [player,setplayer] = React.useState("X")
    let [win , setWin] = React.useState(false)
    let [gamefinish, setgamefinish] = React.useState(false)
    function WinCheck(A){
        for (let i = 0; i < 9; i += 3) {
            if (A[i] && A[i] === A[i+1] && A[i+1] === A[i+2]) {
                setWin(true);
                return; 
                
            }
        }
        // Check columns
        
        for (let i = 0; i < 3; i++) {
            if (A[i] + A[i+3] + A[i+6] === "XXX") {
                setWin(true);
                return;
            } else if (A[i] + A[i+3] + A[i+6] === "OOO") {
                setWin(true);
                return;
            }
        }

        if (A[0] && A[0] === A[4] && A[4] === A[8] ){
            setWin(true)
            return;
        } else if (A[2] && A[2] === A[4] && A[4] === A[6]){
            setWin(true)
            return;
        }
    }
    function GameState() {
        let count = 0 ;
        for (let i = 0;i<9;i++){
            if (playes[i] === ""){
                count++;
            }
        }
        if (count === 0){
            setgamefinish(true)
        }
       
    }
    function handleClick(event) {
        if(win || gamefinish){
            return;
        }
        let list = playes;
        if (player === "X"){
            if(list[event] === ""){
                list[event] = "X"
                setplayer("O")
            }
                
        }else if(player === "O"){
            if(list[event] === ""){
                list[event] = "O"
                setplayer("X")
            }
        }
        setplayes(list)
        GameState();
        WinCheck(playes);
    } 
    function reset() {
        setWin(false)
        setgamefinish(false)
        setplayer("X");
        setplayes(["","","","","","","","",""])
    }  
    return (
    <div>
        <h1>Player {player}</h1>
        <div className="PlayArea">
            {playes.map((play,index) => 
                <Square
                    key = {index}
                    id = {index}
                    play = {(play === "X")?"X":(play ==="O")?"O":""}
                    handleClick = {handleClick}
                />
            )}
        </div>
        {!gamefinish?(win && <h1 className="Game">Winner is {player==="X"?"O":"X"}</h1>):<h1 className="Game">Its a Draw</h1>}
        <button className="Reset" onClick={reset}><h1 className="Reset_text">Reset</h1></button>
    </div>)
}

export default PlayArea;