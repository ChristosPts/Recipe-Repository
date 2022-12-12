let getpopup = document.querySelectorAll('#popup'); 
 

document.querySelectorAll('#recipeItem').forEach(image => {
    image.onclick = () => {
        getpopup.forEach(view =>{ 
            console.log(view)
           
            let target = view.getAttribute('data-target')
            let dataName = image.getAttribute('data-name');
           
            if(dataName == target){           
                view.style.animation = "intro 1s";
                document.querySelector("body").style.overflow = 'hidden';
                document.querySelector("body").style.paddingRight = '8px';
                view.style.display = 'block'; 
           
            }
        })
    }
}) 
getpopup.forEach(close =>{
    close.querySelector('.popup span').onclick = () =>{
        close.style.animation = "outro 1s";
       setTimeout(() => { close.style.display = 'none'; }, 800);
       document.querySelector("body").style.overflow = 'visible';
       document.querySelector("body").style.paddingRight = '0px';
   };    
});