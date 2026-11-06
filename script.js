const menu=document.querySelector('.menu-toggle'); menu?.addEventListener('click',()=>document.querySelector('nav').classList.toggle('open'));
document.querySelector('.copy-ip')?.addEventListener('click',e=>{navigator.clipboard?.writeText(e.currentTarget.dataset.copy);e.currentTarget.textContent='Copied ✓';setTimeout(()=>e.currentTarget.textContent='Copy IP',1600)});
const snow=document.querySelector('.snow-layer');
if(snow){for(let i=0;i<44;i++){const flake=document.createElement('span');flake.textContent=i%5===0?'✦':'•';flake.style.left=Math.random()*100+'vw';flake.style.animationDuration=7+Math.random()*11+'s';flake.style.animationDelay=-Math.random()*14+'s';flake.style.fontSize=5+Math.random()*11+'px';flake.style.opacity=.35+Math.random()*.65;snow.appendChild(flake)}}
