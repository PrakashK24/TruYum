function ValidateMenuItemForm()
{
alert("inside validate");
var title=document.forms["editMenuform"]["mname"].value;
var price=document.forms["editMenuform"]["price"].value;
var datelunch=document.forms["editMenuform"]["date"].value;
var category=document.forms["editMenuform"]["namevish"].value;
if(title== "")
{
alert("Title is required");
return false;
}
else if(title.length<2 || title.length>65)
{
alert("Title should have 2 to 65 characters.");
return false;
}
else if(price=="")
{
alert("Price is required.");
return false;
}
else if(isNaN(price))
{
alert("Price has to be a number.");
return false;
}
else if(datelunch=="")
{
alert("Date of Launch is required.");
return false;
}
else if(category=="")
{
alert("Select one category");
return false;
}
else{
return true;
}
}