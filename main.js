
// https://rickandmortyapi.com/api/character

var container = document.getElementById("container");
var search = document.getElementById("search");

function getChar(){
    var searchValue = search.value ;
    loadData(searchValue)
}


async function loadData(searchValue=""){
    var respone = await axios.get('https://rickandmortyapi.com/api/character/?name=rick&=searchValue');
    var data =  respone.data.results;
    container.innerHTML ="";
    data.forEach(function(element){
        var cartitem  = cart(element.image,element.name,element.origin.name,element.status,element.gender)
            container.innerHTML += cartitem;
    });

}



function cart(img, title, origin, gender, status) {
    return `
    <div class="card">
        <div class="img">
            <img src="${img}" alt="">
        </div>
        <div class="name">
            <p>${title}</p>
        </div>
        <div class="name">
            <p>${origin}</p>
        </div>
        <div class="name">
            <p>${gender} || ${status}</p>
        </div>
    </div>
    `;
}
 
loadData();


