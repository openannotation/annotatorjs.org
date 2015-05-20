(function ($, undefined) {

    function licenseAnchor(license) {
        function a(license) {
            return '<a href="http://spdx.org/licenses/' + license + '">' + license + '</a>';
        }

        if (license) {
            if ((list = license.split(' or ')).length > 1) {
                var output = []
                $.each(list, function(i, license) {
                    output.push(a(license));
                });
                return output.join(' or ');
            } else {
                return a(license);
            }
        } else {
            return license;
        }
    }

    //Grab plugins.json file
    var plugins = $.getJSON('plugins.json', function(data){

        //Add each plugin to the table
        $.each(data, function(index, item){
            var html = '<tr>';
            html += '<td><a class="name" href="' + item.url + '" target="_blank">' + item.name + '</a>';
            html += '<br /><span class="text-muted owner">' + item.owner + '</span>';
            html += '<br /><span class="description">' + item.description + '</span></td>';
            html += '<td class="tags">' + (undefined != item.tags ?
                item.tags.map(function(tag) {
                  return '<span class="label label-info tag-' + tag.toLowerCase() + '">' + tag + '</span>';
                }).join(' ')
                : '') + '</td>';
            html += '<td class="license">' + licenseAnchor(item.license || '') + '</td>';
            html += '<td class="for">' + (undefined != item.for ? item.for.join(', ') : '') + '</td>';
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
