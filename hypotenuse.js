const inputSide=document.querySelectorAll(".input-side");
const HypoBtn=document.querySelector("#hypo-btn");
const Output=document.querySelector(".hypo-output");


function calculateSquare(i,j){
const sumOfSquares=i*i + j*j;

return sumOfSquares;
}

function calculateHypotenuse(){
    const sumOfSquares=calculateSquare(Number(inputSide[0].value),Number(inputSide[1].value));
    const lengthofSquares=Math.sqrt(sumOfSquares);
    // console.log(length);
    Output.inneText="The length of hypotenuse is "+lengthofSquares;
}


HypoBtn.addEventListener("click",calculateHypotenuse);