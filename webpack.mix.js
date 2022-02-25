const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');
 */

 mix.styles([
        'resources/adminlte/plugins/fontawesome-free/css/all.min.css',
    ],'public/backend/assets/plugins/fontawesome-free/css/all.min.css')
    .styles([
        'resources/adminlte/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css',
    ],'public/backend/assets/css/tempusdominus.css')

    .styles([
        'resources/adminlte/plugins/icheck-bootstrap/icheck-bootstrap.min.css',
    ],'public/backend/assets/css/icheck-bootstrap.css')
    .styles([
        'resources/adminlte/plugins/jqvmap/jqvmap.min.css',
    ],'public/backend/assets/css/jqvmap.css')
    .styles([
        'resources/adminlte/dist/css/adminlte.min.css',
    ],'public/backend/assets/css/dist/adminlte.min.css')
    .styles([
        'resources/adminlte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css',
    ],'public/backend/assets/css/OverlayScrollbars.css')
    .styles([
        'resources/adminlte/plugins/daterangepicker/daterangepicker.css',
    ],'public/backend/assets/css/daterangepicker/daterangepicker.css')
    .styles([
        'resources/adminlte/plugins/summernote/summernote-bs4.min.css',
    ],'public/backend/assets/css/summernote/summernote.css')
    .scripts([
        'resources/adminlte/plugins/jquery/jquery.min.js'
    ],  'public/backend/assets/js/jquery/jquery.js')
    .scripts([
        'resources/adminlte/plugins/jquery-ui/jquery-ui.min.js'
    ],  'public/backend/assets/js/jquery-ui/jquery-ui.js')
    .scripts([
        'resources/adminlte/plugins/bootstrap/js/bootstrap.bundle.min.js'
    ],  'public/backend/assets/js/bootstrap/bootstrap.js')

    .scripts([
        'resources/adminlte/plugins/chart.js/Chart.min.js'
    ],  'public/backend/assets/js/chart.js/chart.js')
    .scripts([
        'resources/adminlte/plugins/sparklines/sparkline.js'
    ],  'public/backend/assets/js/sparklines/sparklines.js')

    .scripts([
        'resources/adminlte/plugins/jqvmap/jquery.vmap.min.js'
    ],  'public/backend/assets/js/jqvmap/jquery.vmap.js')
    .scripts([
        'resources/adminlte/plugins/jqvmap/maps/jquery.vmap.usa.js'
    ],  'public/backend/assets/js/jqvmap/maps/jquery.vmap.js')
    .scripts([
        'resources/adminlte/plugins/jquery-knob/jquery.knob.min.js'
    ],  'public/backend/assets/js/jquery-knob/jquery-knob.js')
    .scripts([
        'resources/adminlte/plugins/moment/moment.min.js'
    ],  'public/backend/assets/js/moment/moment.js')
    .scripts([
        'resources/adminlte/plugins/daterangepicker/daterangepicker.js'
    ],  'public/backend/assets/js/daterangepicker/daterangepicker.js')
    .scripts([
        'resources/adminlte/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js'
    ],  'public/backend/assets/js/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.js')
    .scripts([
        'resources/adminlte/plugins/summernote/summernote-bs4.min.js'
    ],  'public/backend/assets/js/summernote/summernote-bs4.js')
    .scripts([
        'resources/adminlte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js'
    ],  'public/backend/assets/js/overlayScrollbars/js/jquery.overlayScrollbars.js')
    .scripts([
        'resources/adminlte/dist/js/adminlte.js'
    ],  'public/backend/assets/js/dist/adminlte.js')
    .scripts([
        'resources/adminlte/dist/js/adminlte.js'
    ],  'public/backend/assets/js/dist/adminlte.js')

    .scripts([
        'resources/adminlte/dist/js/demo.js'
    ],  'public/backend/assets/js/dist/demo.js')
    .scripts([
        'resources/adminlte/dist/js/pages/dashboard.js'
    ],  'public/backend/assets/js/dist/pages/dashboard.js')
    .copyDirectory('resources/adminlte/dist/img','public/backend/assets/adminlte/img')
    .copyDirectory('resources/adminlte/plugins/fontawesome-free/webfonts',
            'public/backend/assets/plugins/fontawesome-free/webfonts')


    .options({
        processCssUrls: false
    })

    .version()

;
