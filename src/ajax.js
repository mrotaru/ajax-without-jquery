var ajax = function(options){
    var options     = options               || {};
    var method      = options.method        || 'GET';
    var sync        = options.sync          || false;
    var url         = options.url           || window.location.pathname;
    var data        = options.data          || null;
    var type        = options.type          || 'json';
    var done        = options.done          || function(){};
    var fail        = options.fail          || function(){};
    var complete    = options.complete      || function(){};
    var beforeSend  = options.beforeSend    || function(){};

    try {
        xhr = new XMLHttpRequest();
    } catch ( e ) {
        return _fail(e);
    }

    function _done(data){
        done(data);
        complete(data,'success');
    }

    function _fail(err){
        fail(data);
        complete(data,'error');
    }

    xhr.open(method, url, sync);
    beforeSend(xhr);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                if(type === 'json' && method === 'GET') {
                    try {
                        _done(JSON.parse(xhr.responseText));
                    } catch (err) {
                        _fail(err);
                    }
                } else {
                    _done(xhr);
                }
            } else {
                _fail('http return code: ' + xhr.status);
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
        return _fail('Type not supported: ' + type);
    }

    try {
        xhr.send(method === 'GET' ? null : data);
    } catch(err) {
        return _fail(err);
    }
}

window.ajax = ajax;
