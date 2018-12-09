/**
 * Simple tic-tac-toe game example. 
 */
const game = (function () {

  const cellElements = [
    document.getElementById('upper-left'),
    document.getElementById('upper-mid'),
    document.getElementById('upper-right'),
    document.getElementById('center-left'),
    document.getElementById('center-mid'),
    document.getElementById('center-right'),
    document.getElementById('lower-left'),
    document.getElementById('lower-mid'),
    document.getElementById('lower-right')
  ];
  </script>

  for (let i = 0; i < cellElements.length; i++) {
    cellElements[i].addEventListener('click', async function () {

      // add player's X
      const isValidMove = await addX(cellElements[i]);

      if (isValidMove) {

        // choose computer's O
        const j = await findBestMove(cellElements);

        // pause, then add computer's O
        await new Promise((resolve) => setTimeout(() => resolve(), 2000));
        await addO(cellElements[j]);
      }

    });
  }

  async function findBestMove(arr) {
    for (let n = 0; n < arr.length; n++) {
      if (arr[n].childElementCount === 0) {
        return n;
      }
    }
  }

  async function addX(cellElement) {
    if (cellElement.childElementCount === 1) { return false; }
    const headingElement = document.createElement("h1");
    const textNode = document.createTextNode("X");
    headingElement.appendChild(textNode);
    cellElement.appendChild(headingElement);
    return true;
  }

  async function addO(cellElement) {
    if (cellElement.childElementCount === 1) { return; }
    const headingElement = document.createElement("h1");
    const textNode = document.createTextNode("O");
    headingElement.appendChild(textNode);
    cellElement.appendChild(headingElement);
  }

})();
function getWinner(){
	var box1 = document.getElementById("box1),
	var box2 = document.getElementById("box2),
	var box3 = document.getElementById("box3),
	var box4 = document.getElementById("box4),
	var box5 = document.getElementById("box5),
	var box6 = document.getElementById("box6),
	var box7 = document.getElementById("box7),
	var box8 = document.getElementById("box8),
	var box9 = document.getElementById("box9);
	
//get  all possibilities
	if(box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML)
		console.log("win");
	
	else if{
		box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML)
		console.log("win");
	}
	
	else if{
		box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
		console.log("win");
	}
	
	else if{
		box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML)
		console.log("win");
	}
	
	else if{
		box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML)
		console.log("win");
	}
	
	else if{
		box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML)
		console.log("win");
	}
	
	else if{
		box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML)
		console.log("win");
	}
	
	else if{
		box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML)
		console.log("win");
	}