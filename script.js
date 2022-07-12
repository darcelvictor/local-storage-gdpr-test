
    window.onload = () =>{
   
    const printItemInDom = (items) =>{
        const list = document.querySelector("#list");
        list.innerHTML=items;
    }

    const loopDataLocalStorage = ()=>{
        let data ="";
        for(let i = 0; i< localStorage.length; i++){
            data += "<li>";
            data += localStorage.getItem(i);
            data += "</li>";
        }
        return data;
    }


    button.onclick=()=>{
        if(item.value!=""){
            localStorage.setItem(localStorage.length,item.value);
            item.value="";
            printItemInDom(loopDataLocalStorage());
        }
        else {
            alert("Item's field is empty")
        }
    }

    clear.onclick=()=>{
        localStorage.clear();
        printItemInDom("");
    }

    printItemInDom(loopDataLocalStorage());
    console.log("JS is load");
};