const hover_div= document.createElement("div")
const hover_text = document.createElement("p")
hover_text.textContent="Hello World!"
hover_div.style.border="5px,solid,black"
hover_div.style.width="300px"
hover_div.style.padding="10px"
hover_text.style.textAlign="center"
hover_text.style.fontSize="20px"
hover_div.appendChild(hover_text)
hover_div.addEventListener("mouseover",()=>{
    hover_div.style.backgroundColor="yellow"
    hover_text.style.fontWeight="bold"
})
hover_div.addEventListener("mouseover",()=>{
    hover_div.style.backgroundColor="yellow"
    hover_text.style.fontWeight="bold"
})
hover_div.addEventListener("mouseleave",()=>{
    hover_div.style.backgroundColor="white"
    hover_text.style.fontWeight="normal"
})
document.body.appendChild(hover_div)