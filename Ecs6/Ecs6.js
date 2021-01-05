/*
        REST OPERATOR 

        const calcul = (...args) =>{
           return args.map((number)=> number * 2)
        } 
         let res= calcul(12,4 , 10 , 2 , 3) 
        console.log(res);
        
        const [ a,b , ...d] = res
        console.log( a , b , d);
*/

/*
                SPREAD OPERATOR

                // pour les tableaux
                let names = ['khalid' , 'anas' , 'amina']
                let people = [...names,'oualid' , 'adnane' ]
                let namesClone =[ ...people]
                // add new element 
                people = [...people,'khadija']
                console.log(people);
                //--- arrays 
                
                const person = {
                    name : "khalid",
                    age : 24
                }
                const personClone = {
                    ...person , 
                    adress :"kenitra"
                }
                console.log(personClone);
*/

/*
          Set()  Class      
          let names = ['khalid' , 'meriem' , 'khawla']
          let myset = new Set(names);
          
          // myset.delete('khalid')
          // console.log(myset.has('khadija'))
          // console.log(myset.size);
*/

/*
                Double Negation
                let person =  {
                    name :"khalid" , 
                    age : 24
                }
                
                let res =  !!person
                console.log(res);
*/


