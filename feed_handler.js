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

function parseFeed(xml) {
    $("body").append('Jquery is here');
    //var xmlDoc = $.parseXML( xml );
    alert(xml);
}

function handleFeed(feed_url) {
    parseFeed(httpGet(feed_url));
}

function getFeeds() {
    var feeds = ["http://www.theguardian.com/uk/rss"];
    feeds.map(handleFeed);
}

getFeeds();
