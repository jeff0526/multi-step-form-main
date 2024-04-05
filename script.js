
//validation and submition-----------
let totalprice;
let d;
let totalads=0;
function opentab(optb,tabnum){
    var i, stpbtn;

    tabbtn = document.getElementsByClassName('tab-con');
    for(i=0;i<tabbtn.length;i++){
        tabbtn[i].style.display = 'none';
    }
    
    stpbtn = document.getElementsByClassName('num1');
    for(i=0;i<stpbtn.length;i++){
        stpbtn[i].className= stpbtn[i].className.replace(' active', "");
    }
    
    if (tabnum=='tab1'){
       
        document.getElementById('tab1').style.display = "flex";
        stpbtn[0].className += ' active'

    }

    
    if (tabnum=='tab2'){
       
        const filup = document.getElementsByClassName('fil')
        const err= document.getElementsByClassName('err')
        var filval= filup[1].value
        for(let i=0;i<filup.length;i++){
            if(filup[i].value==''){
                err[i].style.display ='block';
                filup[i].style.borderColor='red';
                document.getElementById('defopen').click();
            
            }
            filup[i].onclick=function(){
                filup[i].style.borderColor='hsl(231, 11%, 63%)';
                err[i].style.display ='none';
            }
        }
        if(!filval.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/) & !filup[1].value=='') {
            err[1].innerHTML='Must be Valid Email'
            err[1].style.display ='block';
            filup[1].style.borderColor='red';
            document.getElementById('defopen').click();
           
        }else{
        
            if( !filup[0].value=='' &
                !filup[1].value=='' &
                !filup[2].value=='' ){
                stpbtn[1].className += ' active'
                document.getElementById('tab2').style.display = "flex";
        
                }
            }
        }
            
        
    
    if (tabnum=='tab3'){
        const plans =document.getElementsByClassName('plans')
        
        for(var i=0;i<plans.length;i++){
            plans[i].className= plans[i].className.replace(' planEr', "");
        }
            if (!x ==""){
                stpbtn[2].className += ' active'
                document.getElementById('tab3').style.display = "flex";
            }else{
                for(var i=0;i<plans.length;i++){
                    plans[i].className +=' planEr'
                }
                stpbtn[1].className += ' active'
                document.getElementById('tab2').style.display = "flex";
            }
           
    }
    if (tabnum=='tab4'){
      
        var c=Number(activeadson[0].innerHTML);
        var y=Number(activeadson[1].innerHTML);
        var z=Number(activeadson[2].innerHTML);
        totalads=c+y+z;
        totalprc.innerHTML=totalprice + totalads;
       

        stpbtn[3].className += ' active';
        document.getElementById('tab4').style.display = "flex";
    }
    if (tabnum=='tab5'){
        stpbtn[3].className += ' active';
        document.getElementById('tab5').style.display = "flex";
    }

} 

//default tab open----------
document.getElementById('defopen').click();

//selected plan from tab2 to tab3-----------
let x;

const mory = document.getElementsByClassName('mory')
function plnpck(pcks,slcted){
    const plansum = document.getElementById('slctdpln')
    const plnprc = document.getElementsByClassName("plnprc")
    const plans =document.getElementsByClassName('plans')
    const slctdplanprc =document.getElementById('slctdplanprc')
    for(var i=0;i<plans.length;i++){
        plans[i].className= plans[i].className.replace('planActive',"");
        plans[i].className= plans[i].className.replace(' planEr', "");
    }
    pcks.currentTarget.className +=' planActive';
    x =slcted
    
    if(slcted =='arc'){
          plansum.innerHTML = "Arcade";
          mory[0].innerHTML= mory[0].innerHTML;
          mory[1].innerHTML= mory[1].innerHTML;
          slctdplanprc.innerHTML= plnprc[0].innerHTML;
    }
    if(slcted =='adv'){
        plansum.innerHTML = "Advanced";
        mory[0].innerHTML= mory[0].innerHTML;
        mory[1].innerHTML= mory[1].innerHTML;
        slctdplanprc.innerHTML= plnprc[1].innerHTML;
    }
    if(slcted =='pro'){
    plansum.innerHTML = "Pro";
    mory[0].innerHTML= mory[0].innerHTML;
    mory[1].innerHTML= mory[1].innerHTML;
    slctdplanprc.innerHTML= plnprc[2].innerHTML;
    }
  
    totalprc.innerHTML=slctdplanprc.innerHTML;
    totalprice=  Number(totalprc.innerHTML);

}



// monthly and yearly toggle-----------
const monyrchk = document.getElementById('monyrchk')
const slctdplanprc =document.getElementById('slctdplanprc')

monyrchk.onclick=function(){
    
    const yrfree= document.getElementsByClassName('yrfree')
    const plnprc = document.getElementsByClassName("plnprc")
    const yr = document.getElementById('y');
    const mly = document.getElementById('m');
    const m_y = document.getElementsByClassName('m-y')
    const slctdplanprc =document.getElementById('slctdplanprc')
    const ym =document.getElementById('yr-mn')
    const ttlmy = document.getElementById('ttlmy')
    for(var i = 0;i<yrfree.length;i++){
        if (monyrchk.checked==true){
            yrfree[i].style.display='block';
           yr.style.color='hsl(213, 96%, 18%)';
           mly.style.color='hsl(231, 11%, 63%)';
          mory[0].innerHTML= 'Yearly';
          mory[1].innerHTML= 'per year';
         
        }else{
            yrfree[i].style.display='none';
            mly.style.color='hsl(213, 96%, 18%)';
            yr.style.color='hsl(231, 11%, 63%)';
            mory[0].innerHTML= 'Monthly';
            mory[1].innerHTML= 'per month';
        console.log(mory)
        }

    }

    for(var a=0;a<plnprc.length;a++){
     
        if (monyrchk.checked==true){
            plnprc[a].innerHTML= plnprc[a].innerHTML * 10 ;
            m_y[a].innerHTML = 'yr';
            ym.innerHTML = 'yr';
            ttlmy.innerHTML = 'yr';
        }else{
            m_y[a].innerHTML = 'mo';
            ym.innerHTML = 'mo';
            ttlmy.innerHTML = 'mo';
            plnprc[a].innerHTML= plnprc[a].innerHTML / 10 ;
          
        }
      
    }
        if(x =='arc'){
         slctdplanprc.innerHTML= plnprc[0].innerHTML;
        }
        if(x =='adv'){
          slctdplanprc.innerHTML= plnprc[1].innerHTML;
        }
        if(x =='pro'){
        slctdplanprc.innerHTML= plnprc[2].innerHTML;
        }
        
        totalprc.innerHTML=slctdplanprc.innerHTML;
        totalprice= Number(totalprc.innerHTML);
        
       
}
//------end code for monthly and yearly toggle

//add-ons toggle------------------
const adds = document.getElementsByClassName('ads')
const chkbtn = document.getElementsByClassName('chkbtn')
const adsonprc = document.getElementsByClassName('adsonprc')
const ttlmy=document.getElementsByClassName('ttlmy')
const totalprc=document.getElementById('totalprc')
const activeadson=document.getElementsByClassName('activeadson')
const ads_prc=document.getElementsByClassName('ads-prc')
for(let i=0;i<adds.length;i++){
    adsonprc[i].style.display ="none"

    adds[i].onclick=function(){
        adds[i].classList.toggle('adsActive')
        chkbtn[i].classList.toggle('chk')

            if(adsonprc[i].style.display ==="none"){
                adsonprc[i].style.display ="flex"
                activeadson[i].innerHTML =ads_prc[i].innerHTML;
 
            }else{
                adsonprc[i].style.display ="none";
                activeadson[i].innerHTML=0;
            }
    }
    
}

//------end code for add-ons toggle
