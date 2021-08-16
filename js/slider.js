let artsliderItemsWrap = document.querySelectorAll('.artslider__item-wrap');

for(i=0; i < artsliderItemsWrap.length; i++){

	artsliderItemsWrap[i].onclick = function(){
        
        for(let x = 0; x < artsliderItemsWrap.length; x++){
            artsliderItemsWrap[x].classList.remove('artslider__img_active')
          }
       
        this.classList.toggle("artslider__img_active");
        
		
	}
    
   
}
