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
        document.getElementById("table")
        const subjCol = document.createElement('td')
        const row = document.createElement("tr")
    }
})
