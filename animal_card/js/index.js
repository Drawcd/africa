
    $(document).mousemove(function(event) {


        cx = Math.ceil($(window).width() / 1.9);
        cy = Math.ceil($(window).height() / 1.9);
        dx = event.pageX - cx;
        dy = event.pageY - cy;

        tiltx = (dy / cy);
        tilty = - (dx / cx);
        radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
        degree = (radius * 20);



        $('#lion>.lion-mane').css('-webkit-transform','rotate3d(' + -tiltx + ', ' + -tilty + ', 0, ' + degree + 'deg)');
        $('#lion>.lion-mane').css('transform','rotate3d(' + -tiltx + ', ' + -tilty + ', 0, ' + degree + 'deg)');

    });

    // Js only for drag the articles
    $(function() {
    	$( "article" ).draggable();
    });
