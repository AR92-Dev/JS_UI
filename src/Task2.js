const select = document.createElement("select")
const img = document.createElement("img")
const arr = ["jordan","norway","saudi"]
for(let i=0;i<arr.length;i++){
    const option =document.createElement("option")
    option.textContent=arr[i]
    select.appendChild(option)
}
select.addEventListener("change",(e)=>{
   img.setAttribute("src","images/"+e.target.value+".png") 

})
document.body.appendChild(select)
document.body.appendChild(img)