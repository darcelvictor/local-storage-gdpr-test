
    console.log("JS is load");

    const printItemInDom = (items) =>{
        const data = items;
        const list = document.querySelector("#list");
        list.innerHTML=data;
    }


    const loopDataLocalStorage = ()=>{
        let data ="";
        for(let i = 0; i< localStorage.length; i++){
            data += "<br>";
            data += localStorage.getItem(i);
        }
        return data;
    }


    button.onclick=()=>{
        localStorage.setItem(localStorage.length,item.value);
        console.log(item.value);
        printItemInDom(loopDataLocalStorage());
    }

    clear.onclick=()=>{
        localStorage.clear();
        printItemInDom("");
    }