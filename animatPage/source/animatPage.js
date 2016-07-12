document.addEventListener('DOMContentLoaded', domloaded,false);
 function domloaded(){
  function drawShape()
      {
        context.beginPath();
        context.moveTo(170, 80);
        context.bezierCurveTo(150, 90, 150, 125, 190, 125);
        context.bezierCurveTo(230, 150, 250, 130, 270, 125);
        context.bezierCurveTo(320, 130, 320, 99, 295, 90);
        context.bezierCurveTo(310,  80, 280, 40, 240, 65);
        context.bezierCurveTo(220, 60, 200, 50, 170, 80);
 
        context.closePath();
        context.lineWidth = 5;
        context.strokeStyle = 'lightgray';
        context.stroke();
        context.fillStyle = 'white';
        context.fill();
      }

      function drawSun( )
      {
              if ( position  >= 360 ){
                   position = 0;
              }
              else{

                   position += 5;
              }
               ctxSun.rotate( position * Math.PI/180 ); 
               ctxSun.translate(0, 20);
               ctxSun.clearRect(-150, -150, 300, 300);

               ctxSun.beginPath();
               ctxSun.arc(0,0,30,0,2*Math.PI);
               ctxSun.lineWidth = 10;
               ctxSun.fillStyle = 'red';
               ctxSun.fill();
               ctxSun.strokeStyle = 'gold';
               ctxSun.stroke();
               ctxSun.closePath();

            ctxSun.translate(0, -20);
            ctxSun.rotate( -position * Math.PI/180 ); 
      }
 

      function animate( ) {
        // update
        var time = (new Date()).getTime() - startTime;
         
        var linearSpeed = 100;
        // pixels / second
        var newX = linearSpeed * time / 2000;

        if( newX < canvas.width   ) {
            context.translate(1,0);
            original++;
        } 
        else
        {  
           context.translate(-original,0);
           startTime = (new Date()).getTime();
           original = 0;
        }
       // clear
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawShape();
 
        drawSun( );
      
        setTimeout(animate, 50 );
      }

       var original=0;
       var canvas = document.getElementById("myCanvas");
       var context = canvas.getContext('2d');

       var startTime = (new Date()).getTime();
 
       
       drawShape( );
       setTimeout(animate, 100  ); 

       var canvasText = document.getElementById("myCanvaText");
       var ctxText = canvasText.getContext("2d");
       ctxText.font = "20px STENCIL";
       // Create gradient
       var grd = ctxText.createLinearGradient( 0,0,280,0 );
       grd.addColorStop(0,"blue");
       grd.addColorStop(0.3,"green");
       grd.addColorStop(0.6,"red");
       grd.addColorStop(0.9,"yellow");

       // Fill with gradient
       ctxText.fillStyle = grd;
       ctxText.fillText("Example of Canvas", 20, 50);
 
       var canvasSun  = document.getElementById("myCanvaC");
       var ctxSun = canvasSun.getContext("2d");
       var position = 0;
       ctxSun.translate(150,150);
       drawSun( );

} 
/* @copyright Wendy Xiao Demo Web Page Oct, 2015*/