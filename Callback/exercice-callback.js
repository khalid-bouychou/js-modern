function randomize(min , max ,callback){
 
   return callback ( Math.ceil( 
       
     Math.random()*(min-max) +max 
) )
;
}

function multipfour( randomNumber ){
 
   console.log(`Random number is ${randomNumber}`)

    return randomNumber * 4

}


function divfive( randomNumber ){
  
  console.log(`Random number is ${randomNumber}`)

    return randomNumber / 5

}



const res= randomize(1, 7 ,multipfour)

console.log( `Resulte is : ${res}`)