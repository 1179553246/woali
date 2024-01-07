{
    "规则名": "348电影网",
    "规则作者": "",
    "请求头参数": "手机",
    "网页编码格式": "UTF-8",
    "图片是否需要代理": "0",
    "是否开启获取首页数据": "1",
    "首页推荐链接": "https://www.348z.com",
    "首页列表数组规则": "body&&.list-a",
    "首页片单列表数组规则": "li",
    "首页片单是否Jsoup写法": "1",
    "分类起始页码": "1",
    "分类链接": "https://www.348z.com/vodshow/class/{class}/area/{area}/by/{by}/id/{cateId}/page/{catePg}/year/{year}.html",
    "分类名称": "电影&电视剧&综艺&动漫&4K专区",
    "分类名称替换词": "1&2&4&3&37",
    //"筛选数据": {},
    "筛选数据": "ext",
    //{cateId}
    "筛选子分类名称": "动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&纪录片&灾难片&魔幻片&青春片&犯罪片&悬疑片&微电影&音乐片&伦理片&B站电影||国产剧&港台剧&日韩剧&欧美剧&B站剧集&其他剧||空||空||4K电影&4K电视剧",
    "筛选子分类替换词": "6&7&8&9&10&11&12&20&21&22&23&24&25&26&27&28&29||13&14&15&16&49&50||空||空||38&39",
    //{class}
    "筛选类型名称": "空||空||选秀&情感&访谈&播报&旅游&音乐&美食&纪实&曲艺&生活&游戏互动&财经&求职||情感&科幻&热血&推理&搞笑&冒险&萝莉&校园&动作&机战&运动&战争&少年&少女&社会&原创&亲子&益智&励志&其他",
    "筛选类型替换词": "*",
    //{area}
    "筛选地区名称": "大陆&香港&台湾&美国&法国&英国&日本&韩国&德国&泰国&印度&意大利&西班牙&加拿大&其他||内地&韩国&香港&台湾&日本&美国&泰国&英国&新加坡&其他||内地&港台&日韩&欧美||国产&日本&欧美&其他||大陆&香港&台湾&美国&法国&英国&日本&韩国&德国&泰国&印度&意大利&西班牙&加拿大&其他",
    "筛选地区替换词": "*",
    //{year}
    "筛选年份名称": "2022&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000",
    "筛选年份替换词": "*",
    //{lang}
    "筛选语言名称": "",
    "筛选语言替换词": "*",
    //{by}
    "筛选排序名称": "时间&人气&评分",
    "筛选排序替换词": "time&hits&score",
    "分类截取模式": "1",
    "分类列表数组规则": ".list-a&&li",
    "分类片单是否Jsoup写法": "1",
    "分类片单标题": "a&&title",
    "分类片单链接": "a&&href",
    "分类片单图片": ".lazy&&data-original",
    "分类片单副标题": ".list-remarks&&Text",
    "分类片单链接加前缀": "https://www.348z.com",
    "分类片单链接加后缀": "",
    "搜索请求头参数": "User-Agent$手机",
    "搜索链接": "https://www.348z.com/vodsearch/page/1/wd/{wd}.html",
    "POST请求数据": "",
    "搜索截取模式": "1",
    "搜索列表数组规则": ".searchlilst&&li",
    "搜索片单是否Jsoup写法": "1",
    "搜索片单图片": ".lazy&&data-original",
    "搜索片单标题": "a&&title",
    "搜索片单链接": "a&&href",
    "搜索片单副标题": ".list-remarks&&Text",
    "搜索片单链接加前缀": "https://www.348z.com",
    "搜索片单链接加后缀": "",
    "链接是否直接播放": "0",
    "直接播放链接加前缀": "",
    "直接播放链接加后缀": "",
    "直接播放直链视频请求头": "",
    "详情是否Jsoup写法": "0",
    "类型详情": "",
    "年代详情": "",
    "地区详情": "",
    "演员详情": "主演：</span>&&</p>",
    "简介详情": "详情：</span>&&<",
    "线路列表数组规则": ".play_source_tab&&a",
    "线路标题": "Text",
    "播放列表数组规则": "body&&.content_playlist",
    "选集列表数组规则": "li",
    "选集标题链接是否Jsoup写法": "1",
    "选集标题": "a&&Text",
    "选集链接": "a&&href",
    "是否反转选集序列": "0",
    "选集链接加前缀": "https://www.348z.com",
    "选集链接加后缀": "",
    "分析MacPlayer": "2",
    "是否开启手动嗅探": "1",
    "手动嗅探视频链接关键词": ".mp4#.m3u8#.flv#video/tos",
    "手动嗅探视频链接过滤词": ".html"
}