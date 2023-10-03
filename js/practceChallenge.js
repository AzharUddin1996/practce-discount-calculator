
const givenMooney=prompt('give mooney');
document.getElementById('mobile-price').innerText=givenMooney;

document.getElementById('buy-with-discount').addEventListener('click',function(){
    const mobilePrice=parseFloat(document.getElementById('mobile-price').innerText);
    let mobilePriceDiscount=1000;

    if(mobilePrice===mobilePriceDiscount || mobilePrice>mobilePriceDiscount){
        const afterDiscount = mobilePrice-((mobilePrice/100)*30);
        document.getElementById('payable-price-total').innerText=afterDiscount;

    }else{
        document.write('apni discount paben na' ,' ', 'tk', mobilePrice);
    }


    document.getElementById('payable-price').addEventListener('click',function(){
        const message=document.getElementById('payable-price-total').innerText='Your purchase success';
        console.log(message)
    })
})
