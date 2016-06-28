document.addEventListener('DOMContentLoaded', domloaded, false);

var widthtoHeightRatio;

function domloaded() {
    window.addEventListener('load', eventWindowLoaded, false);

     function eventWindowLoaded() {
         var sizeElement = document.getElementById("videoSize")
         sizeElement.addEventListener('change', videoSizeChanged, false);

         var timeElement = document.getElementById("videoTime")
         timeElement.addEventListener('change', videoTimeChanged, false);

         var videoElement = document.getElementById("theVideo");
         widthtoHeightRatio = videoElement.width / videoElement.height;
     }
 }

 function videoSizeChanged(e) {
         var target = e.target;
         var videoElement = document.getElementById("theVideo");
         videoElement.width = target.value;
         videoElement.height = target.value / widthtoHeightRatio;
}

 function videoTimeChanged(e) {
         var target = e.target;
         var videoElement = document.getElementById("theVideo");
         videoElement.currentTime = target.value;
}

function playPause( ) 
   { 
         var myVideo = document.getElementById("theVideo"); 
         if (myVideo.ended)
         {
             videoElement.currentTime = 0;
             document.getElementById("videoTime").value = 0;
             alert("Play finished");
         }
         if (myVideo.paused) 
         {    
                
               myVideo.play(); 
         }
         else
         { 
               myVideo.pause(); 
         }
   } 


/* @copyright wendy Xiao Demo Web Page Oct, 2015 */