'use stricpt';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent='Correct Number!';
document.querySelector('.number').textContent='13';
document.querySelector('.score').textContent='10';
document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value);
*/
let score=20;
let topScore=100;
const secreatNumber=Math.trunc(Math.random()*20)+1;
document.querySelector('.number').textContent='?';

document.querySelector('.check').addEventListener
('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);
    if(score>0)
    {
        if(topScore>score){
    if(!guess){
        document.querySelector('.message').textContent='No Number';
    }
    else if(guess>secreatNumber){
        document.querySelector('.message').textContent='Higher then the secreatNumber';
        score--;
        document.querySelector('.score').textContent=score;
    }
    else if(guess<secreatNumber){
        document.querySelector('.message').textContent='This is low then secreatNumber';
        score--;
        document.querySelector('.score').textContent=score;
    }
    else{
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
        document.querySelector('.message').textContent='U have good luck today';
        score++;
        document.querySelector('.score').textContent=score;
    }
}
else{
    document.querySelector('.message').textContent='Game won';
}
    }
    else{
        document.querySelector('.message').textContent='U lost the game';
    }
})