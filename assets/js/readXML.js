$(function(){
    console.log("dom ready");
    downloadCars();
});

function downloadCars(){
    $.ajax({
//        indien datatype niet meegeven krijg je gwoon Text
        dataType: "xml",
        url: "contentEN.xml",
        type: "GET",
        success: function(xml) {
            console.log(xml);
            $(xml).find('car').each(function(){
                var Titles = $(this).find('Title').text();
                var Manufacturers = $(this).find('Manufacturer').text();
                $("<li class='list-group-item'></li>").html(Titles + ", " + Manufacturers).appendTo("#carsul");
            });
        }
    });
}











var photos = [];

$(function(){
    console.log("dom ready");
    downloadPhotos();
});

function downloadPhotos(){
    //ajax getJSON
    $.ajax({
        dataType: "json",
        url: "api.php",
        data: "",
        success: function(response){
//            console.log(response);
            photos = response;
            showPhotos();
        }
    });
}

function showPhotos(){
//    <li>
//        <a href=""/>
//    </li>
//    ZELF GEPROBEERD
//    $.each( "<li id='"+val+"'><a href='/img/reboot/large/"+key+"'></li>" ).appendTo( ".Stage" );
    var l = photos.length;
    if(l > 0){
        var image;
        for(var i = 0; i < l; i++){
            image = photos[i];
            addImage(image);
        }
    }
}

function addImage(img){
    // id, fotourl, description
//    <li>
//        <img src=""/>
//        <figcaption>description</figcaption>
//    </li>
    var bobTheHtmlBuilder = '<li class="img">';
    bobTheHtmlBuilder += '<a href="img/reboot/large/'+img.fotourl+'"data-lightbox="image-1" data-title="'+img.description+'"><img src="img/reboot/small/'+img.fotourl+'" alt="'+img.description+'" title="'+img.description+'"/></a>';
//    bobTheHtmlBuilder += '<img src="img/reboot/small/'+img.fotourl+'" alt="'+img.description+'" title="'+img.description+'"/>';
    bobTheHtmlBuilder += '<figcaption><a href="img/reboot/large/'+img.fotourl+'"data-lightbox="image-1" data-title="'+img.description+'">'+img.description+'</a></figcaption>';
    bobTheHtmlBuilder += '</li>';
    
    $('#photos').append(bobTheHtmlBuilder);
}
