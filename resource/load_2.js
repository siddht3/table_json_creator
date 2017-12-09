_json_url='https://siddht3.github.io/table_json_creator/resource/a.json';
function load()
{
   loadJSON(_json_url, function(response)
   {
        //alert(response);
         _data = JSON.parse(response); //eval('(' +response+')')
     


          });

}
