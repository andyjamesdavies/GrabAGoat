
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady()
{
    PGExternalScreen.setupScreenConnectionNotificationHandlers( secondScreenResultHandler, secondScreenErrorHandler ); 
    
    var targetUrl = "http://ajax.googleapis.com/ajax/services/search/images?v=1.0&rsz=8&q=goat&safe=active&callback=?";
    
    $('#submit').bind('click', function (e) {
        e.preventDefault();
                      
        $.getJSON(targetUrl, function(data){ 
            var dataArr = data.responseData.results;
            var i = Math.floor(Math.random()*dataArr.length);
            var item = dataArr[i];
                                
            if (item.url.length > 0) {
                $('.result').html('<img src="' + item.url + '" />');
                PGExternalScreen.loadHTMLResource( item.url, secondScreenResultHandler, secondScreenErrorHandler);
            }
        });
     });
}    

function secondScreenResultHandler (result) {
    //alert("SUCCESS: \r\n"+result);
}

function secondScreenErrorHandler (error) {
   // alert("ERROR: \r\n"+error);
}

