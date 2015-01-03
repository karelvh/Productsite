var buyButton = document.getElementById('buyButton');

function colorBuyButton(){
    if(document.getElementById('colorBlack').checked) {
        buyButton.style.background='#000';
        buyButton.style.color='#fff';
        buyButton.disabled=false;
        buyButton.innerHTML='Buy a black lockitron';
    }
    else if(document.getElementById('colorGreen').checked) {
        buyButton.style.background='#46fff9';
        buyButton.style.color='#fff';
        buyButton.disabled=false;
        buyButton.innerHTML='Buy a green lockitron';
    }
    else if(document.getElementById('colorSilver').checked) {
        buyButton.style.background='#bbbcbe';
        buyButton.style.color='#fff';
        buyButton.disabled=false;
        buyButton.innerHTML='Buy a silver lockitron';
    }
}
