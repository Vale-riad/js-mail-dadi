// 1. far generare 6 numeri random all'utente
const user = Math.floor(Math.random() * 7);
console.log(`il numero dell\'utente:`, user);
// 2. far generare alla cpu 6 numeri random
const cpu = Math.floor(Math.random() * 7);
console.log(`il numero della cpu:`, cpu);;

if (user>cpu){
    console.log("evviva hai vinto");
    alert("evviva hai vinto")
}else if(user<cpu){
    console.log("mi dispiace ha vinto la cpu!!")
    alert("mi dispiace ha vinto la cpu")
}