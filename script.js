document.getElementById('donation-btn').addEventListener('click', function(){
    this.classList.remove('bg-white');
    this.classList.add('bg-lime-300');
    document.getElementById('history-btn').classList.remove('bg-lime-300');
    document.getElementById('history-btn').classList.add('bg-white');
    showOnClick('donations-section');
})

document.getElementById('history-btn').addEventListener('click', function(){
    this.classList.remove('bg-white');
    this.classList.add('bg-lime-300');
    document.getElementById('donation-btn').classList.remove('bg-lime-300');
    document.getElementById('donation-btn').classList.add('bg-white');
    showOnClick('history-section');
})

document.getElementById('donate-btn-1').addEventListener('click', function(){
    const balance = getNumericTextValue('balance');
    const input = getNumericInputValue('input-field-1');

    if(isNaN(input)){
        alert('Please input valid amount!');
        return;
    }

    const donatedMoney = getNumericTextValue('donation1');
    const newTotal = input + donatedMoney;
    const newBalance = balance - input;

    if(newBalance<0){
        alert('Insufficient balance, cannot donate this amount.');
        return;
    }
    my_modal_5.showModal();

    document.getElementById('donation1').innerText = newTotal;
    document.getElementById('balance').innerText = newBalance;
    addHistory(input, 'Flood at Noakhali, Bangladesh');
})

document.getElementById('donate-btn-2').addEventListener('click', function(){
    const balance = getNumericTextValue('balance');
    const input = getNumericInputValue('input-field-2');

    if(isNaN(input)){
        alert('Please input valid amount!');
        return;
    }

    const donatedMoney = getNumericTextValue('donation2');
    const newTotal = input + donatedMoney;
    const newBalance = balance - input;

    if(newBalance<0){
        alert('Insufficient balance, cannot donate this amount.');
        return;
    }
    my_modal_6.showModal()

    document.getElementById('donation2').innerText = newTotal;
    document.getElementById('balance').innerText = balance - input;
    addHistory(input, 'Flood Relief in Feni, Bangladesh');
})

document.getElementById('donate-btn-3').addEventListener('click', function(){
    const balance = getNumericTextValue('balance');
    const input = getNumericInputValue('input-field-3');

    if(isNaN(input)){
        alert('Please input valid amount!');
        return;
    }

    const donatedMoney = getNumericTextValue('donation3');
    const newTotal = input + donatedMoney;
    const newBalance = balance - input;

    if(newBalance<0){
        alert('Insufficient balance, cannot donate this amount.');
        return;
    }
    my_modal_7.showModal()

    document.getElementById('donation3').innerText = newTotal;
    document.getElementById('balance').innerText = balance - input;
    addHistory(input, 'Aid for Injured in the Quota Movement');
})