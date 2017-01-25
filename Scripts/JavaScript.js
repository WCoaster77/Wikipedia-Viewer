var msg = '';

document.getElementById('search').onkeydown = function (event) {
    if (event.keyCode === 13) {
        getSearch();
    }
};

function getSearch() {
    var data = document.getElementById('search').value;

    url = "https://en.wikipedia.org";

    $.ajax({
        url: "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&callback=?&search=" + data,
        dataType: 'json',
        type: 'GET',
        headers: {'FCC Wikiviewer': 'datadetectiveagent007@gmail.com'},
        success: function (msg)
        {
            console.log(msg);
        }
    });
}

function getRandom() {

}

function printStr(msg) {
    console.log(JSON.stringify(msg, null, 3));
}

//JSON.stringify(msg, null, 3)