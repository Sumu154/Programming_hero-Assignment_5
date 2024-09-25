// history add of the transaction
  // noakhali history
document.getElementById('noakhali-donate').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = parseFloat(document.getElementById('noakhali-add').value);      // input er money string ke number e nite hbe
    
    if(addMoney>0 && !isNaN(addMoney)){
        const dateMsg = new Date().toString();
        const parent = document.getElementById('history-div');

        const newDiv = document.createElement('div');
        newDiv.classList.add('p-6', 'mb-4', 'border-bordercolor', 'border-[1px]', 'rounded-2xl');

        const ptaka = document.createElement('p');
        ptaka.classList.add('text-black', 'font-bold', 'text-base', 'md:text-xl', 'mb-3');
        ptaka.innerText = addMoney + ' Taka id Donated for flood at noakhali, Bangladesh';
        
        const pdate = document.createElement('p');
        pdate.classList.add('text-black', 'text-opacity-70', 'text-sm', 'md:text-base');
        pdate.innerText = 'Date: ' + dateMsg;

        newDiv.appendChild(ptaka);
        newDiv.appendChild(pdate);

        parent.append(newDiv);

    }
});

  // feni history
document.getElementById('feni-donate').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = parseFloat(document.getElementById('feni-add').value);      // input er money string ke number e nite hbe
    
    if(addMoney>0 && !isNaN(addMoney)){
        const dateMsg = new Date().toString();
        const parent = document.getElementById('history-div');

        const newDiv = document.createElement('div');
        newDiv.classList.add('p-6', 'mb-4', 'border-bordercolor', 'border-[1px]', 'rounded-2xl');

        const ptaka = document.createElement('p');
        ptaka.classList.add('text-black', 'font-bold', 'text-base', 'md:text-xl', 'mb-3');
        ptaka.innerText = addMoney + ' Taka id Donated for flood at Feni, Bangladesh';
        
        const pdate = document.createElement('p');
        pdate.classList.add('text-black', 'text-opacity-70', 'text-sm', 'md:text-base');
        pdate.innerText = 'Date: ' + dateMsg;

        newDiv.appendChild(ptaka);
        newDiv.appendChild(pdate);

        parent.append(newDiv);

    }
});

  // movement history
document.getElementById('quota-donate').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = parseFloat(document.getElementById('quota-add').value);      // input er money string ke number e nite hbe
    
    if(addMoney>0 && !isNaN(addMoney)){
        const dateMsg = new Date().toString();
        const parent = document.getElementById('history-div');

        const newDiv = document.createElement('div');
        newDiv.classList.add('p-6', 'mb-4', 'border-bordercolor', 'border-[1px]', 'rounded-2xl');

        const ptaka = document.createElement('p');
        ptaka.classList.add('text-black', 'font-bold', 'text-base', 'md:text-xl', 'mb-3');
        ptaka.innerText = addMoney + ' Taka id Donated for Aid for Injured in the Quota Movement, Bangladesh';
        
        const pdate = document.createElement('p');
        pdate.classList.add('text-black', 'text-opacity-70', 'text-sm', 'md:text-base');
        pdate.innerText = 'Date: ' + dateMsg;

        newDiv.appendChild(ptaka);
        newDiv.appendChild(pdate);

        parent.append(newDiv);

    }
});








