let ved =document.querySelector("#add");
let prakash =document.querySelector("h5");
let check=0;

ved.addEventListener("click",function(){
    if(check==0){
        prakash.innerHTML="Friends"
        prakash.style.color="green"
        ved.innerHTML="Remove Friends"
        check=1
    }
    else{
        prakash.innerHTML="Stranger"
        prakash.style.color="red"
        ved.innerHTML="Add Friends"
        check=0
    }
})
 
