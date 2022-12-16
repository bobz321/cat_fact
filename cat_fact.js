nes (11 sloc)  303 Bytes

$(document).ready(function(){
    $("#start").click(function (){
        output();
        setInterval(output, 15000);
        function output() {
            $.get("https://catfact.ninja/fact", function (data, stauts){
            $("#div1").html(data.fact);
        });
        }
    });
});