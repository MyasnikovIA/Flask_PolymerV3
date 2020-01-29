GLOBAL_CONF = {
    # настройки сервера
    "SERVER_PORT": 8080,
    "CODE_PAGE": "utf-8",  # cp1251/utf-8
    "CONTENT_TYPE": {
        "HTML": {'Content-Type': 'text/html; charset=UTF-8'},
        "JS": {'Content-Type': 'application/javascript; charset=UTF-8'},
    },
    'DEBUG': True,
    # настройки форм
    "MAIN_FORM": "main",
    'FILES_DIR': 'Files/',
    # настройки внешних программ
    'WKHTMLTOPDF': {
        'BINPATH': '/opt/wkhtmltopdf/bin/',
        'BINFILE': 'wkhtmltopdf',
        'BINPREFIX': 'env LANG=ru_RU.UTF-8'
    },
    "HELP_URL": "/http://localhost/doc/index.html",

}
