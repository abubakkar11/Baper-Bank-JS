document.getElementById('btn-login').addEventListener('click',function(){
    const emailFlield = document.getElementById('user-email');
    const emailInner = emailFlield.value;
    console.log(emailInner)
    const passwordFlied = document.getElementById('user-password');
    const passwordInner = passwordFlied.value;
    if(emailInner === 'media4293@gmail.com' && passwordInner === '1234'){
        window.location.href = 'bank.html'
    }
    else{
        alert('Worng information');
    }
})