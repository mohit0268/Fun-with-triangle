const inputArea=document.querySelectorAll("#triangle-input");
const btnCalculate=document.querySelector(".calculate-btn");
const output=document.querySelector(".output-area");

const MultiplyingArea=(base,height)=>{
    const mulOfArea=base *height;
    return mulOfArea;
}

const calculateArea = ()=>{
    const mulOfArea=MultiplyingArea(Number(inputArea[0].value),Number(inputArea[1].value));
    const halfofTriangleArea=mulOfArea/2;
    output.innerText="Area of Triangle is "+halfofTriangleArea;
}


btnCalculate.addEventListener("click",calculateArea);