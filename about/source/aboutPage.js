function myPause(obj)
{
     if( obj.style.WebkitAnimationPlayState  == "running" || obj.style.animationPlayState == "running" )
     { 
         obj.style.WebkitAnimationPlayState = "paused";
         obj.style.animationPlayState = "paused";
     }
     else
     {
         obj.style.WebkitAnimationPlayState = "running";
         obj.style.animationPlayState = "running";
      }
}
/*@copyright wendy Xiao Demo Web Page Oct, 2015*/