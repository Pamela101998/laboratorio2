import LogicGame from "./LogicGame";
let puntos = 50;
let menosPuntos = 0; 
class TwoCard extends LogicGame {
    process (twice, item, stateBoard, setStateBoard) {
        if (twice.length === 1) {
            twice.push(item);
            const[item1] = twice;
            if (item1.key !== item.key){
                setTimeout(() => {
                    const newStateBoard = stateBoard.map((item) => {
                        if (item.done === false) {
                            item.state = false;
                            item.styles = "item";
                        }
                        return item;
                    });
                    setStateBoard(newStateBoard);
                  
/////////////////////////////////////////////////////////////////////////////////////////////
//Restar 5 puntos por cada error,
//El score deberá empezar con 50 puntos de base, si el score llega a 0 puntos se debe mostrar
// un mensaje de game over.  

                    if (puntos !== 0){
                        menosPuntos = puntos - 5;
                       console.log( menosPuntos);
                    return menosPuntos;  
                    } 
                    else { 
                        window.alert("GAME OVER");
                       alert("GAME OVER");
                   }
                   
                }, 1000);
               
            } else {
                this.next.process(twice, item, stateBoard, setStateBoard);
            }
        }    
    }  
}
export default TwoCard;