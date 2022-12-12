const filterBtn = document.querySelector(".filter-buttons").children
let objects = document.querySelector("#recipes").children;
 
for(let i = 0; i < filterBtn.length; i++){

    filterBtn[i].addEventListener("click", function(){
        for(let j = 0; j < filterBtn.length; j++){
            filterBtn[j].classList.remove('active');
        }
        this.classList.add('active');
        let dataFilter = this.getAttribute('data-filter');
        
        for(let k = 0; k < objects.length; k++){
            let dataItems = objects[k].getAttribute("data-item").split("+")
            objects[k].style.display = 'none';
                
            if( dataItems.includes(dataFilter) == true){
                console.log(dataItems.includes(dataFilter))
                objects[k].style.display = 'inline-block';
            }
            if (dataFilter == "all"){
                objects[k].style.display = 'inline-block'
            }
        }
    }) 
        
}
 