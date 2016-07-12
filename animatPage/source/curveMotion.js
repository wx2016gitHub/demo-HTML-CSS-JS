 
        document.getElementById("myCircle").style.position = "absolute";
        document.getElementById("myCircle").style.bottom = "27px";
        document.getElementById("myCircle").style.left = "15px";
        document.getElementById("myCircle").style.width = "10px";
        document.getElementById("myCircle").style.height = "10px";
        document.getElementById("myCircle").style.backgroundColor = "greenyellow";
        document.getElementById("myCircle").style.borderRadius = "50%";
        document.getElementById("myCircle").style.border = "1px solid gold";

        var direction=1;
        var X=0;
        var Y=0;
        var CX = -30;
        var left=0;
  
        var setRun = setInterval(ballRunning, 30 );
        function ballRunning() {
            if ( direction==1 ){   
                 X = X + 0.5;
                 CX = CX + 0.5;
                 Y= Math.sqrt(50*50*(1- CX* CX/900)); 
                 left = X + 15;
                 Y += 27;
                 document.getElementById("myCircle").style.top = Y+"px";
                 document.getElementById("myCircle").style.left = left+"px";
                 if ( X > 60 ){
                      direction=2;
                      X=15;
                      Y=0;
                      CX = 60;
                      left=0;
                 }
            }
            if ( direction==2 ){  
                 CX--; 
                 X--;
                 if ( CX <= 0 ){
                      direction=1;
                      X=0;
                      Y=0;
                      CX = -30;
                      left=0;
                 }

                 if ( CX == 30 )   
                      X=15;

                 Y= Math.sqrt(  15*15- X*X  );
                 left = CX + 15;
                 Y  = 27 - Y;  
                 document.getElementById("myCircle").style.top = Y+"px";
                 document.getElementById("myCircle").style.left = left+"px";
            }
        }


        document.getElementById("myCircle").addEventListener("click", function () {
             clearInterval(setRun);
        });
 
// @copyright Wendy Xiao javascritp test code JULY, 2016>