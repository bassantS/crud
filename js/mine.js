// el inputs Kolha
var pNameInput = document.getElementById("pName");
var pPriceInput = document.getElementById("pPrice");
var pCatInput = document.getElementById("pCat");
var pDescInput = document.getElementById("pDesc");
var cartona ; // undefined

if( localStorage.getItem("hamada") == null  )
{
    cartona = [];
}
else
{
    cartona =  JSON.parse(   localStorage.getItem("hamada")  )  ; // string
    displayProducts()
}
//===========================add product ===============
//click add , call display , call clearInputs
function addProduct()
{
    // object
    var oneProduct = 
    {
        pName : pNameInput.value ,
        pPrice : pPriceInput.value,
        pCat : pCatInput.value,
        pDesc : pDescInput.value,
    }
    //object Data type
   cartona.push(oneProduct); // LG , Toshiba


   // 1-
   localStorage.setItem("hamada" , JSON.stringify(cartona) )

   // display
   displayProducts();

   //clear ll inputs
   clearInputs()
   
    
}
// display
function displayProducts()
{
    var hasalah =``;
   for( var i =0 ; i < cartona.length ;i++)
   {
       hasalah += `<tr>

       <td>${i}</td>
       <td>${cartona[i].pName}</td>
       <td>${cartona[i].pPrice}</td>
       <td>${cartona[i].pCat}</td>
       <td>${cartona[i].pDesc}</td>
       <td>
            <button class="btn btn-outline-primary" onclick=retrieveProduct(${i});>Update</button>
       </td>
       <td>
            <button class="btn btn-outline-warning" onclick=delProduct(${i});>Delete</button>
       </td>

       </tr>`
   }
   document.getElementById("tBody").innerHTML = hasalah;
}
function clearInputs()
{
    pNameInput.value = "";
   pPriceInput.value = "";
   pCatInput.value = "";
   pDescInput.value = "";
}
function delProduct(pIndex) {
    cartona.splice(pIndex,1);
    // display
    displayProducts();  
   localStorage.setItem("hamada" , JSON.stringify(cartona) );
}
function retrieveProduct(pIndex) {
    pNameInput.value=cartona[pIndex].pName;
    pPriceInput.value=cartona[pIndex].pPrice;
    pCatInput.value=cartona[pIndex].pCat;
    pDescInput.value=cartona[pIndex].pDesc;
    document.getElementById("buttonContainer").innerHTML=`
    <button onclick="updateProduct()" class="btn btn-warning text-white">Update Product</button>
    `
}
function updateProduct(pIndex){
    cartona[pIndex].pName=pNameInput.value;
    cartona[pIndex].pPrice=pPriceInput.value;
    cartona[pIndex].pCat=pCatInput.value;
    cartona[pIndex].pDesc=pDescInput.value;
    displayProducts();
    localStorage.setItem("hamada" , JSON.stringify(cartona) );
    clearInputs();
    document.getElementById("buttonContainer").innerHTML=`
    <button onclick="addProduct()" class="btn btn-info text-white">Add Product</button>
    `
}

function searchProduct(pIndex) {
    
}




















