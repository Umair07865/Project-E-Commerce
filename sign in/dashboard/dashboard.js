
// initializing variables
// making the empty object to store all the data inside it
let object1={};

//fetching the data of the products
fetch('https://dummyjson.com/products')
.then((response)=>{

    return  response.json();
}).then((data)=>{

    object1=data;
    console.log(object1);
//making another empty variable to store the data after mapping

let mappeddata="";
 

  object1.products.map(function(elem){
   // pasting the whole html insde the back tiddle codes 
    mappeddata+=`
    <h2 class="text-center bg-muted">${elem.category}</h2>

        <div class="card-group text-muted" >


            <div class="card nncard ">
                <h5 class="card-title "> ${elem.title}</h5>
                <div class="card-body ncardbody">


                    <div class="inner">
                        <img src="${elem.images[0]}"
                            class="card-img-top" alt="loading" ">

                    </div>

                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Brand:${elem.brand} </li>
                  <li class="list-group-item">Discount Percentage:${elem.discountPercentage}</li>
                  <li class="list-group-item">Rating:  ${elem.rating}</li>
                  <li class="list-group-item">Stock: ${elem.stock}</li>
                  <li class="list-group-item">price: ${elem.price}</li>
               
                </ul>
             
            </div>
            <div class="card nncard">
              <h5 class="card-title ">${elem.title}</h5>
                <div class="card-body ncardbody">


                    <div class="inner">
                        <img src="${elem.images[1]}"
                            class="card-img-top" alt="loading" ">

                    </div>

                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Brand: ${elem.brand}</li>
                  <li class="list-group-item">Discount Percentage:${elem.discountPercentage}</li>
                  <li class="list-group-item">Rating:  ${elem.rating}</li>
                  <li class="list-group-item">Stock: ${elem.stock}</li>
                  <li class="list-group-item">price: ${elem.price}</li>
               
                </ul>
            </div>
            <div class="card nncard">
              <h5 class="card-title "> ${elem.title}</h5>
                <div class="card-body ncardbody">


                    <div class="inner">
                        <img src="${elem.images[2]}"
                            class="card-img-top" alt= "loading">

                    </div>

                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Brand:${elem.brand} </li>
                  <li class="list-group-item">Discount Percentage:${elem.discountPercentage}</li>
                  <li class="list-group-item">Rating:  ${elem.rating}</li>
                  <li class="list-group-item">Stock: ${elem.stock}</li>
                  <li class="list-group-item">price: ${elem.price}</li>
               
                </ul>
            </div>
            <div class="card nncard">
                <h5 class="card-title ">${elem.title}</h5>
              
                <div class="card-body ncardbody">


                    <div class="inner">
                        <img src="${elem.images[3]}"
                            class="card-img-top" alt="loading" ">

                    </div>

                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Brand: ${elem.brand}</li>
                  <li class="list-group-item">Discount Percentage:${elem.discountPercentage}</li>
                  <li class="list-group-item">Rating:  ${elem.rating}</li>
                  <li class="list-group-item">Stock: ${elem.stock}</li>
                  <li class="list-group-item">price: ${elem.price}</li>
               
                </ul>
            </div>


        </div>

    
    `

  document.getElementById("section2").innerHTML= mappeddata;
  })
//mapping ends here


}).catch((error)=>{
    console.error("error: " +error.message)
})

// from here we are fetching the cotegories

// fething the categories of  different products from the given api


//first lets declare a variable to target the object 

let object2={};
// the reason of making this object is to track the data easily in the console

let url="https://dummyjson.com/products/categories"
fetch(url).then((response)=>{
    return response.json();
}).then((data2)=>{

    object2=data2;
    console.log(" all categories data");
    console.log(object2);

    //making another empty variable to store the data after mapping
    let mappeddata2="";
     // using maping method to evaluate all the nessacerry data into Html

  object2.map(function(element){

    mappeddata2+=`
   
    <ul>
      <li class="d-flex justify-content-between border-top padding-1 h-2"> ${element} <i class="fa-solid fa-angle-right  "></i></li>
    </ul>
    
    `
  document.querySelector("#innerspan").innerHTML=mappeddata2;

  });

}).catch((error)=>{
    console.error("error: " +error.message)
})
            


