//var msg = '';

document.getElementById('search').onkeydown = function (event) {
    if (event.keyCode === 13) {
        getSearch();
    }
};

function getSearch() {
    var lookUp = document.getElementById('search').value;

    url = "https://en.wikipedia.org";

    $.ajax({
        url: "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&callback=?&search=" + lookUp,
        dataType: 'json',
        type: 'GET',
        headers: {'FCC Wikiviewer': 'datadetectiveagent007@gmail.com'},
        success: function(msg)
        {
            printStr(msg);
        }
    });
}

function getRandom() {
    window.open('https://en.wikipedia.org/wiki/Special:Random');
}

function printStr(result) {
    var list = document.createElement('ul');                    //create ul
    list.setAttribute('id', 'wikiUl');                          //define ul element
    document.getElementById('result').appendChild(list);          //Add Element to Documnent

    result[1].forEach(function (element) {                      //cycle through list of results
        var item = document.createElement('li');                //create li for each result
        var title = document.createTextNode(element);           //create text to each li
        item.appendChild(title);                                //add text to each li
        document.getElementById('wikiUl').appendChild(item);    //add each li to ul
    });
    console.log(JSON.stringify(result, null, 3));
}