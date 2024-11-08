$(function () {

    $("#code").focus("click", function () {
        $(this).css({ "background-color": "lightblue", "color": "blue" });
    })
    $("#code").blur("click", function () {
        $(this).css({ "background-color": "lightgreen", "color": "darkgreen" });
    })



    $("#bt").on({
        "click": function () {
            // color change red
            // text change r u sure?

            $(this).text("¿Estás seguro?")
            // posible size change
            $(this).css({ "background-color": "orange" })
        },
        "dblclick": function () {
            $(this).text("¡OK!")
            // posible size change
            $(this).css("background-color", "blue")
        },
        "mouseleave": function () {
            if ($(this).text() == "¡OK!") {
                $(this).text("COMPRADO")
                // posible size change
                $(this).css({ "background-color": "transparent", "color": "green" })
            }
        }
    })
});
