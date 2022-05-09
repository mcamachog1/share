#1.- Crear un nuevo proyecto
django-admin startproject PROJECT_NAME

#2.- Crear una nueva aplicacion
python manage.py startapp APP_NAME

#3.- Levantar el servidor web
python manage.py runserver

Estructura de la aplicacion:
.- Se crea un proyecto, el proyecto tiene urls.
.- Dentro del proyecto se crean aplicaciones, cada aplicacion tiene su url. 
Por ejemplo: Proyecto/App para la url de la aplicacion(app) es "".
.- Cada url llama a una vista, que realmente es una funcion. Los url tienen que pasar el tipo de request, por defecto es get.
.- Dentro del archivo views estan las funciones. Estas funciones reciben parametros del url, como por ejemplo el tipo de request y algun string, entre otros. Estas funciones dentro de views pueden usar librerias de python y son las que llaman a las paginas html que se van a mostrar. Cuando se llaman a las paginas html (render) se puede enviar informacion dentro de variables; como por ejemplo la entrada que se quiere visualizar.

#4.- Create New Migrations
python manage.py makemigrations

5.- Migrate
python manage.py migrate