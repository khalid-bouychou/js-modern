

function getData(method, url){
    return new Promise((resolve ,reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.onload = function(){
        if (this.status >=200 && this.status < 300) {
            resolve(xhr.response);
        } else {
            reject( ({
                status : this.status ,
                statutsText : xhr.statusText
            }));
        }
        };
        xhr.onerror =function(){
            reject( ({
                status : this.status ,
                statutsText : xhr.statusText
            }));
        }
        xhr.send()
    });

}

getData('GET','https://jsonplaceholder.typicode.com/todos')
.then((data)=>{
    let todos = JSON.parse(data)
    console.log(todos)
    let content ='';
    for (const todo of todos) {
        content += `
            <li>
                <h2>Title     : ${todo.title}</h2>
                <p> Complited : ${todo.completed} </p>
            </li>
        `
    }
    document.querySelector('ul').innerHTML=content;
})
.catch((err)=> console.log(err))