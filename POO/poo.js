/*
                Classe & Objects
                class Car {
            
                    //Attrubuits
                    constructor(){
                        this.marque ="exemple";
                        this.hp = 1;
                        this.speedMax = 200
                    }
                    //Methods
                }
                const mercedes = new Car()
                console.log(mercedes);
*/


/*
                Constructor & Methods
                class Car {
                
                    //Attrubuits
                    constructor(marque , hp , speed){
                        this.marque =marque;
                        this.hp = hp;
                        this.speedMax = speed
                    }
                    //Methods
                    diagnostic(){
                        return ` this car has ${this.hp} HP , Max Speed ${this.speed}`;
                    }
                    
                }
                const mercedes = new Car("mercedes" , 500 , 300)
                const audi = new Car("audi" , 200 , 250)
                console.log(mercedes.diagnostic() );
                console.log(audi);
*/

/*
                Heritage
                class Car {
                
                    //Attrubuits
                    constructor(marque , hp , speed){
                        this.marque =marque;
                        this.hp = hp;
                        this.speedMax = speed
                    }
                    //Methods
                    diagnostic(){
                        return ` this car has ${this.hp} HP , Max Speed ${this.speed}`;
                    }
                    
                }
                
                class SuperCar extends Car{
                    constructor(marque,hp,speed,spoiler ,diffuser  ){
                        super(marque,hp,speed) ;
                        this.spoiler = spoiler ; 
                        this.diffuser = diffuser;
                      }
                }
                const mercedes = new Car("mercedes" , 500 , 300)
                const audi = new SuperCar("audi" , 200 , 250 , true , "carbon fiber")
                console.log(mercedes );
                console.log(audi);
*/
/*
                Polymorphisme
*/

class Car {

    //Attrubuits
    constructor(marque , hp , speed){
        this.marque =marque;
        this.hp = hp;
        this.speedMax = speed
    }
    //Methods
    diagnostic(){
        return ` this car has ${this.hp} HP , Max Speed ${this.speed}`;
    }
    
}

class SuperCar extends Car{
    constructor(marque,hp,speed,spoiler ,diffuser  ){
        super(marque,hp,speed) ;
        this.spoiler = spoiler ; 
        this.diffuser = diffuser;
      }
      //redifinistion
      diagnostic(){
        return this;
    }
}
const mercedes = new Car("mercedes" , 500 , 300)
const audi = new SuperCar("audi" , 200 , 250 , true , "carbon fiber")
// console.log(mercedes );
console.log(audi.diagnostic());