function refresh_div5()
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
    var id_compte_client = $('#id_compte_client').text();
    var method = 'GET';
    var filename = 'rafraichir_afficher_abonne_admin.php?id_compte_client=' + id_compte_client;

    xhr_object.open(method, filename, true);

    xhr_object.onreadystatechange = 

    function()
    {
        if(xhr_object.readyState == 4)
        {
            var tmp = xhr_object.responseText;

            document.getElementById('rafraichir_afficher_abonne_admin').innerHTML = tmp;
        }
    }

    xhr_object.send(null);

    setTimeout('refresh_div5()', 1000);
}