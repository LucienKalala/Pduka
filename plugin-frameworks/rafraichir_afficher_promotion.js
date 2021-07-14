function refresh_div()
{
    var xhr_object = null;

    if(window.XMLHttpRequest)
    {
        // Firefox
        xhr_object = new XMLHttpRequest();
    }
    else
    {
        //Internet Explorer
        xhr_object = new ActiveXObject('Microsoft.XMLHTTP');
    }
    var id_musique = $('#id_musique').text();
    var method = 'GET';
    var filename = 'rafraichir_afficher_promotion.php?id_musique=' + id_musique ;

    xhr_object.open(method, filename, true);

    xhr_object.onreadystatechange = 

    function()
    {
        if(xhr_object.readyState == 4)
        {
            var tmp = xhr_object.responseText;

            document.getElementById('rafraichir_afficher_promotion').innerHTML = tmp;
        }
    }

    xhr_object.send(null);

    setTimeout('refresh_div()', 1000);
}