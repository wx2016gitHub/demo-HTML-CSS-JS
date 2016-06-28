function songList( song  ) {
      var sTitle=["1.Hello", "2.True colors", "3.Right Here Waiting","4.Take My Breath Away", "5.Sometimes When We Touch", 
"6.Can you feel the love tonight", "7.Don't know much","8.Everything I Do", "9.Just the way you are", "10.Those flowers", "11.Little happiness"];
      var x = song[2];
      var index;
      if ( isNaN(x) ) 
         index = Number(song[1])-1;
      else
         index =Number( song.slice(1, 3) )-1;
      document.getElementById("songName").innerHTML = sTitle[index];
      var Aid = document.getElementById("myAudio") ; 
      var path="./source/"+song;
      document.getElementById("myAudio").src = path;
      //Aid.autoplay=true;
      Aid.load();
      Aid.play();
}
/* @copyright wendy Demo Web Page Oct, 2015*/