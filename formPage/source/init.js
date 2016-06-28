function init()
{
  document.getElementById('myfiles').addEventListener('change',readBlob, false);
}
 
 function readBlob()
 {
    var files = document.getElementById('myfiles').files;
    if (!files.length) {
        alert('Please select a file!');
        return;
    }
    var file = files[0];
    var myStart = 0; 
    var myStop = file.size -1; 
    var reader = new FileReader();

    reader.onloadend = function(evt) {
      if (evt.target.readyState == FileReader.DONE) { // DONE == 2
          //document.getElementById('byte_content').textContent  = evt.target.result;
          alert(evt.target.result);
      } 
    };

    var blob = file.slice(myStart, myStop + 1);
    reader.readAsBinaryString(blob);
  }
 /* @copyright wendy Xiao Demo Web Page Oct, 2015 */ 