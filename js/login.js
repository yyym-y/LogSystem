const first = document.querySelector(".first")
const second = document.querySelector('.second');
const centre = document.querySelector('.centre')
const REGISTER = document.querySelector(".REGISTER")
const LOGIN = document.querySelector(".LOGIN")
const IN = document.querySelectorAll("#IN")
const REG = document.querySelectorAll("#REG")
let DIS = 0

function move(type){
    if(type == "right"){
        let Index = setInterval(function(){
            if(DIS >= 340){
                DIS = 340
                clearInterval(Index);
                return;
            }
            centre.style.transform = "translate(" + (DIS-20) + "px, -30px)"
            DIS+=3;
        }, 1)
    }else{
        let Index = setInterval(function(){
            if(DIS <= 0){
                DIS = 0;
                clearInterval(Index);
                return;
            }
            centre.style.transform = "translate(" + (DIS-20) + "px, -30px)"
            DIS-=3;
        }, 1)
    }
}

second.addEventListener('click', function(){
    REGISTER.style.visibility = "visible"
    LOGIN.style.visibility = "hidden"
    move("right")
})

first.addEventListener('click', function(){
    LOGIN.style.visibility = "visible"
    REGISTER.style.visibility = "hidden"
    move("left")
})

IN[2].addEventListener('click', function(){
    let account = IN[0].value
    let passWord = IN[1].value
    let atpos=account.indexOf("@");
    let dotpos=account.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=account.length)    return false;
    if(passWord == ""){
        alert("密码不能为空！！！")
        return
    }
    real = localStorage.getItem(account);
    if(real == passWord){
        alert("right")
    }else{
        alert("账号或者密码错误！！！")
    }
})
console.log(REG)
REG[3].addEventListener('click', function(){
    let account = REG[0].value
    let passWord1 = REG[1].value
    let passWord2 = REG[2].value
    let atpos=account.indexOf("@");
    let dotpos=account.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=account.length) return false;
    if(passWord1 == ""){
        alert("密码不能为空！！！")
        return
    }
    if(passWord1 != passWord2){
        alert("两次输入密码不一致！！！")
        return
    }
    localStorage.setItem(account, passWord1)
    alert("账号注册成功 :)")
})