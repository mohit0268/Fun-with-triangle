const inputAngle=document.querySelectorAll(".angle");
const btnTriangle=document.querySelector("#triangle-btn");
const outputTriangle=document.querySelector("#triangle-output");

function calculateSum(angle1,angle2,angle3){
    const sumOfAngles=angle1+angle2+angle3;
    return sumOfAngles;
}

function isTriangle(){
    const sumOfAngles=calculateSum(Number(inputAngle[0].value),Number(inputAngle[1].value),Number(inputAngle[2].value));

    if(sumOfAngles=== 180){
        outputTriangle.innerText="Angle are forming a triangle";
    }
    else{
        outputTriangle.innerText="'oops'!Angles are not forming a triangle";
    }
}

btnTriangle.addEventListener("click",isTriangle);