//open modal window
document.querySelector(".btn-open").addEventListener( "click", ()=>{
    document.querySelector(".modal").style.display = "block";
});

//close modal window
document.querySelector(".modal-close").addEventListener( "click", ()=>{
    document.querySelector(".modal").style.display = "none";
});

//type of calc (mul or sum)
let sumOrMul="sum";

//list  sequence in first row
let inputsOneRow=document.querySelectorAll(".calc-row_one");

//list  sequence in second row
let inputsTwoRow=document.querySelectorAll(".calc-row_two");

//list  sequence in third row
let inputsThreeRow=document.querySelectorAll(".calc-row_three");

/**
 * function which sum sequence of numbers
 * @param {Object} list
 * @return {Number}
 */

function sum(list){
    let result=0;
    list.forEach(
        index=>{
            result+=Number(index.value);
        });

    return result;
}

/**
 * function which  multiply sequence of numbers
 * @param {Object} list
 * @return {Number}
 */

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

//switch calc to sum
document.querySelector(".calc-sum").addEventListener( "click", ()=>{
    sumOrMul='sum';
});


//switch calc to mul
document.querySelector(".calc-mul").addEventListener( "click", ()=>{
    sumOrMul='mul';
});

//count results in first row
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

//count results in second row
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

//count results in third row
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

//mark a third row 
document.querySelector('.mark-row_three').addEventListener('click', ()=>{
    document.querySelector(".row-three").classList.toggle("bg-green");
});

//mark a second row 
document.querySelector('.mark-row_two').addEventListener('click', ()=>{
    document.querySelector(".row-two").classList.toggle("bg-green");
});

//mark a first row 
document.querySelector('.mark-row_one').addEventListener('click', ()=>{
    document.querySelector(".row-one").classList.toggle("bg-green");
});