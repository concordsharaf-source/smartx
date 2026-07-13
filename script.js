let users = JSON.parse(localStorage.getItem("smartUsers")) || [];


// حساب المدير الافتراضي
if(!localStorage.getItem("adminCreated")){

    users.push({

        username:"admin",
        password:"123456",
        name:"المدير",
        balance:0,
        points:0,
        code:"ADMIN"

    });


    localStorage.setItem("smartUsers",JSON.stringify(users));
    localStorage.setItem("adminCreated","yes");

}




// تسجيل الدخول

function login(){

    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;


    let user=users.find(

        u=>u.username===username && u.password===password

    );


    if(user){

        localStorage.setItem("currentUser",username);


        if(username==="admin"){

            window.location="admin.html";

        }

        else{

            window.location="user.html";

        }


    }

    else{

        alert("بيانات الدخول غير صحيحة");

    }


}





// إنشاء حساب جديد

function registerUser(){


let name=document.getElementById("newName").value;
let username=document.getElementById("newUser").value;
let password=document.getElementById("newPass").value;
let invite=document.getElementById("inviteCode").value;



if(!name || !username || !password){

    alert("أكمل البيانات");
    return;

}



if(users.some(u=>u.username===username)){

    alert("اسم المستخدم موجود");
    return;

}



let code="SMART-"+Math.floor(1000+Math.random()*9000);



let newUser={

name:name,
username:username,
password:password,
balance:0,
points:0,
code:code

};



// مكافأة كود الدعوة

if(invite){

let owner=users.find(u=>u.code===invite);

if(owner){

owner.points+=100;

}

}



users.push(newUser);


saveUsers();


alert("تم إنشاء الحساب");

window.location="index.html";


}





// حفظ البيانات

function saveUsers(){

localStorage.setItem(

"smartUsers",

JSON.stringify(users)

);

}




// عرض بيانات العضو

function loadUserData(){


let username=localStorage.getItem("currentUser");


let user=users.find(

u=>u.username===username

);


if(user){

document.getElementById("userName").innerHTML=user.name;

document.getElementById("balance").innerHTML=
user.balance+" $";


document.getElementById("points").innerHTML=
user.points+" نقطة";


document.getElementById("myCode").innerHTML=
user.code;


}


}




// عرض الأعضاء للمدير

function loadUsers(){


let box=document.getElementById("usersList");


box.innerHTML="";


users.forEach(user=>{


if(user.username!=="admin"){


box.innerHTML+=`

<div class="user-item">

<b>${user.name}</b><br>

المستخدم:
${user.username}

<br>

الرصيد:
${user.balance}$

<br>

النقاط:
${user.points}

</div>

`;


}



});


}




// إضافة رصيد

function addUserBalance(){


let username=
document.getElementById("adminUser").value;


let amount=
Number(document.getElementById("addBalance").value);



let user=users.find(
u=>u.username===username
);



if(user){

user.balance+=amount;

saveUsers();

alert("تم إضافة الرصيد");

loadUsers();


}

else{

alert("المستخدم غير موجود");

}



}




// إضافة نقاط

function addUserPoints(){


let username=
document.getElementById("pointsUser").value;


let points=
Number(document.getElementById("addPoints").value);



let user=users.find(
u=>u.username===username
);



if(user){

user.points+=points;

saveUsers();

alert("تم إضافة النقاط");

loadUsers();


}

else{

alert("المستخدم غير موجود");

}


}





// تسجيل الخروج

function logout(){

localStorage.removeItem("currentUser");

window.location="index.html";


}