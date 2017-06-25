'use strict';
$(function () {
    console.log('jq działa')

    $(window).scroll(function () {

        console.log($(window).scrollTop() + $(window).height());
        console.log($(document).height())
        /*jesli dochodzimy do konca strony to ...*/
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {

            $.getJSON('https://jsonplaceholder.typicode.com/users', function (objekt) {
                /*wypisanie z kazdego elementu tablicy objekt wartosci */
                for (var i = 0; i < objekt.length; i++) {
                    $('body').append('<p>Nazwa użytkownika: ' + objekt[i].name + '</p>')
                    $('body').append('<p>Id użytkownika: ' + objekt[i].id + '</p>')
                    $('body').append('<p>URL użytkownika:' + objekt[i].website +'</p>'+ '<hr>');
                    
                }
            })

        }
    })

})
