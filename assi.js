const url = 'https//jsonplaceholder.typicode.com/posts'

function fetchData(){

    try{

        fetch(url).then((response)=>response.json()).then((data)=>console.log(data))

    }catch(error){

        console.log(error)

    }

}

fetchData();
