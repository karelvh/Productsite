$(function(){
    console.log("dom ready");
    downloadCars();
});

function downloadCars(){
    //ajax getJSON
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
