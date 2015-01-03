var specs = [];

$(function(){
    //console.log("dom ready");
    downloadSpecs();
});

function downloadSpecs(){
    $.ajax({
        dataType: "xml",
        url: "contentEN.xml",
        type: "GET",
        success: function(xml) {
//            console.log(xml);
            $(xml).find('spec').each(function(){
                var fa = $(this).find('Fa').text();
                var title = $(this).find('Title').text();
                var specText = $(this).find('Text').text();
                $('<div class="col-md-3"><i class="fa '+fa+'"></i><h4>'+title+'</h4><p>'+specText+'</p>').appendTo('.specsdiv');
            });
        }
    });
}