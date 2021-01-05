console.log(" 0 ");


console.log(" 1 ");
console.log(" 2 ");

const user =  await getInfos(10);
async function getInfos(id){
	setTimeout( ()=>{
    console.log('funct executed')
    return { id:id , name: "khalid bouychou"}
  }
  ,2000);

}

console.log(" 3 ");
console.log(user);