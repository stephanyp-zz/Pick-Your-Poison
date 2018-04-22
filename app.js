  $.getJSON( "https://api.airtable.com/v0/appp3qUdwqW3M4BCV/Games?api_key=keybojDUtvSsJ4IGr", function( data ) {
    // console.log(data.records);
    var items = [];
    items.push(`<div class="row">`);
    $.each( data.records, function( index, val ) {
      console.log(val.fields)
      var id = val.id;
      var name = val.fields["Name"];
      var Pictures = val.fields["Pictures"] ? val.fields["Pictures"][0].url : '';
      var Attachments = val.fields["Attachments"];
      var Cost = val.fields["Cost"];
      var rate = val.fields["rate"];
      var itemHTML = gameListItem(id, Name, Pictures,Attachments, rate);
      items.push(itemHTML);
    });
    items.push(`</div>`);

    $(".game-list" ).append(items.join(""));
  });
