function httpGet(url)
{
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false );
    xmlHttp.send( null );

    if (xmlHttp.readyState==4 && xmlHttp.status==200) {
        return xmlHttp.responseText;
    } else {
        return false;
    }
}

function parseFeed(rss_data) {
    var xml = rss_data,
        xmlDoc = $.parseXML( xml ),
        $xml = $(xmlDoc),
        $items = $xml.find( "item" );
    $top_10 = $items.slice(0,2);
    var headlines = [];
    $top_10.each(function(){
        var title = $(this).find( "title" ).text();
        var link = $(this).find( "link" ).text();
        headlines.push([title, link]);
    });
    return headlines;
}

function handleFeed(feed_url) {
    return parseFeed(httpGet(feed_url));
}

function getFeeds() {
    var feeds = ["http://www.theguardian.com/uk/rss"];
    return feeds.map(handleFeed);
}
