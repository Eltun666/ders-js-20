window.onload = () => {
getApi()    
}

let boxx = document.getElementById("boxx")

let heart =document.getElementById("heart")

async function getApi() {
    boxx.innerHTML=""
     try {
     let wis = JSON.parse(localStorage.getItem("wishlist"))
      wis.forEach((item) => {
        boxx.innerHTML += `
       <div class="inbox">
                        <div class="imgbox">
                            <img src="${item.image}" alt="">
                        </div>
                        <p>${item.title}</p>
                        <div class="text">
                            <div class="money">
                                <p>$${item.price}</p>
                            </div>
                            <div class="boxs">
                                <div class="box">
                                    <i onclick="deletefun(${item.id})" class="fa-regular fa-rectangle-xmark"></i>
                                </div>
                            </div>
                        </div>
                    </div>
      `  
      
      });

    //   heart.innerHTML=`<span><i class="fa-solid fa-heart"></i></span>[ ${wis.length} ]` 
      
       
     } catch (error) {
       console.log(error);     
     } 
 }

 getApi()


 async function deletefun(id) {
    let wis = JSON.parse(localStorage.getItem("wishlist"))
    let newwis = []
    if(id){
        wis.filter((item) => item.id != id ? newwis.push(item) : null)
        localStorage.setItem("wishlist",JSON.stringify(newwis))
        getApi()  
    }
    heart.innerHTML=`<span><i class="fa-solid fa-heart"></i></span>[ ${wis.length} ]`
 }

 deletefun()