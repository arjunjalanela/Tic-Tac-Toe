let Boxes=document.querySelectorAll(".box");
let Reset=document.querySelector("#btn");
let newButton=document.querySelector("#new");
let msgContainer=document.querySelector(".msg");
let msgPara=document.querySelector("#msg");
let TurnO=true;
const winPattern=[
           [0,1,2],
           [0,3,6],
           [0,4,8],
           [1,4,7],
           [2,5,8],
           [2,4,6],
           [3,4,5],
           [6,7,8]
        ];
Boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        // console.log("box was clicked");
        if(TurnO){//player O
            box.innerText="O";
            TurnO=false;

        }
        else{ //player X
        box.innerText="X";
        TurnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
});
const showWinner=(winner)=>{
    msgPara.innerText=`Congratulations Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}
const checkWinner=()=>{
    for(pattern of winPattern){
        let pos1=Boxes[pattern[0]].innerText;
        let pos2=Boxes[pattern[1]].innerText;
        let pos3=Boxes[pattern[2]].innerText;
        if(pos1!=""&& pos2!=""&&pos3!=""){
            if(pos1===pos2 && pos2===pos3 && pos1===pos3){
                // console.log("winner",pos1);
                disableBtn();
                showWinner(pos1);
            }
        }
    }
}
const disableBtn=()=>{
    for(let box of Boxes){
        box.disabled=true;
    }    
}
const enableBtn=()=>{
    for(let box of Boxes){
        box.disabled=false;
        box.innerText="";
        
    }    
}
const reset=()=>{
    TurnO=true;
    enableBtn();
    msgContainer.classList.add("hide");
}
newButton.addEventListener("click",reset);
Reset.addEventListener("click",reset);