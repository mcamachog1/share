#01/17/22

1.- ¿Cómo agregar un input en un formulario ya generado con scaffold?
R= 
Los formularios se despliegan en páginas HTML (vistas), en este caso quiero crear un nuevo registro y hay dos campos que no están siendo solicitados en el formulario, entonces debo crear los inputs para poder incluirlos.

¿Cuál es el archivo HTML que debo modificar?
app/payment_by_students/new.html.erb
Usa la instrucción render y hace referencia al archivo _form.html.erb
El archivo _form.html.erb crea un formulario basado en el modelo

2.- ¿Cómo incluir el campo id en la vista index?
R=
¿Cuál es el archivo HTML que debo modificar?
Ubico la vista (HTML file), OJO el show es para un elemento, varios elementos se muestran en la vista index.html.erb

3.- ¿Cómo ignorar un directorio completo en git?
R= nombre del directorio + slash

tmp/

Si es un archivo: nombre del archivo

.DS_Store

Referencia:
https://www.pluralsight.com/guides/how-to-use-gitignore-file

4.- ¿Cómo revertir cambios en un archivo si la cagué?
R=
git restore app/views/students/show.html.erb

5.- ¿Cómo sacar archivos  de un directorio del stage?
R=
git restore tmp/

6.- ¿Cómo desplegar una lista de valores a la hora de seleccionar un campo tipo clave foránea? Para la página de crear alumno, quiero una lista que despliegue los nombres de los representantes y que al seleccionar me asocie el alumno con ese representante.
R=
Voy a buscar en la vista app/views/tutoring/new.html.erb y me va a enviar al formulario app/views/tutoring/_form.html.erb. Allí hay campos tipo select_tag que cargan las opciones con los valores y guardan el id. Se diferencia la acción new de la acción update, en el caso de la acción new no hay valor seleccionado porque no existe. En el caso de la acción update se selecciona el valor asociado.

7.- ¿Cómo generar la clave SSH desde mi computadora para cargarla a GitHub y poder clonar y hacer push a los repositorios?
R=
Ejecutas el siguiente comando en GitHub Bash línea de comandos, con tu correo GitHub
ssh-keygen -t ed25519 -C "mcamachog@hotmail.com"
Referencia:
https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

#01/18/22

8.- ¿Cómo ordenar los valores de una la lista desplegable en la vista app/views/students/new.html.erb ?
R= 
Si se quieren mostrar los valores ordenados, uso método order que aplica a los objetos ActiveRecord (en el controller). Envío un arreglo y el arreglo lo lleno en el controler.
Ej: User.all.order(:first_name)

9.- Quiero tener la opción de desglosar el pago por alumno, cuando son hermanos. Por defecto el desglose debe ir a un único alumno
9.1 - Incluir el link desde la vista ‘payment’. Para usar los links se usan los helpers. Se orientan según la ruta.






Por ejemplo

app/views/students/index.html.erb
students_path
app/views/students/new.html.erb
new_student_path
app/views/students/show.html.erb
student
app/views/students/edit.html.erb
edit_student_path(student)




10.- ¿Cómo crear en rails un proyecto API?
R=
rails new nombre --api


#01/19/22
11.- Cómo crear en un modelo, un campo de texto largo?
R=
El tipo de datos es ‘text’

Ej: rails g model post user:references body:text

Referencia: ??https://www.google.com/url?sa=i&url=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F17918117%2Frails-4-list-of-available-datatypes&psig=AOvVaw1yEhbeBy1rBx2FvurWbnlR&ust=1642683674200000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNDTjNvvvfUCFQAAAAAdAAAAABAD

12.- Cómo agregar un campo a un modelo si lo olvidé?
R=
Ej: rails generate migration AddPostReferenceToComment post:references

13.- Cómo incorporar graphql a mi proyecto?
R=
En el Gemfile incluir: gem “graphql” (debajo de gem “puma”) y luego correr bundle install. Por último correr: rails g graphql:install
OJO: Ruby es case sensitive.

#01/21/22
14.- ¿Cómo probar un delete con graphql usando query variables?

mutation deleteComment($id:Int!)
{
  deleteComment(id: $id)
  
}

#Query Variables
{
  "id":4
}

#01/23/22
15.- Cómo corregir el error de “Nullability mismatch” en graphql?
R=
Cuando el argumento es obligatorio (not null) debe colocarse un ! al final del nombre.
Ej:
mutation createComment($comment:CommentInputType!)
{
  createComment(comment: $comment) {
    id
  }
  
}

#Query variables

{
  "comment":
  {
    "userId": 2,
    "postId": 2,
    "body" :"Un comentario"
    
  }
}

16.- Cómo borrar todos los comentarios de un post específico (relación de 1 a n)?
R=

Opcion 1:

1.- Seleccionar los comments del post 3

$ comments = Comment.where(post_id: 3).all

2.- Hacerles destroy. El destroy_all aplica sobre un arreglo de registros, le hace un delete a cada uno.

$ comments.destroy_all

Opcion 2:

Existe una forma de configurar en el modelo la relación de dependencia y la decisión de borrar en cascada. Si borro el usuario, borra automáticamente los posts de ese usuario y los comentarios de dicho post.

class Post < ApplicationRecord
	has_many :comments, dependent: :destroy 
end

$ post = Post.where(id: 3).first
$ post.destroy

#01/24/22

17.- Dónde conseguir más información de graphql
R=
.- graphql-ruby.org
.- graphql.org
.- Front-end GraphQl clients

18.- Qué otras cosas puede hacer graphql?
R=
.- Suscriptions! (push data into de front-end using web sockets, without having to wait the front-end asks for it)
.- Dynamic schema! (change the layout of the data at run-time)
.- Lazy execution! (handle unfinished queries)
.- Ahead-of-time analysis (see how dificult is the query before start work on it)
.- Complexity management (how complicated the query will be)
.- Multiplexing 

#01/25/22
19.- Que es un docker container
R=
Es una máquina virtual super eficiente que no necesita instalar un sistema operativo específico para funcionar. Utiliza los recursos del server host, solo agrega una pequeña capa que sirve de interfaz entre ella y el server host. Esa pequeña capa puede instalarse en cualquier OS, lo que hace que el contenedor sea portable. El mismo permanece funcional a donde quiera que se desee mudar.

20.- Que es una docker image
R=
Es un molde para preparar el ambiente y el contexto que necesita una aplicación para correr. La imagen corriendo es un contenedor.

21.- Cómo inicio un contenedor?
R=
$ docker run ruby:2.7 ruby -e “puts :hello”

Se inicia de la nada, porque si la imagen no la tengo la baja de internet. Cada vez que corro un contenedor se crea una instancia nueva. Un contenedor nuevo.

#01/26/22
22.- Por que para un elemento input text de HTML, una cosa es el atributo ‘value’ y otra cosa es la propiedad ‘value’?
R=

Si tenemos un input text de este tipo 
<input id=’addTodo’ type=’text’ value=’Tarea 1’>

Y hago
# var input_text = document.getElementById(‘addTodo’)

Para referirme a lo que escribieron en la caja de texto, uso la PROPIEDAD (Java Script - Dinámico) value
The value property contains the default value OR the value a user types in (or a value set by a script).
# input_text.value

Para referirme al valor inicial de la caja de texto, uso el ATRIBUTO (HTML - Estático) value:
# input_text.getAttribute(‘value’)

23.- Cómo subir una branch que acabo de crear?
R=
>git push --set-upstream origin <branch-name>


#01/27/22
24.- ¿Cómo consultar las imágenes que tengo generadas?
R=
$ docker images

25.- Como ponerle nombre a una imagen (tag)
R=
$ docker tag <image-name or image-id> <name>
$ docker tag 0bdfa4db16bf railsapp:1.0

26.- ¿Cómo levantar el servidor de Rails en el container y hacerlo disponible desde mi máquina local?
R=
$ docker run -p 3000:3000 railsapp bin/rails s -b 0.0.0.0

27.- ¿Cómo conseguir la dirección IP de un container que está corriendo?
R=

$ docker inspect --format '{{ .NetworkSettings.IPAddress }}' [containerID]

28.- Cómo construir una imagen y ponerle un nombre (tag)
R=

$ docker build -t railsapp:1.0 .


#01/31/22

29.- Cómo quitar (excluir) de git los archivos y directorios que no me interesan ‘untracked files’
R=

git clean -fxd

30.- Y si lo había metido previamente en el stage sin querer

$ git rm -f log/development.log

$ git commit -m "delete log/development.log from stage"

#02/01/22

31.- Cómo borrar una branch local o remota
R=

// delete branch locally
git branch -d user_story_1
git branch -D user_story_1


// delete branch remotely
git push origin --delete user_story_1


#02/02/22

32.- Cómo correr un contenedor sin especificar el comando en la llamada (toma el comando por defecto colocado en el Dockerfile)
R=

docker run -p 3000:3000 railsapp:5.0

#02/03/22
Resumen curso de Dockers for Rails development

Introduction

1.- El objetivo es aprender a montar aplicaciones Rails en Dockers, tiene ventajas porque la aplicación será escalable, y usando las Dockers Tools tendrá todas las características de un ambiente profesional para su funcionamiento.

2.- La ventaja de trabajar con Dockers es que lo que hagas en tu máquina funcionará en cualquier parte, porque estás trabajando sobre un contenedor, fácilmente configurable gracias al uso de imágenes. Facilita un ambiente estándar de desarrollo y ejecución para la app. En este capítulo se habla de las ventajas del docker.

A Brave World

1.- Los contenedores son máquinas virtuales corriendo, son más eficientes que las máquinas virtuales tradicionales porque no necesitan instalar un sistema operativo específico, son portables, aisladas y se comunican entre sí, pueden usarse para picar una aplicación en servicios, donde cada servicio es un contenedor.

Las imágenes son fábricas de contenedores. Las imágenes se pueden distribuir y compartir.

2.- Usando Dockers podemos correr un script de Ruby sin tener ruby instalado. Si tenemos dockers instalado en nuestra máquina, solo debemos hacer:

$ docker run ruby:3.0 ruby -e "puts :hello"

Podemos borrar los dockers que ya corrieron y están detenidos:
$ docker rm $(docker ps -aq --filter status=exited)

3.- Podemos generar un contenedor y entrar (montarnos) en su línea de comandos:
$ docker run -i -t --rm -v ${PWD}:/usr/src/app ruby:2.7 bash

Como nuestra imagen inicial solo tenía Ruby, entonces dentro del shell del contenedor instalo Rails, con el comando:
$ gem install rails

Luego creo un nuevo proyecto sencillo (sin pruebas y sin dependencias)

$ rails new myapp2 --skip-test --skip-bundle 

y al salir (aunque detuve el contenedor) tengo todos los archivos que generó el proyecto gracias a que con la opción -v cree un volumen en mi maquina en mi directorio actual.

4.- El docker tiene 3 partes: Engine (host), Daemon y CLI

Running a Rails App in a container

Una manera de levantar el servidor Rails es correr el container a partir de la imagen de ruby:2.7 con la instrucción de entrar al shell, una vez dentro correr la instrucción para instalar Rails y después levantar el servidor. Esto habría que hacerlo manualmente o concatenando varios comandos en el container run que corre con la imagen ruby:2.7

Todo lo que yo necesite hacer dentro del shell una vez que pongo a correr un contenedor, lo puedo configurar en el Dockerfile

Con el Dockerfile hago un ambiente para correr mi aplicación Rails. En ese ambiente instalo Node.js y después copio el archivo Gemfile al Docker (allí está Rails y las demás gemas) y después con el bundle las instalo. Al parecer para que el bundle pueda instalar necesita el node.js

Cuando esta listo el Dockerfile creo la imagen y le pongo nombre

$ docker build -t [rails_server] .

Lo corro asociando a mi maquina el puerto del contenedor

$ docker run -d -p 3000:3000 rails_server


Docker Compose

Es una herramienta para administrar aplicaciones que necesitan que diferentes contenedores trabajen juntos.

Todas las opciones que necesito pasar para correr un docker (servicio) las puedo poner en el docker-compose ejemplo -p 3000:3000

En lugar de
$ docker run -d -p 3000:3000 rails_server

Voy a correr
$ docker-compose up


#02/08/22



33.- Después de levantar el ambiente con el docker-compose. Cómo conectar a un servicio y probarlo?
R=

$ docker-compose run --rm redis redis-cli -h redis

34.- Se crea un container para generar un proyecto (sin vistas y sin correr las dependencias) se crea un volumen para compartir los archivos. Los archivos generados se guardan en mi máquina local. Cuando levante otro container los va a tomar de allí. Puedo modificar mi proyecto rails agregando nuevas gemas en el Gemfile y luego actualizo la imagen de mi aplicacion (servicio web) corriendo el docker-compose build con el nombre del servicio que actualice, en este caso mi aplicacion principal rails.
R=

$ docker-compose build web



#02/14/22

35.- Levantar una instancia cliente en una máquina virtual (docker) que se conecta a un servidor postgres

$ docker run -it --rm --network containers_default postgres psql -h some-postgres -U postgres

36.- Levantarlo como un servicio que pertenece a un ambiente creado según el docker-compose

$ docker-compose run --rm database psql -U postgres -h database

#03/01/22

37.- Cómo reiniciar los valores de las claves primarias en #postgres #primaryKey #sequences

$ ALTER SEQUENCE parents_id_seq RESTART WITH 980190980;

38.- Cómo entrar a #postgres con #heroku
$ heroku pg:psql -a newacademy

39.- Cómo forzar un delete cascade en el #modelo #rails #cascada #borrar

class Parent < ApplicationRecord
	has_many :students, dependent: :destroy
     validates :name, presence: true
end

#03/20/22
40.- Cómo configurar una aplicación #rails 6.x en #heroku
https://devcenter.heroku.com/articles/getting-started-with-rails6


41.- Cómo se configura CI/CD en #heroku.
.- Tengo clonado mi repositorio newacademy
.- Los archivos actualizados están en gitHub repositorio newacademy
.- Heroku tiene su repositorio de ‘deployment’ para que se ejecute la aplicación. El repositorio de deployment de Heroku está enlazado con  mi repositorio newacademy de GitHub para la rama ‘main’
.- Puedo crear una rama staging (pruebas pre-produccion) y una rama dev (para desarrollo)

42.- ¿Cómo estoy usando el pipeline de #heroku?
.- Cada estado tiene asociada una aplicación ´deployable’ en heroku.
.- Tengo mi ambiente de desarrollo local en mi maquina
.- Tengo una aplicación productiva asociada a la rama ‘main’ de mi gitHub.
.- Tengo una aplicación pre-productiva asociada a la rama ‘staging’ de mi gitHub

43.- ¿Cómo copiar la BD de producción a staging? #heroku
heroku pg:copy newacademy::DATABASE_URL postgresql-polished-87940 --app staging-newacademy

#03/21/22
42.- Dónde puedo probar mi código JS? #react
https://jsbin.com/?js,console


#04/12/22
43.- ¿Cómo comparo un archivo de dos branches diferentes en git?

 git diff dev master -- content/menu/customers.php

Nota: los cambios se leen de derecha a izquierda, lo que hice en dev que no estaba en master (en este caso)




44.- ¿Cómo comparo un archivo de dos commits diferentes en git?

Opcion 1:
 git diff HEAD^ HEAD content/menu/customers.php

Nota: ^ significa un commit anterior

Opcion 2:
 git diff 8c10d06 6008f2c content/menu/customers.php

45.- ¿De dónde saco los códigos cortos de los commits?

git log --oneline --graph --decorate --all


