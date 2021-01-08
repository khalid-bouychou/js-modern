let time = document.getElementById("date") ;
function getdate() {
    let d = new Date();
    let res = '';
   res +=  `${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()} `;
   time.innerHTML=res
  
  }


setInterval(getdate ,1000)



