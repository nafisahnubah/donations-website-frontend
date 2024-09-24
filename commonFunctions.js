function getNumericInputValue(id){
    const value = document.getElementById(id).value;
    const numValue = parseFloat(value);
    document.getElementById(id).value = '';
    return numValue;
}

function getNumericTextValue(id){
    const value = document.getElementById(id).innerText;
    const numValue = parseFloat(value);
    return numValue;
}

function showOnClick(id){
    document.getElementById('donations-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

function addHistory(donation, cause){
    const div = document.createElement('div');
    div.classList.add('card', 'bg-base-100', 'w-full', 'border');
    const div2 = document.createElement('div');
    div2.classList.add('card-body');
    const h2 = document.createElement('h2');
    h2.classList.add('card-title');
    h2.innerText = `${donation} Taka has been donated for the cause: ${cause}`;
    const p = document.createElement('p');

    div2.appendChild(h2, p);
    div.appendChild(div2);

    document.getElementById('history-section').appendChild(div);
}

