// scrool drop down 
function scrollDopDown(){
    document.getElementById('sell-ticket').scrollIntoView('sell-ticket')
}

// sit sec

const allItems = document.getElementsByClassName('items');

let sitCount = 0;
let availableSit = 8;

for(const item of allItems){
    item.addEventListener('click', function(event){
        sitCount= sitCount + 1;
        document.getElementById('select-sit')
        .innerText = sitCount;
        availableSit = availableSit - 1;
        document.getElementById('available-sit').innerText =availableSit;

         const ticket1 = event.target.innerText;
         document.getElementById('ticket-1').classList.remove('hidden')
         document.getElementById('ticket-no-1').innerText = ticket1;

         const ticket2 = event.target.innerText;
         document.getElementById('ticket-2').classList.remove('hidden')
         document.getElementById('ticket-no-2').innerText = ticket2;

         const ticket3 = event.target.innerText;
         document.getElementById('ticket-3').classList.remove('hidden')
         document.getElementById('ticket-no-3').innerText = ticket3;
         const ticket4 = event.target.innerText;
         document.getElementById('ticket-4').classList.remove('hidden')
         document.getElementById('ticket-no-4').innerText = ticket4;
    })
}

document.getElementById('a1').addEventListener('click', function(){
    this.style.backgroundColor='#1DD100'
})
document.getElementById('a2').addEventListener('click', function(){
    this.style.backgroundColor='#1DD100'
})
document.getElementById('a3').addEventListener('click', function(){
    this.style.backgroundColor='#1DD100'
})
document.getElementById('a4').addEventListener('click', function(){
    this.style.backgroundColor='#1DD100'
})
document.getElementById('b1').addEventListener('click', function(){
    this.style.backgroundColor='#1DD100'
})
document.getElementById('b2').addEventListener('click', function(){
    this.style.backgroundColor='#1DD100'
})
document.getElementById('b3').addEventListener('click', function(){
    this.style.backgroundColor='#1DD100'
})
document.getElementById('b4').addEventListener('click', function(){
    this.style.backgroundColor='#1DD100'
})
