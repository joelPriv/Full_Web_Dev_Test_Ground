
let obj={
    name:'john',
    face:'black',
    Walk:function(element){
        element.textContent+="Walk Slave";
    }
}

let objH1=document.querySelector("h1");
let newp=document.createElement("p");
    newp.textContent=obj.name+obj.face;
    obj.Walk(newp);
objH1.appendChild(newp);
