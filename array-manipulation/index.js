/*
            Filter ()
            - create new array [] vide
            - boucle sur les element du array 
            - and  excute arrow function ()=> 
            -  scope on each iteration in array  
            - filter array 
            - then get a new array  filter
            let ages = [ 5 , 25 , 20 ,23 , 10 , 7 , 58]
            console.log( ages.filter((age)=> age >=24 ),ages);

            const users = [
                {name : "basma" , active: true },
                {name : "Walid" , active: false },
                {name : "Khalid" , active: true },
                {name : "Meriem" , active :false },
                {name : "Adanane" , active: true }
            ]
            console.log(
                users.filter((user) => user.name.includes('K') )
            );
*/


/*
            Map ()
            - create a new array vide 
            - bouclee in chaque item on array 
            - do ur logic 
            - map update each item 
            - get value in the same structure (value ,array , bject ...)

            let ages = [ 5 , 25 , 20 ,23 , 10 , 7 , 58]
            let res = ages.map((age)=>  age + 10)
            console.log(res , ages);

            const users = [
                {name : "basma" , active: true },
                {name : "anas" , active: false },
                {name : "Khalid" , active: true },
                {name : "amina" , active :false },
                {name : "soufiane" , active: true }
            ]
            const res = users.map((user) => user.active ? { name: user.name.toUpperCase() , active : user.active } : user ) ;
            console.log(res);
*/


/*
            Reduce ()
            - have a callback (accumulator & current ) value and initialisation to the accumulator to 0 in second param 
            - boucle in array
            - scpe on each item 
            - Do your logic 
            - and get the result

            let ages = [ 5 , 25 , 20 ,23 , 10 , 7 , 58]
            const res = ages.reduce((acc , age ) => {
                return acc + age 
            } , 0)
            console.log(res);
*/


/*
            Find ()
            - boucle on array 
            - and take each item in the array assign it to the param in the arrow fucntion ()=> 
            - do your logic if ur logic returns true then will returns the value 
            
            let ages = [ 5 , 25 , 20 ,23 , 10 , 7 , 58]
            
            const res = ages.find((age) => {
                return   (age > 25)
            } )
            console.log(res);
            
            const users = [
                {name : "basma" , active: true },
                {name : "anas" , active: false },
                {name : "Khalid" , active: true },
                {name : "amina" , active :false },
                {name : "walid" , active: true }
            ]
            const search = 'KHALID'
            const res = users.find((user) => user.name.toLowerCase().includes(search.toLowerCase()))
            console.log(res);
*/
/*
            Sort ()
            -boucle on each itemin array  and compare first item with second item on array
            - and swap the placeses

            //sort the numbers 
            let ages = [ 5 , 2 ,50 ,10 , 7 , 58] 
            let res = ages.sort( (a,b) => a-b)
            console.log(res);
            // sort strings
            let persons =['khalid','meriam' , 'ihssane' , 'anas','adnane']
*/

/*
            CHAIN METHODS ( sort() , Filter() , map() ..)
            
            const users = [
                {name : "basma" , active: true  , note : 20  },
                {name : "anas" , active: false , note : 19 },
                {name : "Khalid" , active: true , note : 9 },
                {name : "amina" , active :false  , note : 10},
                {name : "walid" , active: true , note : 15 }
            ];
            
            const res = users.sort((a,b) => b.note - a.note).filter(user => user.active).map(user => user.name)
            console.log(res);
*/
