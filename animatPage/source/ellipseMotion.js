document.getElementById("comet").style.position = "absolute";
 
var edirection=1;
var eX=0; 
var eY=0.00; 
var ecount=0; 
var eCX=-40; 
var exleft=0;
var eytop=0.00;
var XX;
var YY;
 
var esetRun = setInterval(elipseRunning, 10 );
function elipseRunning() {
         if ( edirection==1 ){ 
              ecount++;

              eX++;
              eCX++;
              eY = Math.sqrt(20*20*(1-eCX*eCX/1600)); 

              eytop = 15 + 30 + eY;
              exleft = 10 + eX; 

              XX = exleft;
              YY = eytop;
            
              exleft = XX * Math.cos( Math.PI/4 ) + YY * Math.sin( Math.PI/4 );
              eytop =  YY * Math.sin( Math.PI/4 ) - XX * Math.cos( Math.PI/4 );

              document.getElementById("comet").style.top = 40 + eytop + "px";
              document.getElementById("comet").style.left = -25 + exleft +"px";

              if ( ecount >= 80 ){
                   edirection=2;
                   eX=0;
                   eCX=40;  
                   ecount = 0;
              }
          }

          if ( edirection==2 ){  
               ecount++;
               eX++;
               eCX--;
               eY= Math.sqrt(20*20*(1-eCX*eCX/1600)); 
               eytop = 15 - eY + 30 ;
               exleft = 80 - eX + 10;

               XX = exleft;
               YY = eytop;
            
               exleft = XX * Math.cos( Math.PI/4 ) + YY * Math.sin( Math.PI/4 );
               eytop =  YY * Math.sin( Math.PI/4 ) - XX * Math.cos( Math.PI/4 );
                    
               document.getElementById("comet").style.top = 40 + eytop +"px";
               document.getElementById("comet").style.left = -25 + exleft +"px";
               if ( ecount >= 80 ){
                    edirection=1;
                    eX=0;
                    eCX = -40;
                    ecount = 0;
               }
          }
}        

 

