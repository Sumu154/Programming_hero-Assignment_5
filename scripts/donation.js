  // add donation money for noakhali
document.getElementById('noakhali-donate').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = parseFloat(document.getElementById('noakhali-add').value);      // input er money string ke number e nite hbe
    if(addMoney>0  && !isNaN(addMoney)){
        const presentMoney = parseFloat(document.getElementById('noakhali-money').innerText);
        const totalMoney = parseFloat(document.getElementById('total-money').innerText);

        document.getElementById('noakhali-money').innerText = presentMoney + addMoney; 
        document.getElementById('total-money').innerText = totalMoney - addMoney;

        const modal = document.getElementById('modal');
        modal.showModal();

    }
    else{
        alert('Failed to add Money.Please try again.')
    }
})

  // add donation money for feni
document.getElementById('feni-donate').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = parseFloat(document.getElementById('feni-add').value);
    if(addMoney>0  && !isNaN(addMoney)){
        const presentMoney = parseFloat(document.getElementById('feni-money').innerText);
        const totalMoney = parseFloat(document.getElementById('total-money').innerText);

        document.getElementById('feni-money').innerText = presentMoney + addMoney;
        document.getElementById('total-money').innerText = totalMoney - addMoney;

        const modal = document.getElementById('modal');
        modal.showModal();
    }
    else{
        alert('Falied to add Money. Please try again.')
    }

})

  // add doantion money for movement
document.getElementById('quota-donate').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = parseFloat(document.getElementById('quota-add').value);
    if(addMoney>0  && !isNaN(addMoney)){
        const presentMoney = parseFloat(document.getElementById('quota-money').innerText);
        const totalMoney = parseFloat(document.getElementById('total-money').innerText);

        document.getElementById('quota-money').innerText = presentMoney + addMoney;
        document.getElementById('total-money').innerText = totalMoney - addMoney;

        const modal = document.getElementById('modal');
        modal.showModal();

    }
    else{
        alert('Falied to add Money. Please try again.')
    }

})


// close btn e click korle input field clear hbe
document.getElementById('close-btn').addEventListener('click', function(){
    document.getElementById('noakhali-add').value = "";
    document.getElementById('feni-add').value = "";
    document.getElementById('quota-add').value = "";
})




