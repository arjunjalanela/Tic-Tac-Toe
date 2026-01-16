const BASE_URL="https://v6.exchangerate-api.com/v6/7fd237cdb96fcd818def483a/latest/USD";
const dropdowns=document.querySelectorAll(".dropdown select");
// const select=document.querySelector("select")
// for(let code in countryList){
//     console.log(code);
// }
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const btn=document.querySelector("button");
const msg=document.querySelector(".msg");
let i=0
for(let select of dropdowns){
    for(currCode in countryList){
        let newOption=document.createElement("Option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        if(select.name==="from" && currCode==="USD"){
            newOption.selected=true;
        }else if(select.name==="to" && currCode==="INR"){
            newOption.selected=true;
        }
        select.append(newOption)
        }
        select.addEventListener("change",(evt)=>{
            updateFlag(evt.target);
        })
    }
const updateFlag = (element)=>{
    let currCode=element.value;
    let countryCode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src=newSrc;
};

btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    let amount=document.querySelector(".amount input");
    let amtVal=amount.value;
    const from=fromCurr.value;
    const to=toCurr.value;
    if(amtVal ==="" || amtVal<1){
        amtVal=1;
        amount.value="1";
    }
    console.log(from,to)
    const URL=`https://v6.exchangerate-api.com/v6/7fd237cdb96fcd818def483a/latest/${from}`;
    let response=await fetch(URL);
    let data=await response.json();
    const rate=data.conversion_rates[to];
    const finalAmount = (amtVal * rate).toFixed(2);
    msg.innerText = `${amtVal} ${from} = ${finalAmount} ${to}`;

})

