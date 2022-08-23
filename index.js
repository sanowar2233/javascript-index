
document.getElementById('first-btn').addEventListener('click',function(){
    const playerContainer=document.getElementById('select-id');
    const playerName=document.createElement('playerName');
    playerName.innerText='  1. Leonel  Messi ' +"\n" 
    playerName.classList.add('messi')
    playerContainer.appendChild(playerName)
    playerCostCalculation()
})

document.getElementById('2nd-btn').addEventListener('click',function(){
    const playerContainer=document.getElementById('select-id');
    const playerName=document.createElement('playerName');
    playerName.innerText='  2. Ronaldo' +"\n" 
    playerName.classList.add('ronaldo')
    playerContainer.appendChild(playerName)
    playerCostCalculation()
})

document.getElementById('3rd-btn').addEventListener('click',function(){
    const playerContainer=document.getElementById('select-id');
    const playerName=document.createElement('playerName');
    playerName.innerText='  3. Neymar ' +"\n" 
    playerName.classList.add('messi')
    playerContainer.appendChild(playerName)
    playerCostCalculation()
})

document.getElementById('4th-btn').addEventListener('click',function(){
    const playerContainer=document.getElementById('select-id');
    const playerName=document.createElement('playerName');
    playerName.innerText=' 4. Pogba' +"\n" 
    playerName.classList.add('pogba')
    playerContainer.appendChild(playerName)
    playerCostCalculation()
})

document.getElementById('5th-btn').addEventListener('click',function(){
    const playerContainer=document.getElementById('select-id');
    const playerName=document.createElement('playerName');
    playerName.innerText='5. MD.Sala ' +"\n" 
    playerName.classList.add('sala')
    playerContainer.appendChild(playerName)
    playerCostCalculation()
})

document.getElementById('6th-btn').addEventListener('click',function(){
    const playerContainer=document.getElementById('select-id');
    const playerName=document.createElement('playerName');
    playerName.innerText=' 6. Mular ' +"\n" 
    playerName.classList.add('mular')
    playerContainer.appendChild(playerName)
    playerCostCalculation()
})

let numberOfPlayer = ()=>{
    const selector = document.getElementById("select-id");
    const childNode = selector.getElementsByTagName("playerName");
    
    let numb = childNode.length;
    return numb;
      
    
}

let playerCostCalculation =()=>{
    let playerCost = document.getElementById('playerCost').value
    let totalPrice = numberOfPlayer()*playerCost
    document.getElementById('showPlayerCost').innerHTML = `$ ${totalPrice}`
    return totalPrice
}

document.getElementById('playerCostCalculation').addEventListener('click',()=>{
    playerCostCalculation()
})

document.getElementById('totalCalculation').addEventListener('click',()=>{
    let managerCost = document.getElementById('managerCost').value
    let coachCost = document.getElementById('coachCost').value
    let totalCost =  Number(managerCost) +Number(coachCost)+ Number(playerCostCalculation())
    document.getElementById('showTotalCost').innerHTML = `$ ${totalCost}`
})



var clicks = 0;
function clickME(el) {
   el.disabled = true;
   clicks +=1;

}


// $(document).ready(function(){
//     let count = 0 ;
//     $("button").click(function(){
//         count+=1;
//         if (count == 6)        
//              alert("ALERT!");
           
//              return alert();
//     });
// });
