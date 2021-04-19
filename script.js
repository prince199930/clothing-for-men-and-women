// const fe = async()=>{
//     const data = await fetch("https://api.github.com/users/sahil199926")
//     const productList = await data.json()
//     console.log(productList)
// }
// fe()

for (var pos=0; pos<5; pos++){
    var mycon = document.getElementById("row1");
    var child = document.createElement("div");
    child.style.display = "grid"
    mycon.style.gridGap = "2%"
    child.style.boxShadow = "rgb(136 136 136) 2px 2px 7px 0px"
    child.onmouseover = (event)=>event.target.parentNode.style.boxShadow="rgb(136 136 136) 2px 2px 7px 2px"
    child.onmouseout = (event)=>event.target.parentNode.style.boxShadow="rgb(136 136 136) 2px 2px 7px 0px"
    var child2 = document.createElement("img")
    child2.src = productList[pos].preview
    var child_div = document.createElement("div");
    var child_desc = document.createElement("h2").appendChild(document.createTextNode(productList[pos].name));
    var child_brand = document.createElement("p").appendChild(document.createTextNode(productList[pos].brand));
    var child_price = document.createElement("p").appendChild(document.createTextNode(productList[pos].price));
    child_div.appendChild(child_desc)
    child_div.appendChild(document.createElement("br"))
    child_div.appendChild(child_brand)
    child_div.appendChild(document.createElement("br"))
    child_div.appendChild(child_price)
    child_div.appendChild(document.createElement("br"))
    child2.style.width = "100%"
    // child2.style.border = "2px solid brown"  
    child.appendChild(child2);
    child.appendChild(child_div)
    mycon.appendChild(child);      
  }

  for (var pos=5; pos<11; pos++){
    var mycon = document.getElementById("row2");
    var child = document.createElement("div");
    child.style.display = "grid"
    mycon.style.gridGap = "2%"
    child.style.boxShadow = "rgb(136 136 136) 2px 2px 7px 0px"
    child.onmouseover = (event)=>event.target.parentNode.style.boxShadow="rgb(136 136 136) 2px 2px 7px 2px"
    child.onmouseout = (event)=>event.target.parentNode.style.boxShadow="rgb(136 136 136) 2px 2px 7px 0px"
    var child2 = document.createElement("img")
    child2.src = productList[pos].preview
    var child_div = document.createElement("div");
    var child_desc = document.createElement("h2").appendChild(document.createTextNode(productList[pos].name));
    var child_brand = document.createElement("p").appendChild(document.createTextNode(productList[pos].brand));
    var child_price = document.createElement("p").appendChild(document.createTextNode(productList[pos].price));
    child_div.appendChild(child_desc)
    child_div.appendChild(document.createElement("br"))
    child_div.appendChild(child_brand)
    child_div.appendChild(document.createElement("br"))
    child_div.appendChild(child_price)
    child_div.appendChild(document.createElement("br"))
    child2.style.width = "100%"
    child.appendChild(child2);
    child.appendChild(child_div)
    mycon.appendChild(child);      
  }

 







