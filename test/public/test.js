window.onload = function(){

    function done(xhr){
        console.log('done: ');
        console.log(xhr);
    }

    function fail(err){
        console.log('failed: ');
        console.log(err);
    }

    document.getElementById('button-get').onclick = function(event){
        ajax({
            url: '/get/json',
            method: 'GET',
            done: done,
            fail: fail
        });
    };

    document.getElementById('button-get-404').onclick = function(event){
        ajax({
            url: '/get/json-404',
            done: done,
            fail: fail
        });
    }

    document.getElementById('button-post-json').onclick = function(event){
        ajax({
            url: '/post/json',
            method: 'POST',
            done: done,
            fail: fail,
            type: 'json', // not neccessary since it's the default
            data: {a: 1}
        });
    }

    document.getElementById('button-post-json-404').onclick = function(event){
        ajax({
            url: '/post/json-404',
            method: 'POST',
            done: done,
            fail: fail,
            data: {a: 1}
        });
    }

    document.getElementById('button-post-uri').onclick = function(event){
        ajax({
            url: '/post/uri',
            method: 'POST',
            done: done,
            fail: fail,
            type: 'uri',
            data: {a: 1}
        });
    };
}
