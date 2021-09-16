import LogicGame from "./LogicGame";
let puntos = 50;
let masPuntos = 0; 

class GoodCards extends LogicGame {
    process (twice, item, stateBoard, setStateBoard) {
        const [item1, item2] = twice;
        const newStateBoard = stateBoard.map(item => {
          if (item.id === item1.id || item.id ===item2.id){
            item.done = true;
          }
           return item;
        });

        if (puntos !== 0){
          masPuntos = puntos + 25;
         console.log( masPuntos); 
      }
      return masPuntos;
        setStateBoard(newStateBoard);
    }
}

export default GoodCards;