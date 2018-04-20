$.getJSON( "https://api.airtable.com/v0/appp3qUdwqW3M4BCV/Games", function( data ) {
 console.log(data.records);
 var items = [];
  $.each( data.records, function( index, val ) {
    console.log(val.fields["Name"])
    items.push( "<li id='" + val.id + "'>" +
val.fields["Name"]+" </br>"+
val.fields["Style"]+ " </br>"+
val.fields["Type"]+ " </br>"+
val.fields["Color"]+" </br>"+
val.fields["Store"]+" </br>"+
val.fields["Price"]+" </br>"+
val.fields["Season"]+ "</br>"+
 "<img src='" + val.fields["Picture"][0].url+"'></li>");
  });

  $( "<ol/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});
