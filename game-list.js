var gameDetail = function(id, Name, Pictures,Attachments, Cost, rate, Buy) {
  return `<div class="col-sm-6">
    <div class="card mb-4 box-shadow">
      <img class="card-img-top" src="${Pictures}">
      <div class="card-body">
        <ul>
        <h2>${Name}</h2>
          <div class="btn-group">
          <a href="${Cost}" class="button">Price</a>
          <a href="${rate}" button type="button" class="button">Rate</button></a>
          <h2> Summary</h2>
            <a href="${Attachments}">This is Where the summary goes...when it works</a>
            <a href="${Attachments}" button type="button" class="button"></button></a>

          </ul>
            </div>
        </div>
      </div>
    </div>
  </div>`;
}

function getParameterByName(name, url) {
      if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var id = getParameterByName("id", window.location.href);

console.log('Hi')
  $.getJSON(`https://api.airtable.com/v0/appp3qUdwqW3M4BCV/Games/${id}?api_key=keybojDUtvSsJ4IGr`, function( val ) {
    var items = [];
    items.push(`<div class="row">`);
      console.log(val.fields)
      var id = val.id;
      var Name = val.fields["Name"];
      var Pictures = val.fields["Pictures"] ? val.fields["Pictures"][0].url : '';
      var Attachments = val.fields["Attachments"];
      var Cost = val.fields["Cost"];
      var rate = val.fields["rate"];
      var Buy = val.fields["Buy"];
      var itemHTML = gameDetail(id, Name, Pictures,Attachments, Cost, rate, Buy);
      items.push(itemHTML);

    items.push(`</div>`);

    $(".game-list" ).append(items.join(""));
  });
