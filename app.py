import os
import random
from flask import Flask
from flask import request
from flask import Response
from etc.config import GLOBAL_CONF  # конфигурация приложения

ROOT_DIR = os.path.abspath(os.curdir)
COMPONENTS_DIR = os.listdir("components")
FORMS_DIR = os.listdir("forms")
app = Flask(__name__)
random.randint(1, 27)
deginHtml = """<html>
 <head>
   <meta charset="%s">
   <script type="text/javascript" src="/lib/jquery/jquery.js/?debug=%s"></script>
   <script src="/lib/webcomponents/webcomponents-lite.js/?debug=%s"></script>
   <script src="/lib/system.js/?debug=%s"></script>
""" % (GLOBAL_CONF["SERVER_PORT"], str(random.random()), str(random.random()), str(random.random()))
endHtml = "\r\n</body>\r\n</html>"


@app.errorhandler(404)
def not_found(error):
    """обработка ошибочных запросов в URL строке"""
    return "render_template('error.html') ", 404


@app.route('/favicon.ico')
def drawFavicon():
    """загрусзка иконки для URL строки в браузере"""
    return app.send_static_file('/favicon.ico')


@app.route('/doc/<path:the_path>')
def all_static_doc_routes(the_path):
    """Загрузка документации"""
    return app.send_static_file("doc/" + the_path)


@app.route('/lib/<path:the_path>')
def all_static_lib_routes(the_path):
    """Загрузка статических библиотек"""
    return app.send_static_file("lib/" + the_path)


@app.route('/components/<path:the_path>', methods=['GET'])
def all_bower_components2_routes(the_path):
    """
    Процедура загрузки компонента
    """
    FilePath = "%s/components/%s/main.js" % (ROOT_DIR, the_path)
    lib = None
    if os.path.isfile(FilePath):
        with open(FilePath, "r", encoding=GLOBAL_CONF["CODE_PAGE"]) as file:
            return Response(file.read(), headers=GLOBAL_CONF["CONTENT_TYPE"]["JS"]), 200
        return Response('Error read component: %s' % the_path, headers=GLOBAL_CONF["CONTENT_TYPE"]["JS"]), 200
    else:
        return Response("/* Component %s not found */" % the_path, headers=GLOBAL_CONF["CONTENT_TYPE"]["JS"]), 200


@app.route('/')
@app.route('/<path:the_path>', methods=['GET'])
def parseMainForm(the_path="main"):
    """
    функция разбора XML форма и преобразование их в HTML страницу
    """
    if len(FORMS_DIR) == 0:
        return initNewApp()
    # form = request.args['form'] # дописать обработку аргументов !!!!!!!!
    if len(request.path) == 1:
        FilePath = '%s/forms/%s.frm' % (ROOT_DIR, GLOBAL_CONF["MAIN_FORM"])
    else:
        FilePath = '%s/forms%s.frm' % (ROOT_DIR, request.path)
    htmlText = []
    htmlText.append(deginHtml)
    if os.path.isfile(FilePath):
        with open(FilePath, "r", encoding=GLOBAL_CONF["CODE_PAGE"]) as file:
            body = file.read()
            htmlText.append(includeLib(body))
    htmlText.append(endHtml)
    return Response("".join(htmlText), headers=GLOBAL_CONF["CONTENT_TYPE"]["HTML"]), 200


def includeLib(body=""):
    """
    Процедура добавления в тело ВэбФормы библиотек компонентов
    :param body: текст ВэбФормы
    """
    headLib = []
    for dir in COMPONENTS_DIR:
        if '<' + dir in body:
            headLib.append('   <script type="module" src="/components/%s"></script>\r\n' % dir)
    headLib.append("""</head>\r\n<body>\r\n""")
    headLib.append(body)
    return " ".join(headLib)


def initNewApp():
    """Если проект неимеет ни одной формы для визуализации, тогда клиенту отдается файл документации"""
    return app.send_static_file("doc/index.html")


if __name__ == '__main__':
    app.run(port=GLOBAL_CONF["SERVER_PORT"],debug=GLOBAL_CONF["DEBUG"])
