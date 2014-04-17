function height(){
   return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0;
}

function width(){
   return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0;
}

function add_ticker(news_feed){
    var ticker_div = document.createElement("div");
    ticker_div.id = "news-ticker-514d4400-c49b-11e3-9c1a-0800200c9a66";
    ticker_div.style.position = "fixed";
    ticker_div.style.width = width() + "px";
    ticker_div.style.height = "20px";
    ticker_div.style.background = "grey";
    ticker_div.style.top = height()-20 + "px";
    ticker_div.style.left = "0px";
    ticker_div.style.opacity = 0.8;
    ticker_div.innerHTML = "<marquee behavior='scroll' direction='right' scrollamount='5'><font color='white'>"+news_feed+"</font></marquee>";
    document.body.appendChild(ticker_div);
}

function build_news_feed(news){
    var output = "";
    for (var i=0;i<news.length;i++){
        for (var j=0;j<news[i].length;j++){
            var title = news[i][j][0];
            var link = news[i][j][1];
            var story = "<a href='"+link+"'>"+title+"</a>";
            output += story + " ";
        }
    }
    return output;
}

var news = getFeeds();
var news_feed = build_news_feed(news);
add_ticker(news_feed);
