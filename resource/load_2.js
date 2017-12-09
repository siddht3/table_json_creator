function load()
{
   loadJSON("a.json", function(response)
   {
        //alert(response);
         _data = JSON.parse(response); //eval('(' +response+')')
     


          });

}
