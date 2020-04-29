$(document).ready(function() {

    // Test to see if the .length method is valid on selected elements
    // alert($(':input').length);
    
    // append / prepend / wrap functions
    // $('h2').wrap('<div style="background-color: yellow"></div>');
    // $('h2').append('<h4 style="background-color: green">Appended Child 1</h4>');
    // $('h2').prepend('<h4 style="background-color: green">Appended Child 2</h4>');

    // attr() function practice /w JSON object
    // $("button").click(function(){
    //     $('img').toggle().attr({
    //         src: 'images/fireicon.png',
    //         title: 'fire icon'
    //     });
    // })

    // more attr() practice
    $('#changeImage').click(function(){
        $('img').attr({
            src: 'images/fireicon.png',
            alt: 'fire icon',
            title: 'fire icon'
        });
    });
    $('#changeBack').click(function(){
        $('img').attr({
            src: 'images/airicon.png',
            alt: 'air icon',
            title: 'air icon'
        });
    });

    // input and click function practice /w attempt at validation
    $('#saveName').click(function(){
        let fNameVal = $('#fname').val();
        let lNameVal = $('#lname').val();
        if(fNameVal === '' || lNameVal === '')
        {
            $('#errorOutput').text('Please enter your full name');
            $('#nameOutput').text(' ');
        } else {
            $('#nameOutput').text(`${fNameVal} ${lNameVal} is your name!`);
            $('#errorOutput').text('');
        }
    });

    // on() practice with bubbling events up the DOM
    $('#customers tbody').on('click', 'td', function() {
        alert($(this).text());
    });

    // hover() with toggling a hover effect class
    $('#customers tr').hover(function() {
        $(this).toggleClass('lightHover');
    });

    // Using hover()
    // $('#customers tr').hover(function() {
    //     // mouseEnter
    //     $(this).css('background-color', '#efefef');   
    // }, function() {
    //     //mouseLeave
    //     $(this).css('background-color', '#fff');
    // });

    // each() function /w storing collections and html in variables
    // let html = '';
    // $('div.loopDiv').each(function(index){
    //     html += "<br />" + index + " " + $(this).text();
    // });
    // let output = $('#outputDiv');
    // output.html(html);
    
});