let data = [];
let searchButton = document.getElementById("searchButton");
let displayBox =  document.getElementById("displayBox");
let resetButton = document.getElementById("resetButton");

searchButton.addEventListener('click',(e)=>{
    let searchKey = document.getElementById("countryName").value;
    if(searchKey){
    fetch(`https://restcountries.eu/rest/v2/name/${searchKey}`).then((response) =>{
        return (response.json())
    
       }).then((item)=>{
           item.map((element)=>{
               data.unshift({name:element.name,flag:element.flag,currency:element.currencies})
               viewIt(data);
           })
           
       }).catch( (err)=> console.log(err))
    }
} 
)

//console.log(data);



function viewIt(data){
    console.log(data);
    data.map((item)=>{
            displayBox.innerHTML=`<h2>${item.name}</h2>`+`<img src=${item.flag} alt="hello">`
                                  +`<p>Currency symbol: ${item.currency[0].code}`  
            console.log(item.currency)
})   
        
        data.length=0;
}

//viewIt();

resetButton.addEventListener('click',(e)=>{
    displayBox.innerHTML = ""; 
    

})