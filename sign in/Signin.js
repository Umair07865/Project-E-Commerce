/* variable declarations */


var loginbtn=document.getElementById("loginbtn");
var cradentials;
var usercradentials={};


/* fetching the cradentioals from the given API */



/*making an empty object which will make easier to acces data in console to check */
function loginvalidations()
{
    var password=document.getElementById("userpassword").value;

var username=document.getElementById("username").value;
    console.log(username);
    console.log(password)
fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username: `${username}`,
    password:`${ password}`,
    // expiresInMins: 60, // optional
  })
})
.then((response)=>{

    return response.json();
}).then((data)=>{
 usercradentials=data;

 console.log(usercradentials.message);
 if(usercradentials.message=="Invalid credentials")
 {
    
      alert("invalid input");
 }
 else{
    localStorage.setItem('testObject', JSON.stringify(usercradentials));
    localStorage.setItem("state",true);
    alert("Succesfully logged in");
    window.location.href="../dashboard/dashboard.html";
 }
 


  
}).catch((error)=>{

    alert("error: " +error.message);
})

}
// fetch(url).then((response)=>{

//     return response.json();
// }).then((data)=>{

//     /* setting the object to the variable */
//   usercradentials=data;
//     console.log(usercradentials);
//  /* saving all the data in the local storage */
   

// let newuser=usercradentials.users[0].email;

// let newpassword=usercradentials.users[0].password;
// console.log("hello")
// console.log(newpassword);
// JSON.stringify( localStorage.setItem("useremail",newuser));
// JSON.stringify( localStorage.setItem("userpassword",newpassword));


// console.log(newuser);


// }).catch((error)=>{

//     alert("Error:"+error.message)
// });

// function validations()
// {
//   // event.preventDefault()
 
 

 

//     if(email== localStorage.getItem("useremail") )
//     {

       
           
//         if(password==localStorage.getItem("userpassword"))
//         {
            
//             console.log("user password access");
//             alert("login Succesfully");
//              console.log("successfull");
//              window.location.href="../dashboard/dashboard.html";
//             /* dashboard file path*/
      
     
       
//     }
        
    
// }
// else{
//     console.log("not successful");
//     alert("invalid details")
  
// }





//  }
