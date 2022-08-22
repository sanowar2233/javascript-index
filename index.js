
document.getElementById('first-btn').addEventListener('click',function(){
    const playerContainer=document.getElementById('select-id');
    const playerName=document.createElement('playerName');
    playerName.innerText='  1. Leonel  Messi ' +"\n" 
    playerName.classList.add('messi')
    playerContainer.appendChild(playerName)
})

document.getElementById('2nd-btn').addEventListener('click',function(){
    const playerContainer=document.getElementById('select-id');
    const playerName=document.createElement('playerName');
    playerName.innerText='  2. Ronaldo' +"\n" 
    playerName.classList.add('ronaldo')
    playerContainer.appendChild(playerName)
})

document.getElementById('3rd-btn').addEventListener('click',function(){
    const playerContainer=document.getElementById('select-id');
    const playerName=document.createElement('playerName');
    playerName.innerText='  3. Neymar ' +"\n" 
    playerName.classList.add('messi')
    playerContainer.appendChild(playerName)
})

document.getElementById('4th-btn').addEventListener('click',function(){
    const playerContainer=document.getElementById('select-id');
    const playerName=document.createElement('playerName');
    playerName.innerText=' 4. Pogba' +"\n" 
    playerName.classList.add('pogba')
    playerContainer.appendChild(playerName)
})

document.getElementById('5th-btn').addEventListener('click',function(){
    const playerContainer=document.getElementById('select-id');
    const playerName=document.createElement('playerName');
    playerName.innerText='5. MD.Sala ' +"\n" 
    playerName.classList.add('sala')
    playerContainer.appendChild(playerName)
})

document.getElementById('6th-btn').addEventListener('click',function(){
    const playerContainer=document.getElementById('select-id');
    const playerName=document.createElement('playerName');
    playerName.innerText=' 6. Mular ' +"\n" 
    playerName.classList.add('mular')
    playerContainer.appendChild(playerName)
})




