
 function appendingindashboard()
{
  document.getElementById("loader").style.display="none"
 
let appendindashbord={};

//fetching the data of the products
 fetch('https://dummyjson.com/products?_start=20&_limit=30')
.then((response)=>{
    
    
    return  response.json();
})
.then((data)=>{
   
    
  
    appendindashbord=data;
    console.log(appendindashbord);
//making another empty variable to store the data after mapping

let mappeddata="";
  // using maping method to evaluate all the nessacerry data into Html

  appendindashbord.products.map(function(elem,index){
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
   

    document.getElementById("section2").innerHTML="";
   document.getElementById("section2").innerHTML= mappeddata;
 
  })
//mapping ends here


}).catch((err)=>{
    alert("error : " +err.message)
})
}

