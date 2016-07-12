document.getElementById("comet").style.position = "absolute";
 
var edirection=1;
var eX=0; 
var eY=0.00; 
var ecount=0; 
var eCX=-30; 
var exleft=0;
var eytop=0.00;
 
var esetRun = setInterval(elemRunning, 10 );
function elemRunning() {
         if ( edirection==1 ){ 
              ecount++;

              eX++;
              eCX++;
              eY = Math.sqrt(400*(1-eCX*eCX/900)); 

              eytop =  50 + eY;
              exleft = eX + 15; 
              document.getElementById("comet").style.top = eytop + "px";
              document.getElementById("comet").style.left = exleft +"px";

               if ( ecount >= 60 ){
                    edirection=2;
                    eX=0;
                    eCX=30;  
                    ecount = 0;
               }
          }

          if ( edirection==2 ){  
               ecount++;
               eX++;
               eCX--;
               eY= Math.sqrt(400*(1-eCX*eCX/900)); 
               eytop = 50 - eY;
               exleft = 60 - eX + 15;
                    
               document.getElementById("comet").style.top = eytop +"px";
               document.getElementById("comet").style.left = exleft +"px";
               if ( ecount >= 60 ){
                    edirection=1;
                    eX=0;
                    eCX = -30;
                    ecount = 0;
               }
          }
}        

 

