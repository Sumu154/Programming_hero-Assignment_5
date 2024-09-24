     // toggle donation - history
document.getElementById('history-btn').addEventListener('click', function(){
    document.getElementById('history-div').classList.remove('hidden');
    document.getElementById('donation-div').classList.add('hidden');
})


document.getElementById('donation-btn').addEventListener('click', function(){
    document.getElementById('donation-div').classList.remove('hidden');
    document.getElementById('history-div').classList.add('hidden');

})


  // add donation money 
document.getElementById('noakhali-donate').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = parseFloat(document.getElementById('noakhali-add').value);      // input er money string ke number e nite hbe
    if(addMoney > 0){
        const presentMoney = parseFloat(document.getElementById('noakhali-money').innerText);
        const totalMoney = parseFloat(document.getElementById('total-money').innerText);

        document.getElementById('noakhali-money').innerText = presentMoney + addMoney; 

    }
    else{
        alert('Failed to add Money.Please try again.')
    }
})