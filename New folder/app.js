const hero= document.querySelector('.hero');
const slider= document.querySelector('.slider');
const logo= document.querySelector('.logo');
const hamburger= document.querySelector('.hamburger');
// document.getElementById("button").disabled = false;
let i=0;


const tl=new TimelineMax();
tl.fromTo(hero, 1, {height: "0%"}, {height:"80%",ease: Power2.easeInOut})
.fromTo(hero, 1.2, {width: '100%'}, {width:'80%',ease: Power2.easeInOut})

.fromTo(slider, 1.2, {x: "-100%"},{x:'0%',ease: Power2.easeInOut} );

function light(){
    if(i==0){
        i=1;
    console.log('laura lausun')
    document.getElementById('myImage').src='./images/flame.gif';
    }
    else if(i==1) {
        i=0;
        document.getElementById('myImage').src='./images/off.gif';

    }
}