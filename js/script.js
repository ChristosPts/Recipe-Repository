 ArrayOfImages.forEach(function(image,i) {
    var recipeItem = document.createElement('div');
    recipeItem.id = 'recipeItem';
    recipeItem.dataset.name = "item" + i;
    recipeItem.dataset.item = image.dataItem; 

    var recipeImg = document.createElement('img');
    recipeImg.className = "rec_img"
    recipeImg.src = image.recipeImg;

    var recipeNameDiv = document.createElement('div');
    recipeNameDiv.className = "recipeNameDiv"

    var recipeName = document.createElement('h2');
    recipeName.innerText = image.recipeName
    recipeName.className = "recipeName"
    recipeNameDiv.appendChild(recipeName)

    document.getElementById('recipes').appendChild(recipeItem);
    recipeItem.appendChild(recipeImg)
    recipeItem.appendChild(recipeNameDiv)

/* Popup creation */
    var popup = document.createElement('div');
    popup.id = 'popup';
    popup.className = 'popup'
    popup.dataset.target = "item" + i;
    document.getElementById('popupContainer').appendChild(popup);
    
    var popupItems = document.createElement('div');
    popupItems.id = 'popup-items'
    popupItems.className = 'popup-items'
    var closeBtn = document.createElement('span')
    closeBtn.innerText = 'X'
    popupItems.appendChild(closeBtn)
    popup.appendChild(popupItems)
    
    var popimg = document.createElement('img');
    popimg.src = image.recipeImg;
    popupItems.appendChild(popimg)
     
    var popTitle = document.createElement('h1')
    popTitle.className = "Title"
    popTitle.innerText = image.recipeName
    popupItems.appendChild(popTitle)

    //Ingredients
    var ingredientsDiv = document.createElement('div')
    ingredientsDiv.className = "ingredients" 
    popupItems.appendChild(ingredientsDiv)

    var ingDivTitle  = document.createElement('h2')
    ingDivTitle.innerText = "Ingredients"
    ingredientsDiv.appendChild(ingDivTitle)

    // Ingredients part 1
    var section1 = document.createElement('h3');
    section1.id = "section1"
    section1.innerText = image.section1
    ingredientsDiv.appendChild(section1)
    var ul = document.createElement('ul');
    
    ingredientsDiv.appendChild(ul)

    for(let j = 0; j<ArrayOfImages[i].s1Ingredients.length; j++){
    var ulli1 = document.createElement('li');
    ulli1.appendChild(document.createTextNode(ArrayOfImages[i].s1Ingredients[j])); 
    ul.appendChild(ulli1); 
    }  

    // Ingredients part 2
    if(ArrayOfImages[i].s2Ingredients.length > 0){
        var ul2 = document.createElement('ul');
        var section2 = document.createElement('h3');
        section2.innerText = image.section2
        for(let j = 0; j<ArrayOfImages[i].s2Ingredients.length; j++){
            var ulli2 = document.createElement('li');
            ulli2.appendChild(document.createTextNode(ArrayOfImages[i].s2Ingredients[j])); 
            ingredientsDiv.appendChild(section2)
  
            ul2.appendChild(ulli2);
        }
        ingredientsDiv.appendChild(ul2)
    }

    if(ArrayOfImages[i].s3Ingredients.length > 0){
        var ul3 = document.createElement('ul');
        var section3 = document.createElement('h3');
        section3.innerText = image.section3
        for(let j = 0; j<ArrayOfImages[i].s3Ingredients.length; j++){
            var ulli3 = document.createElement('li');
            ulli3.appendChild(document.createTextNode(ArrayOfImages[i].s3Ingredients[j])); 
            ingredientsDiv.appendChild(section3)
  
            ul3.appendChild(ulli3);
        }
        ingredientsDiv.appendChild(ul3)
    }

    //Directions
    var directionsDiv = document.createElement('div')
    directionsDiv.className = "Directions" 
    popupItems.appendChild(directionsDiv)

    var directionsH1 = document.createElement('h2')
    directionsH1.innerText = "Directions"
    directionsDiv.appendChild(directionsH1)

    var ol = document.createElement('ol');
    for(let j = 0; j<ArrayOfImages[i].directions.length; j++){
        var olli = document.createElement('li');
        olli.appendChild(document.createTextNode(ArrayOfImages[i].directions[j])); 
        ol.appendChild(olli); 
    }  
    directionsDiv.appendChild(ol)
 
}); 
