document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositValue=parseFloat(document.getElementById('deposit-input').value);
    const previousDepositTotal=parseFloat(document.getElementById('deposit-total').innerText)
    const depositTotalDisplay=previousDepositTotal+depositValue;
    document.getElementById('deposit-total').innerText=depositTotalDisplay;
    document.getElementById('deposit-input').value=' ';



    const balanceTotal = parseFloat(document.getElementById('balance-total').innerText);
    document.getElementById('balance-total').innerText=depositValue+balanceTotal;
})
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const depositValue=parseFloat(document.getElementById('withdraw-input').value);
    const previousDepositTotal=parseFloat(document.getElementById('withdraw-total').innerText)
    const depositTotalDisplay=previousDepositTotal+depositValue;
    document.getElementById('withdraw-total').innerText=depositTotalDisplay;
    document.getElementById('withdraw-input').value=' ';



    const balanceTotal = parseFloat(document.getElementById('balance-total').innerText);
    document.getElementById('balance-total').innerText=balanceTotal-depositValue;
})