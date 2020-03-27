function ShowUrlData() {
    let jsonData = GetJsonData();
    let toolData = jsonData['toolData'];

    for (let i = 0; i < toolData.length; i++) {
        //创建一系列页面元素
        let parentItem = createParentDiv(toolData[i])
        let pageList = toolData[i]['pageList']
        for (let j = 0; j < pageList.length; j++) {
            createDiv(pageList[j], parentItem)
        }
    }
}

function createParentDiv(data) {
    let parentItem = $('.main-wrap')
    $div = $(divTitle);
    $div.find('.panel-title').html(data.name);
    $div.appendTo(parentItem);
    return $div
}

//创建div
function createDiv(data, parentItem) {
    $div = $(divString);
    $div.find('.link-tooltip').attr("title", data.url);
    $div.find('.link-tooltip').attr("href", data.url);
    $div.find('.btn-view').attr("data-url", data.url);

    $div.find('.card-title').html(data.title);
    $div.find('.card-body').html(data.desc);
    $div.find('.card-icon-img').attr("src", "assets/img/" + data.img + ".png");


    //parentItem.find('.row').html(data.executeTime); // 工作时间
    $div.appendTo(parentItem.find('.row'));
}

var divTitle = '<a id=""></a>' +
    '	<div class="panel">' +
    '	<div class="panel-title card">' +
    ' <i class="czs-fire-l"></i>热门推荐' +
    '</div>' +
    '<div class="panel-body">' +
    '<div class="row">' +
    '</div>' +
    '</div>' +
    '</div>'

var divString = '<div class="sm-6 md-4 lg-3"> <div class="card">' +
    '<a class="card-heading link-tooltip" title="$2" href="$2" target="_blank">' +
    '<span class="card-icon"><img class="card-icon-img" src="$3" /></span>' +
    '<span class="card-title">标题</span>' +
    '</a>' +
    '<div class="card-body">描述</div>' +
    '<div class="card-footer">' +
    '<table><tbody><tr><td class="btn-view" data-url="$2"> </td></tr></tbody></table>' +
    '</div>' +
    '</div>' +
    '</div>';

ShowUrlData()