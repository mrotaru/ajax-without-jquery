var ajax = function(options){
    var options = options || {};
    var method = options.method || 'GET';
    var sync   = options.sync   || false;
    var url    = options.url    || window.location.pathname;
    var done   = options.done   || function(){};
    var fail   = options.fail   || function(){};
    var data   = options.data   || null;
    var type   = options.type   || 'json';

    try {
        xhr = new XMLHttpRequest();
    } catch ( e ) {
        return fail(e);
    }

    xhr.open(method, url, sync);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                return done(xhr);
            } else {
                return fail('http return code: ' + xhr.status);
            }
        }
    };

    function objectToQueryString(data){
        var query = '';
        for (var key in data) {
            query += encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
        }
        return query;
    }

    if (type === 'json') {
        data = JSON.stringify(data);
        xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    } else if (type === 'uri') {
        if (method === 'POST') {
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        }
        data = objectToQueryString(data);
    } else {
        return fail('Type not supported: ' + type);
    }

    try {
        console.log(data);
        xhr.send(method === 'GET' ? null : data);
    } catch(err) {
        return fail(err);
    }
}

window.ajax = ajax;
