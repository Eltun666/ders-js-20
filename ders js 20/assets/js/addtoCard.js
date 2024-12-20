window.onload = () => {
    let card = JSON.parse(localStorage.getItem("card"))
    
}

let cardbox = document.getElementById("cardbox")

async function getApi() {
   cardbox.innerHTML=""
    try {
    let card = JSON.parse(localStorage.getItem("card"))
     card.forEach((item) => {
     cardbox.innerHTML += `
        <div class="inbox">
                        <div class="closebox">
                            <i onclick="deletefun(${item.id})" class="fa-regular fa-rectangle-xmark"></i>
                        </div>
                        <div class="imgbox">
                            <img src="${item.image}" alt="">
                        </div>
                        <div class="producnamebox">
                            <h5>${item.title}</h5>
                            <p>${item.description}</p>
                        </div>
                        <div class="pricebox">
                            <p>$ ${item.price}</p>
                        </div>
                        <div class="quantitybox">
                            <p>1</p>
                        </div>  
                        <div class="totalbox pricebox">
                            <p>$ 4.90</p>
                        </div>
                    </div>
      `

     });
     
      
    } catch (error) {
      console.log(error);     
    } finally{
      loading = false;
    }
}
getApi()

  
  
  
async function deletefun(id) {
    let card = JSON.parse(localStorage.getItem("card"))
    let newcard = []
    if(id){
        card.filter((item) => item.id != id ? newcard.push(item) : null)
        localStorage.setItem("card",JSON.stringify(newcard))
        getApi()  
    }
    // cardbox.innerHTML=`<span><i class="fa-solid fa-heart"></i></span>[ ${card.length} ]`
}

 deletefun()