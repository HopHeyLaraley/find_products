

if (window.XMLHttpRequest)
{
   // для IE7+, Firefox, Chrome, Opera, Safari
   xmlhttp = new XMLHttpRequest();
}
else
{
   // для IE6, IE5
   xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttp.open("GET","books.xml",false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;