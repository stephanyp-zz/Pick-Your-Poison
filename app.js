$.getJSON( "https://api.airtable.com/v0/appp3qUdwqW3M4BCV/Games?api_key=keybojDUtvSsJ4IGr", function( data ) {
 // console.log(data.records);
 var items = [];
  $.each( data.records, function( index, val ) {
    // console.log(val.fields["Name"])
    console.log("what is rating from api?", val.fields["rating"])
    items.push("<li id='" + val.id + "'>" + val.fields["Name"] + "</li>"
             + "<img src='" + val.fields["Pictures"][0].url + "'>"
               + "<p id=' " + val.id + "'>" + val.fields["Attachments"] + "</p>"
             + "<h3 id=' " + val.id + "'>" + val.fields["Cost"] + "</h3>"
    + "<h3 id=' " + val.id + "'>" + val.fields["Buy"] + "</h3>"
             + "<h2 id=' " + val.id + "'>" + val.fields["rate"] + "</h2>"
              );
  });
// if (val.fields['rating']){items += '<p>' + val.fields['rating'] + '</p>';});

  $( "<ol/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});
 var items = [];
  $.each( data.records, function( index, val ) {
    console.log(val.fields["pictures"])
    items.push( "<li id='" + val.id + "'>" + val.fields["pictures"] + "</li>" );
  });

  $( "<ol/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
