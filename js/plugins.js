(function ($, undefined) {

    //Grab plugins.json file
    var plugins = $.getJSON('plugins.json', function(data){

        //Add each plugin to the table
        $.each(data, function(index, item){
            var html = '<tr>';
            html += '<td class="name"><a href="' + item.url + '" target="_blank">' + item.name + '</a></td>';
            html += '<td class="description">' + item.description + '</td>';
            html += '<td class="author">' + item.owner + '</td>';
            $('tbody.pluginList').append(html);
        });

        //Create table filter
        $('table').filterTable({
            'autofocus': true,
            'containerClass': 'col-lg-6 col-lg-offset-3 searchContainer',
            'label': '',
            'placeholder': 'Search ' + data.length + ' Annotator Plugins'
        });

        //Style table search
        $('.searchContainer').children('input[type="search"]').addClass('form-control');
    });
})(jQuery);