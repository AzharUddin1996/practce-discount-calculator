document.getElementById('submit-btn').addEventListener('click',function(){
    const userEmail=document.getElementById('user-email').value;
    const userPassword=document.getElementById('user-password').value;
    if(userEmail==='a.uddin4321@gmail.com' && userPassword==='azhar4321/'){
        window.location.href='bank.html'
    }else{
        alert('this is in valid user');
    }
})

