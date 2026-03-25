const tooldiv =document.createElement("div")
const inputtext = document.createElement("textarea")
const font_type = document.createElement("select")
const font_size = document.createElement("select")
const italic = document.createElement("input")
const bold = document.createElement("input")
const underline = document.createElement("input")
const label_italic = document.createElement("label")
const label_bold = document.createElement("label")
const label_underline = document.createElement("label")
const font_type_arr =["Arial","Times New Roman","Georgia","serif","sans-serif"]
const font_size_arr= ["12","16","18","20","25","30","35","40"]
italic.setAttribute("type","checkbox")
bold.setAttribute("type","checkbox")
underline.setAttribute("type","checkbox")
inputtext.style.width="500px"
inputtext.style.height="200px"

for(let i=0;i<font_type_arr.length;i++){
    const option = document.createElement("option")
    option.textContent=font_type_arr[i]
    font_type.appendChild(option)
}
for(let i=0;i<font_size_arr.length;i++){
    const option = document.createElement("option")
    option.textContent=font_size_arr[i]
    font_size.appendChild(option)
}

label_bold.textContent="bold"
label_bold.appendChild(bold)
label_underline.textContent="underline"
label_underline.appendChild(underline)
label_italic.textContent="italic"
label_italic.appendChild(italic)
tooldiv.appendChild(font_type)
tooldiv.appendChild(font_size)
tooldiv.appendChild(label_italic)
tooldiv.appendChild(label_bold)
tooldiv.appendChild(label_underline)
font_type.addEventListener("change",(e)=>{
   inputtext.style.fontFamily=e.target.value 
})
font_size.addEventListener("change",(e)=>{
   inputtext.style.fontSize=e.target.value+"px" 
})
bold.addEventListener("change",(e)=>{
   if(e.target.checked===true){
    inputtext.style.fontWeight="bold"
   }
   else{
    inputtext.style.fontWeight="normal"
   }
})
italic.addEventListener("change",(e)=>{
   if(e.target.checked===true){
    inputtext.style.fontStyle="italic"
   }
   else{
    inputtext.style.fontStyle="normal"
   }
})
underline.addEventListener("change",(e)=>{
   if(e.target.checked===true){
    inputtext.style.textDecoration="underline"
   }
   else{
    inputtext.style.fontWeight="normal"
   }
})
document.body.appendChild(tooldiv)
document.body.appendChild(inputtext)