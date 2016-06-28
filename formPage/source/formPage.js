function ResultFun()
{
                  var TestInfo, inputTest, i; 
                   var d= new Date();
                   TestInfo = d.toDateString()+"\n" + "your input:\n\n";
                  var temp = document.getElementById("textBox").value;
        if ( temp == null || temp == "") 
        {
            alert("Please input a name");
            return false;
        }
        else
        { 
             TestInfo = TestInfo + "Test Name: " + temp + "\n";
             //TestInfo = "Test Name: " + document.getElementById("textBox").value + "<br>";
             inputTest = document.getElementById("sexForm");
             temp="";
             for ( i=0; i< inputTest.length; i++ )
             {
                 if ( inputTest[i].checked == true )
                 {
                      TestInfo  =  TestInfo + "Your sex: " + inputTest[i].value + "\n";
                      temp = "true";
                 }
         
             }
             if ( temp == null || temp == "")
             {  
                  alert("Please input the sex");
                  return false;
             }
             else{
                   inputTest = document.getElementById("Mchoice");
                   for ( i=0; i< inputTest.length; i++ )
                   {
                       if ( inputTest[i].selected == true )
                       {
                           TestInfo =  TestInfo + "You select the person: " + inputTest[i].value + "\n";
                           
                       }
                   }
                   inputTest = document.getElementById("styleForm") ;
                   TestInfo = TestInfo + "You wish doing something together: ";
                   for ( i=0; i< inputTest.length; i++)
                   {
                         if ( inputTest.elements[i].checked == true )
                         {   
                              TestInfo =  TestInfo + inputTest.elements[i].value + ", ";
                         }
                   } 
                   alert ( TestInfo );
            }
        }
}
/* @copyright wendy Xiao Demo Web Page Oct, 2015 */