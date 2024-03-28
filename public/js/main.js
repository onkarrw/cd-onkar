

function openNav() {
    document.getElementById("Sidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("Sidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
  



// themex

const checkbox = document.getElementById('toggle-check');

checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark');

})




// textanimation
//text

let i = 0;
let iii = 0;
let txt = 'Python Developer'
let j = txt.length
let speed = 80;
let dem =  document.getElementById("demo")
let count = 0


let tof = document.getElementById("aboutwrite")

text = '<h4><span class="wave">👋</span> Say Hi to the <span id="sht">right side of my Brain !</span></h4><p>I am onkar wagh, a Third Year Engineering ENTC student, pursuing my degree from the International Institute of Information Technology, Pune.</p><p>An individual eager to learn and explore new fields of life and technology,with good listening skills and fast learning abilities.</p><p>I love computers and hacking around with them, I have been programming since freshman yearof college...</p><p></p><p></p>'


function onloader()
{
  // typeW();
  typeWriter();
}

function typeW()
{
        
  if(iii<text.length)
  {
    tof.innerHTML+= text.charAt(iii)
    iii++
    
    setTimeout(typeW, speed/2)
  }


}

function typeWriter() {
    if (i < txt.length) {
        
        dem.innerHTML+= txt.charAt(i)
        i++
        

     
        setTimeout(typeWriter, speed)


        
    }

    else
    {
       dem.innerHTML = null
       i=0
      
      count++

      if(count%3 ===1 )
      {
        txt = "Web developer"
      }
      else if (count%3 == 2)
      {
        txt = "Photographer"
      }
      else{
        txt = 'Tech enthusiast'
      }
    
      typeWriter();
    }
}







