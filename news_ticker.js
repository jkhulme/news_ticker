function height(){
   return $(window).height();
}

function width(){
   return $(window).width();
}

function add_ticker(news_feed){
    var ticker_div = document.createElement("div");
    ticker_div.id = "news-ticker-514d4400-c49b-11e3-9c1a-0800200c9a66";
    ticker_div.style.position = "fixed";
    ticker_div.style.width = width() + "px";
    ticker_div.style.height = "20px";
    ticker_div.style.background = "#D1D1D1";
    ticker_div.style.top = height()-20 + "px";
    ticker_div.style.left = "0px";
    ticker_div.style.opacity = 0.8;
    ticker_div.style.zIndex = 9999;
    ticker_div.innerHTML = "<marquee class='news_ticker-7ce5f950-c670-11e3-9c1a-0800200c9a67' behavior='scroll' direction='left' scrollamount='4'><font color='black'>"+news_feed+"</font></marquee>";
    document.body.appendChild(ticker_div);
}

function build_news_feed(news){
    var output = "";
    for (var i=0;i<news.length;i++){
        for (var j=0;j<news[i].length;j++){
            var source = news[i][j][0];
            var title = news[i][j][1];
            var link = news[i][j][2];
            var story = "<a class='news_ticker-7ce5f950-c670-11e3-9c1a-0800200c9a66' href='"+link+"'>"+"["+source+"] "+title+"</a>";
            output += story + " || ";
        }
    }
    return output.substring(0, output.length - 4);
}

var news = getFeeds();
var news_feed = build_news_feed(news);
add_ticker(news_feed);
