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
    const donatedMoney = getNumericTextValue('donation1');
    const newTotal = input + donatedMoney;
    document.getElementById('donation1').innerText = newTotal;
    document.getElementById('balance').innerText = balance - input;
    addHistory(donatedMoney, 'Flood at Noakhali, Bangladesh');
})

document.getElementById('donate-btn-2').addEventListener('click', function(){
    const balance = getNumericTextValue('balance');
    const input = getNumericInputValue('input-field-2');
    const donatedMoney = getNumericTextValue('donation2');
    const newTotal = input + donatedMoney;
    document.getElementById('donation2').innerText = newTotal;
    document.getElementById('balance').innerText = balance - input;
    addHistory(donatedMoney, 'Flood Relief in Feni, Bangladesh');
})

document.getElementById('donate-btn-3').addEventListener('click', function(){
    const balance = getNumericTextValue('balance');
    const input = getNumericInputValue('input-field-3');
    const donatedMoney = getNumericTextValue('donation3');
    const newTotal = input + donatedMoney;
    document.getElementById('donation3').innerText = newTotal;
    document.getElementById('balance').innerText = balance - input;
    addHistory(donatedMoney, 'Aid for Injured in the Quota Movement');
})