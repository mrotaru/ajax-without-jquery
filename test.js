window.onload = function(){
    var url = 'http://web-1ed30297-bcca-4d0c-8ba6-6ebdf87a24c1.runnable.com';
    ajax({
        url: url,
        method: 'GET',
        done: function(xhr){
            console.log('done: ');
            console.log(xhr);
        },
        fail: function(err){
            console.log('failed: ');
            console.log(err);
        }
    });
}
