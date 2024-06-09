// scrool drop down 
function scrollDopDown(){
    document.getElementById('sell-ticket').scrollIntoView('sell-ticket')
}


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
        const hr = document.createElement('div');
        hr.classList.add('border')
        hr.classList.add('border-dashed')
        hr.classList.add('border-black')
        selectedTicket.append(hr)

        const singleTicket = p3.innerText;
        updateTotalCost (singleTicket);
        updateGrandTotal();
    })}

    const allItems = document.getElementsByClassName('bus-sit');

let sitCount = 0;
let availableSit = 8;

for(const item of allItems){
    item.addEventListener('click', function(event){
        sitCount= sitCount + 1;
        document.getElementById('select-sit')
        .innerText = sitCount;
        availableSit = availableSit - 1;
        document.getElementById('available-sit').innerText =availableSit;
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