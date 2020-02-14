document.querySelector(".btn-open").addEventListener( "click", ()=>{
    document.querySelector(".modal").style.display = "block";
});

document.querySelector(".modal-close").addEventListener( "click", ()=>{
    document.querySelector(".modal").style.display = "none";
});
let sumOrMul="sum";
let inputsOneRow=document.querySelectorAll(".calc-row_one");
let inputsTwoRow=document.querySelectorAll(".calc-row_two");
let inputsThreeRow=document.querySelectorAll(".calc-row_three");

function sum(list){
    let result=0;
    list.forEach(
        index=>{
            result+=Number(index.value);
        });

    return result;
}

function mul(list){
    let result=1;
    list.forEach(
        index=>{
            if(index.value!=0){
                result*=Number(index.value);
            }
        });

    return result;
}

document.querySelector(".calc-sum").addEventListener( "click", ()=>{
    sumOrMul='sum';
});

document.querySelector(".calc-mul").addEventListener( "click", ()=>{
    sumOrMul='mul';
});

inputsOneRow.forEach(index=>{
    index.addEventListener('input', ()=>
    {
        let newList=document.querySelectorAll(".calc-row_one");
        let result=0;
        if(sumOrMul==="sum"){
            result=sum(newList);
        }
        else{
            result=mul(newList)
        }
        document.querySelector('.results-row_one').textContent=`${result}`;
    });
});

inputsTwoRow.forEach(index=>{
    index.addEventListener('input', ()=>
    {
        let newList=document.querySelectorAll(".calc-row_two");
        let result=0;
        if(sumOrMul==="sum"){
            result=sum(newList);
        }
        else{
            result=mul(newList)
        }

        document.querySelector('.results-row_two').textContent=`${result}`;
    });
});

inputsThreeRow.forEach(index=>{
    index.addEventListener('input', ()=>
    {
        let newList=document.querySelectorAll(".calc-row_three");
        let result=0;
        if(sumOrMul==="sum"){
            result=sum(newList);
        }
        else{
            result=mul(newList)
        }
        document.querySelector('.results-row_three').textContent=`${result}`;
    });
});

document.querySelector('.mark-row_three').addEventListener('click', ()=>{
    document.querySelector(".row-three").classList.toggle("bg-green");
});

document.querySelector('.mark-row_two').addEventListener('click', ()=>{
    document.querySelector(".row-two").classList.toggle("bg-green");
});

document.querySelector('.mark-row_one').addEventListener('click', ()=>{
    document.querySelector(".row-one").classList.toggle("bg-green");
});