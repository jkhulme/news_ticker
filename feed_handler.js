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

function parseFeed(feed_name, rss_data) {
    var xml = rss_data,
        xmlDoc = $.parseXML( xml ),
        $xml = $(xmlDoc),
        $items = $xml.find( "item" );
    $top_10 = $items.slice(0,10);
    var headlines = [];
    $top_10.each(function(){
        var title = $(this).find( "title" ).text();
        var link = $(this).find( "link" ).text();
        headlines.push([feed_name, title, link]);
    });
    return headlines;
}

function handleFeed(feed_arr) {
    var feed_name = feed_arr[0];
    var feed_url = feed_arr[1];
    return parseFeed(feed_name, httpGet(feed_url));
}

function getFeeds() {
    var feeds = [["GDN", "http://www.theguardian.com/uk/rss"], ["BBC", "http://feeds.bbci.co.uk/news/rss.xml"]];
    return feeds.map(handleFeed);
}
