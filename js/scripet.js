const allSit = document.getElementsByClassName('bus-sit')

for (const sit of allSit){
    sit.addEventListener('click', function(event){
        const firsSit = event.target.innerText;
        const selectedTicket = document.getElementById('tickit-1');
        const div = document.createElement('div')
        div.classList.add('sit-style')
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        p1.innerText=firsSit;
        p2.innerText='Economoy';
        p3.innerText='550';
        div.append(p1);
        div.append(p2);
        div.append(p3);
        selectedTicket.append(div)

        const singleTicket = p3.innerText;
        updateTotalCost (singleTicket);
        updateGrandTotal();
    })}

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

    function updateGrandTotal(stutas){
        if (stutas== undefined){
            const totalPrice = getConvertSitValue('bay-of-cost');
        document.getElementById('grand-total').innerText = totalPrice;
        }
        const cuponCode = document.getElementById('cupon-code').value;
        if(cuponCode=='NEW15'|| 'Couple 20'){
            const discound = totalPrice * .2;
        }
        else{
            alert('please enter a valid cupone code')
        }
    }

    function updateTotalCost (value){
        const totalPrice = getConvertSitValue('bay-of-cost')
        const sum = totalPrice + parseInt(value) ;
        document.getElementById('bay-of-cost').innerText = sum;
    }

    function getConvertSitValue(id){
        // const sitOfBuss = document.getElementById(id).style.backgroundColor='#1DD100';
        const sitPrice= document.getElementById(id).innerText;
        const sitPriceTK = parseInt(sitPrice);
        return sitPriceTK;
    }