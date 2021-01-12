//your code here!
document.addEventListener('DOMContentLoaded',function(){
    document.querySelector("#button-compute").onclick = (e)=>{
            const minusstdID = document.querySelector("#input-number").value
            let result = document.querySelector("#compute-result")
            result.innerHTML = 620610771 -  Number(minusstdID)
            console.log(result)
            return 0
        }
    
    document.getElementById("button-create-table").onclick = () =>{
        let table = document.getElementById("table")
        const row = document.createElement("tr")
        let p = document.createElement("p")
        const r = document.getElementById('input-row').value
        const c = document.getElementById('input-col').value
        console.log(r +" " +c)
        for (let i = 0 ; i < r ;i++){
            for(let j = 0 ; j < c ;j++){
                const col = document.createElement('td')
                if(i + j % 2 == 0){p.innerHTML = i+j+1}
                else {p.innerHTML = "-"}
                col.append(p)
            }
        }
    }
})
