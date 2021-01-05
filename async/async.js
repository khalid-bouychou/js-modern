/* ------------------CALLBACK -------------------------
 problem callbaks c pas la bon pratique 
  c neasted function and le maintenance ici c est difficile parce que le problem il va chargee 
 and la bon solustion cest les promises 

 -----------------------------------
 console.log("0"); //1
 //  cette methode prendre 2 sec 
 getUser(23, (user) =>{
     console.log(user);
    }) 
    console.log("1");//2
    console.log("2");//3
    
 function getUser(id , callback ) {
     setTimeout(() => {
         console.log("return data");//4
         callback({ id:id, name:"khalid bouychou"}) 
    }, 2000);
}
result => 0 , 1 , 2 ,return data

*/

//----------------------PROMISES------------------------
/* 
function getUser(id) {
    
    return new Promise( (resolve , reject) => {
        let status =true 
        setTimeout(() => {
            if (status) { resolve( { id:id , name:"khalid bouychou"})
            
        }else{reject("user not found") }
        
    }
    , 2000) 
})

}
function getProducts(userid) {
    
    return new Promise( (resolve , reject) => {
        let status =true 
        setTimeout(() => {
            if (status) { resolve( ['p1' , 'p2' , 'p3'])
            
        }else{reject("Products not found") }
        
     }
     , 2000) 
    })
}

getUser(23)
.then( user => {
    console.log(user)
    // call fucntion getProduct(userid) t get list produit
    return getProducts(user.id)
})
// then() for products 
.then( products => console.log(products))
.catch( err => console.warn(err))
*/
//----------------------Async & Await -----------------

/*
function getUser(id) {
    
    return new Promise( (resolve , reject) => {
        let status =true 
        setTimeout(() => {
            if (status) { resolve( { id:id , name:"khalid bouychou"})
            
        }else{reject("user not found") }
        
    }
    , 2000) 
})

}
function getProducts(userid) {
    
    return new Promise( (resolve , reject) => {
        let status =true 
        setTimeout(() => {
            if (status) { resolve( ['p1' , 'p2' , 'p3'])
            
        }else{reject("Products not found") }
        
    }
    , 2000) 
})
}
run()
async function run() {
    console.log("before");
    
    try {
        let user =  await getUser(23)
        console.log( "user infos",user);
        const products = await getProducts(user.id) 
        console.log(` List Prducts : ${products}`);
    } catch (error) {
        console.error(error);
    }
    
    console.log("between")
    console.log("after");
}

*/
//-----------------------FETCH WEB API ------------- 
/*
// fetch api 
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(posts=> console.log(posts))
.catch(err => console.log(err))

*/
