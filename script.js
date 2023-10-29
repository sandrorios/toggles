let elements = document.querySelectorAll('.text');

for(element of elements){
    element.addEventListener('click', function(){
        if(!this.dataset.clicked){
            this.setAttribute('data-clicked', 'true');
            this.style.background = '#ccc';
            this.style.color = '#000'
        }else{
            this.removeAttribute('data-clicked');
            this.removeAttribute('style');
        }
    })
    // addIcon();
}


function addIcon(){
    let item = document.querySelectorAll('.text');
   let button = createButton('remove-item text-red');
  item.forEach((item) =>{
    item.appendChild(button);
  })

   
//   for(i = 0; i < item.length; i++){
//    icon += item[i];
//   }
   
  
  // console.log(item)
  
  console.log(item)
}

function createButton(classes){
    let button = document.createElement('button');
    button.className = classes;
    let icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

function createIcon(classes){
    let icon = document.createElement('i');
    icon.className = classes;
    console.log(icon)
    return icon;
}

