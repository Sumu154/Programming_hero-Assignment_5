  // window scrolling header sticky
const header = document.querySelector('header');

// Add blur-on-scroll class on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('bg-lightash');
    } else {
        header.classList.remove('bg-lightash');
    }
});


// toggle donation - history
  // donation -> history
document.getElementById('history-btn').addEventListener('click', function(){

    const donationBtn = document.getElementById('donation-btn');
    const historyBtn = document.getElementById('history-btn');
    const donationDiv = document.getElementById('donation-div');
    const historyDiv = document.getElementById('history-div');

    donationBtn.classList.add('text-opacity-70', 'border-bordercolor', 'border-[1px]');
    donationBtn.classList.remove('bg-lightgreen');
    historyBtn.classList.add('bg-lightgreen');
    historyBtn.classList.remove('text-opacity-70', 'border-bordercolor', 'border-[1px]');
    
    historyDiv.classList.remove('hidden');
    donationDiv.classList.add('hidden');
})

document.getElementById('donation-btn').addEventListener('click', function(){
    const donationBtn = document.getElementById('donation-btn');
    const historyBtn = document.getElementById('history-btn');
    const donationDiv = document.getElementById('donation-div');
    const historyDiv = document.getElementById('history-div');

    donationBtn.classList.add('bg-lightgreen');
    donationBtn.classList.remove('text-opacity-70', 'border-bordercolor', 'border-[1px]');
    historyBtn.classList.add('text-opacity-70', 'border-bordercolor', 'border-[1px]');
    historyBtn.classList.remove('bg-lightgreen');


    donationDiv.classList.remove('hidden');
    historyDiv.classList.add('hidden');

})




