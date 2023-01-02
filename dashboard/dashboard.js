
 let check=localStorage.getItem("state")
if(check!="true")
{
  window.location.href="../sign in/Signin.html"
}

// initializing variables
// making the empty object to store all the data inside it
let object1={};
let object2={};
//making an empty object to store the specific product
let object3={};

//fetching the data of the products
fetch('https://dummyjson.com/products?_start=0&limit=10')
.then((response)=>{

    return  response.json();
}).then((data)=>{

    object1=data;
    console.log(object1);
//making another empty variable to store the data after mapping

let mappeddata="";
  // using maping method to evaluate all the nessacerry data into Html

  object1.products.map(function(elem,index){
   // pasting the whole html insde the back tiddle codes 

    mappeddata+=`
    <h2 class="text-center">${elem.category}</h2>

        <div class="card-group text-muted" >


            <div class="card " id=card${index} >
                <h5 class="card-title "> ${elem.title}</h5>
                <div class="card-body ncardbody">
           

                    <div class="inner">
                        <img src="${elem.images[0]}"
                            class="card-img-top" alt="loading" >

                    </div>

                </div>
                <ul class="list-group list-group-flush">
                 <li  class="list-group-item">Brand:${elem.description} </li>
                    <span id="detaillist${index}" class="listdetails" >
                  <li  class="list-group-item">Brand:${elem.brand} </li>
                  <li class="list-group-item">Discount Percentage:${elem.discountPercentage}</li>
                  <li class="list-group-item">Rating:  ${elem.rating}</li>
                  <li class="list-group-item">Stock: ${elem.stock}</li>
                  <li class="list-group-item">price: ${elem.price}</li>
                  </span>
                  <li class="list-group-item"> <button type="button" class="btn btn-danger w-100" onclick="deletion(${index})" >Delete</button>  </li>
                  <li class="list-group-item">  <button type="button" class="btn btn-info w-100   onclick="updation(${index})" >Update</button>   </li>
                
                     
                     

                 
            
               
                </ul>
                <span class="spanupdate" id=update${index}>
                <i class="fa-solid fa-xmark" id="canclelogo"></i>
                 <div class="updatecard col-md-3 h-auto bg-warning text-danger d-flex ">
                <ul>
                  <li class=" d-flex flex-column"><label for="title1"> A title</label>
                    <input type="text" name="text" id="title${index}"></li>
                  <li class=" d-flex flex-column"><label for="imageurl1">Any image URL</label>
                    <input type="text" name="text" id="imageurl1${index}">
                 </li>
                  <li class=" d-flex flex-column">
                    <label for="discountper1">Discount percentage</label>
                        <input type="text" name="text" id="discountper1${index}"></li>
                  <li class=" d-flex flex-column"><label for="reating1">Rating</label>
                    <input type="text" name="text" id="rating1${index}"></li>
                  <li class=" d-flex flex-column"><label for="stock1">Stock</label>
                    <input type="text" name="text" id="stock1${index}"></li>
                  <li class=" d-flex flex-column">
                
                    <label for="price1">Price</label>
                        <input type="text" name="text" id="price1${index}">
                    </li>
                </ul>
                    
                  
                
                
                
                
                
                  </div>
                            </span>
             
            </div>

     
           
            <div class="card " id=card${index} >
              <h5 class="card-title ">${elem.title}</h5>

             
                <div class="card-body ncardbody">


                    <div class="inner">
                        <img src="${elem.images[1]}"
                            class="card-img-top" alt="loading" style="    width: 18rem !important;
                        height: 17rem;">

                    </div>

                </div>
                <ul class="list-group list-group-flush">
                 <li class="list-group-item" >Brand: ${elem.description}</li>



                 <span id="detaillist${index}" class="listdetails" >
                  <li class="list-group-item" >Brand: ${elem.brand}</li>
                  <li class="list-group-item">Discount Percentage:${elem.discountPercentage}</li>
                  <li class="list-group-item">Rating:  ${elem.rating}</li>
                  <li class="list-group-item">Stock: ${elem.stock}</li>
                  <li class="list-group-item">price: ${elem.price}</li>

                  </span>
                  <li class="list-group-item"> <button type="button" class="btn btn-danger w-100" onclick="deletion(${index})" >Delete</button> </li>
                  <li class="list-group-item"> <button type="button" class="btn btn-info w-100" onclick="updation(${index})" >Update</button> </li>
                


                </ul>
                <span class="spanupdate" id=update${index}> <div class="updatecard col-md-3 h-auto bg-warning text-danger d-flex ">
                <ul>
                  <li class=" d-flex flex-column">
                  <label for="title1"> A title</label>
                    <input type="text" name="text" id="title1${index}"></li>
                  <li class=" d-flex flex-column"><label for="imageurl1">Any image URL</label>
                    <input type="text" name="text" id="imageurl1${index}">
                 </li>
                  <li class=" d-flex flex-column">
                    <label for="discountper1">Discount percentage</label>
                        <input type="text" name="text" id="discountper1${index}"></li>
                  <li class=" d-flex flex-column"><label for="reating1">Rating</label>
                    <input type="text" name="text" id="rating1${index}"></li>
                  <li class=" d-flex flex-column"><label for="stock1">Stock</label>
                    <input type="text" name="text" id="stock1${index}"></li>
                  <li class=" d-flex flex-column">
                
                    <label for="price1">Price</label>
                        <input type="text" name="text" id="price1">
                    </li>
                    <li>
                    <button type="button" class="btn btn-info" >Go</button> 
                    </li>
                </ul>
                    
                  
                
                
                
                
                
                  </div>
                            </span>
            </div>
    
          
            <div class="card "id=card${index}  >
              <h5 class="card-title "> ${elem.title}</h5>
                <div class="card-body ncardbody">


                    <div class="inner">
                        <img src="${elem.images[2]}"
                            class="card-img-top" alt="loading" style="    width: 18rem !important;
                        height: 17rem;">

                    </div>

                </div>
                <ul class="list-group list-group-flush">
                 <li class="list-group-item">Brand:${elem.description} </li>
                 
                 <span id="detaillist${index}" class="listdetails" >
                  <li class="list-group-item">Brand:${elem.brand} </li>
                  <li class="list-group-item">Discount Percentage:${elem.discountPercentage}</li>
                  <li class="list-group-item">Rating:  ${elem.rating}</li>
                  <li class="list-group-item">Stock: ${elem.stock}</li>
                  <li class="list-group-item">price: ${elem.price}</li>
                  </span>
                  <li class="list-group-item"> <button type="button" class="btn btn-danger w-100" onclick="deletion(${index})" >Delete</button> </li>
                  <li class="list-group-item"> <button type="button" class="btn btn-info w-100" onclick="updation(${index})" >Update</button> </li>
                 

                </ul>
                <span class="spanupdate" id=update${index}> > <div class="updatecard col-md-3 h-auto bg-warning text-danger d-flex ">
                <ul>
                  <li class=" d-flex flex-column"><label for="title1"> A title</label>
                    <input type="text" name="text" id="title1"></li>
                  <li class=" d-flex flex-column"><label for="imageurl1">Any image URL</label>
                    <input type="text" name="text" id="imageurl1">
                 </li>
                  <li class=" d-flex flex-column">
                    <label for="discountper1">Discount percentage</label>
                        <input type="text" name="text" id="discountper1"></li>
                  <li class=" d-flex flex-column"><label for="reating1">Rating</label>
                    <input type="text" name="text" id="rating1"></li>
                  <li class=" d-flex flex-column"><label for="stock1">Stock</label>
                    <input type="text" name="text" id="stock1"></li>
                  <li class=" d-flex flex-column">
                
                    <label for="price1">Price</label>
                        <input type="text" name="text" id="price1">
                    </li>
                </ul>
                    
                  
                
                
                
                
                
                  </div>
                            </span>
            </div>
          
            <div class="card "id=card${index}  >
                <h5 class="card-title ">${elem.title}</h5>
              
                <div class="card-body ncardbody">


                    <div class="inner">
                        <img src="${elem.images[3]}"
                            class="card-img-top" alt="loading" ">

                    </div>

                </div>
                <ul class="list-group list-group-flush">
                 <li class="list-group-item">Brand: ${elem.description}</li>
                    <span id="detaillist${index}" class="listdetails" >
                  <li class="list-group-item">Brand: ${elem.brand}</li>
                  <li class="list-group-item">Discount Percentage:${elem.discountPercentage}</li>
                  <li class="list-group-item">Rating:  ${elem.rating}</li>
                  <li class="list-group-item">Stock: ${elem.stock}</li>
                  <li class="list-group-item">price: ${elem.price}</li>
                   
                  </span>
                  <li class="list-group-item"> <button type="button" class="btn btn-danger w-100" onclick="deletion(${index})" >Delete</button> </li>
                  <li class="list-group-item"> <button type="button" class="btn btn-info w-100" onclick="updation(${index})" >Update</button> </li>
                  <li class="list-group-item">  <button type="button" class="btn btn-muted w-100  " onclick="productdetails(${index})">Details</button>   </li>
              
                </ul>
                <span class="spanupdate" id=update${index}> >
                <div class="updatecard col-md-3 h-auto bg-warning text-danger d-flex ">
   <ul>
     <li class=" d-flex flex-column"><label for="title1"> A title</label>
       <input type="text" name="text" id="title1"></li>
     <li class=" d-flex flex-column"><label for="imageurl1">Any image URL</label>
       <input type="text" name="text" id="imageurl1">
    </li>
     <li class=" d-flex flex-column">
       <label for="discountper1">Discount percentage</label>
           <input type="text" name="text" id="discountper1"></li>
     <li class=" d-flex flex-column"><label for="reating1">Rating</label>
       <input type="text" name="text" id="rating1"></li>
     <li class=" d-flex flex-column"><label for="stock1">Stock</label>
       <input type="text" name="text" id="stock1"></li>
     <li class=" d-flex flex-column">
   
       <label for="price1">Price</label>
           <input type="text" name="text" id="price1">
       </li>
   </ul>
       
     
   
   
   
   
   
     </div>
               </span>
            </div>


          
        </div>

    
    `
   

    document.getAnimations("section2").innerHTML="";
  document.getElementById("section2").innerHTML= mappeddata;
  })
//mapping ends here


})


fetch('https://dummyjson.com/products/categories')
.then((response)=>{
    return response.json();
}).then((data2)=>{
    //sing the shole data inside the object
    object2=data2;
    console.log(object2);

    //making an empty variable to to save the categories inside it
    
    let categories="";
    data2.map(function(events){
categories+=`
<li class="d-flex justify-content-between margin-top-4 margin-left-4 border-warning">
 ${events} <i class="fa-solid fa-angle-right"></i>
</li>

`
    
    })
    document.getElementById("catagorieslist").innerHTML=categories;

})


// input specific prody=uct searching

function search(){

    let searchspecific=document.getElementById("inputproduct").value;
  
    fetch(`https://dummyjson.com/products/category/${searchspecific}`).then((response)=>{

    console.log(searchspecific)
        return response.json();
        }).then((specificdata)=>{
        
            object3=specificdata;
            console.log(object3);
            // here we are making an empty variable where ill will store all the details
            let listproduct="";
            object3.products.map(function(element2){
            listproduct+=`
            
          </div>
            <li class="margin-left-4"> 

            <div class="card " >
              
           
  <div class="carousel-inner">
  
  <img src="${element2.thumbnail}" class="d-block w-100 " style="
  height: 12rem !important;
" alt="loading">
  </div>
 
 
  
</div>
          
              <div class="card-body">
            
                <h5 class="card-title">${element2.title}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">stock : ${element2.stock}</li>
                <li class="list-group-item">Price : ${element2.price}</li>
                <li class="list-group-item">reting : ${element2.rating}</li>
              </ul>
             
            </div>
          </li>
            
            `

            })
       document.getElementById("specificproducts").innerHTML=listproduct;
        })
                    

}

// radio button on click pagination setups
   let radiobutton1= document.getElementById("flexRadioDefault1");
   let radiobutton2= document.getElementById("flexRadioDefault2");

radiobutton1.addEventListener("click",()=>{

    document.getElementById("specificproducts").style.marginLeft="-21rem";
})
radiobutton2.addEventListener("click",()=>{

    document.getElementById("specificproducts").style.marginLeft="0rem";
})

    
//reload setting
// if(document.getElementById("usercustomer").innerText=="")
// {
//     window.location.href="../sign in/Signin.html"
// }
// document.getElementById("usercustomer").innerText==document.getElementById("email").value;
function navbaruserdetails()
{
 let loggedinusername=JSON.parse(localStorage.getItem("testObject")).username;
 let loggedinuserimage=JSON.parse(localStorage.getItem("testObject")).image;

 let loggedinuserfirstname=JSON.parse(localStorage.getItem("testObject")).firstName;

 let loggedinuserlastname=JSON.parse(localStorage.getItem("testObject")).lastName;
 let loggedinuseremail=JSON.parse(localStorage.getItem("testObject")).email;
 let loggedinusergender=JSON.parse(localStorage.getItem("testObject")).gender;
 
 
  let navbaritems="";

  navbaritems=`
  <div class="container-fluid">
  <a class="navbar-brand" href="#"> <img src="${loggedinuserimage}"  alt="loading"> </a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarScroll">
    <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li class="nav-item" id="usercustomer">
      
      </li>
     
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Categories
        </a>
        <ul class="dropdown-menu  overflow-auto text-white bg-dark left-padding-5 height-13"id="catagorieslist"  >
          
        </ul>
      </li>
      </ul>
  
      <ul class=" d-flex justify-content-between gap-5">
      <li>
<button type="button" class="btn btn-success " id="logoutbtn" onclick="logout()">Log out</button>
</li>
      <li>
       <h5 class="text-muted"> User Email  </h5> ${loggedinuseremail}
      </li>
      <li>
      <h5 class="text-muted"> User Name  </h5> ${loggedinusername}
    </li>
    <li>
    <h5 class="text-muted"> User First name  </h5>  ${loggedinuserfirstname}
  </li>
  <li>
  <h5 class="text-muted"> User Last Name  </h5> ${loggedinuserlastname}
</li>
<li>
<h5 class="text-muted"> User Gender  </h5>${loggedinusergender}
</li>


      </ul>
    
  
  </div>
</div>`

document.getElementById("navigationbar").innerHTML=navbaritems;
}
navbaruserdetails();
// function for deleting the card


function deletion(value)
{
  document.getElementById(`card${value}`).style.display="none";
}

function updation(value)
{
  console.log("hello")
  // there is an error
  // document.getElementById(`update${value}`).style.display="block";

  // document.getElementById("canclelogo").addEventListener("click",()=>{
  //   document.getElementById(`update${value}`).style.display="none";
  // })

}
function productdetails(value)
{
  document.getElementById(`detaillist${value}`).style.display="block";
}
function logout()
{
  localStorage.clear();
  window.location.href="../sign in/Signin.html"
}