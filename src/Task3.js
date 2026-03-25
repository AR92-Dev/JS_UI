const main_div = document.createElement("div")
const div_1 = document.createElement("div")
const div_2 = document.createElement("div")
const div_3 = document.createElement("div")
const title_d1 = document.createElement("div")
const title_d2 = document.createElement("div")
const title_d3 = document.createElement("div")
const title_div1 = document.createElement("h2")
const title_div2 = document.createElement("h2")
const title_div3 = document.createElement("h2")
const par_div1 = document.createElement("p")
const par_div2 = document.createElement("p")
const par_div3 = document.createElement("p")
const link_div1 = document.createElement("a")
const link_div2 = document.createElement("a")
const link_div3 = document.createElement("a")
const link_div1_hide = document.createElement("a")
const link_div2_hide = document.createElement("a")
const link_div3_hide = document.createElement("a")
main_div.style.display="flex"
main_div.style.flexDirection="column"
main_div.appendChild(div_1)
main_div.appendChild(div_2)
main_div.appendChild(div_3)
main_div.style.width="400px"
main_div.style.gap="10px"
main_div.style.border="5px,solid,black"
title_d1.style.display="flex"
title_d2.style.display="flex"
title_d3.style.display="flex"
title_d1.appendChild(title_div1)
title_d1.appendChild(link_div1)
title_d2.appendChild(title_div2)
title_d2.appendChild(link_div2)
title_d3.appendChild(title_div3)
title_d3.appendChild(link_div3)
title_d1.style.backgroundColor="grey"
title_d2.style.backgroundColor="grey"
title_d3.style.backgroundColor="grey"
title_d3.style.gap="30px"
title_d3.style.justifyContent="center"
title_d3.style.alignItems="center"
title_d2.style.gap="30px"
title_d2.style.justifyContent="center"
title_d2.style.alignItems="center"
title_d1.style.gap="30px"
title_d1.style.justifyContent="center"
title_d1.style.alignItems="center"
div_1.appendChild(title_d1)
div_1.appendChild(par_div1)
div_1.appendChild(link_div1_hide)
div_2.appendChild(title_d2)
div_2.appendChild(par_div2)
div_2.appendChild(link_div2_hide)
div_3.appendChild(title_d3)
div_3.appendChild(par_div3)
div_3.appendChild(link_div3_hide)
par_div1.style.display="none"
par_div2.style.display="none"
par_div3.style.display="none"
link_div1_hide.style.display="none"
link_div2_hide.style.display="none"
link_div3_hide.style.display="none"
title_div1.textContent="What is lorem ipsum?"
title_div2.textContent="Why do we use it?"
title_div3.textContent="Where does it come from?"
link_div1.textContent="show"
link_div2.textContent="show"
link_div3.textContent="show"
link_div1_hide.textContent="hide"
link_div2_hide.textContent="hide"
link_div3_hide.textContent="hide"
link_div1.setAttribute("href","#")
link_div2.setAttribute("href","#")
link_div3.setAttribute("href","#")
link_div1_hide.setAttribute("href","#")
link_div2_hide.setAttribute("href","#")
link_div3_hide.setAttribute("href","#")
par_div1.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia inventore numquam corporis placeat eaque quidem culpa beatae aliquam et, ut laboriosam omnis hic labore molestias suscipit rem eveniet eius quasi? Reprehenderit illum unde natus, ipsa deleniti odio dolorem voluptates voluptatum ipsam odit sunt doloremque ut libero atque cum, et incidunt modi, sequi error sint facere inventore exercitationem hic nisi? Optio, in exercitationem possimus nam consequuntur officia repudiandae inventore ea sequi hic error accusamus velit dicta amet nostrum nihil delectus ipsa aliquam dignissimos magni sit provident, perspiciatis libero. Culpa aspernatur, mollitia amet laudantium ullam corporis, earum dolorem nulla maiores, autem voluptates"
par_div2.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia inventore numquam corporis placeat eaque quidem culpa beatae aliquam et, ut laboriosam omnis hic labore molestias suscipit rem eveniet eius quasi? Reprehenderit illum unde natus, ipsa deleniti odio dolorem voluptates voluptatum ipsam odit sunt doloremque ut libero atque cum, et incidunt modi, sequi error sint facere inventore exercitationem hic nisi? Optio, in exercitationem possimus nam consequuntur officia repudiandae inventore ea sequi hic error accusamus velit dicta amet nostrum nihil delectus ipsa aliquam dignissimos magni sit provident, perspiciatis libero. Culpa aspernatur, mollitia amet laudantium ullam corporis, earum dolorem nulla maiores, autem voluptates"
par_div3.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia inventore numquam corporis placeat eaque quidem culpa beatae aliquam et, ut laboriosam omnis hic labore molestias suscipit rem eveniet eius quasi? Reprehenderit illum unde natus, ipsa deleniti odio dolorem voluptates voluptatum ipsam odit sunt doloremque ut libero atque cum, et incidunt modi, sequi error sint facere inventore exercitationem hic nisi? Optio, in exercitationem possimus nam consequuntur officia repudiandae inventore ea sequi hic error accusamus velit dicta amet nostrum nihil delectus ipsa aliquam dignissimos magni sit provident, perspiciatis libero. Culpa aspernatur, mollitia amet laudantium ullam corporis, earum dolorem nulla maiores, autem voluptates"
link_div1.addEventListener("click",()=>{
    par_div1.style.display="block"
    link_div1_hide.style.display="block"
})
link_div2.addEventListener("click",()=>{
    par_div2.style.display="block"
    link_div2_hide.style.display="block"
})
link_div3.addEventListener("click",()=>{
    par_div3.style.display="block"
    link_div3_hide.style.display="block"
})
link_div1_hide.addEventListener("click",()=>{
    par_div1.style.display="none"
    link_div1_hide.style.display="none"
})
link_div2_hide.addEventListener("click",()=>{
    par_div2.style.display="none"
    link_div2_hide.style.display="none"
})
link_div3_hide.addEventListener("click",()=>{
    par_div3.style.display="none"
    link_div3_hide.style.display="none"
})
document.body.appendChild(main_div)