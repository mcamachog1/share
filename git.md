Comandos
http://git-cheatsheet.com/

Para simular un repositorio remoto en una máquina local se debe crear un repositorio-bare
https://coderefinery.github.io/git-collaborative/06-bare-repos/


Crear un repositorio local
>mkdir <repo>
>cd <repo>
>git init

Clonar un repositorio (dentro del directorio donde quiero clonar)
>git clone https://github.com/mcamachog1/hello.git
>git clone ../repo

Clonar un repositorio (desde cualquier directorio)
> git clone /path/to/example-bare /path/to/example-clone

Agregar un archivo que será considerado la próxima vez que se haga commit
>git add hello.html

Tomar una foto instantánea de mi repositorio)
>git commit -m "message"

Que pasó en MI repositorio, cómo están MIS cambios comparados con el repositorio original al revés no. Ej: ahead by 1 commit
>git status

Subir mis cambios al repositorio
>git push

Hace commit de todos los archivos que han cambiado que ya estaban incluidos en el index de github -a de -all -m de -message
>git commit -am “message”

Cuando la versión del repositorio es mayor que la mía, actualizo
>git pull

Merge conflicts: 
1) Surgen al bajar (pull) una versión del repositorio donde la misma línea de mi código tiene diferencia con la misma línea del repositorio
2) En el archivo se marca dónde está el conflicto, debajo de <<<< HEAD estan mis cambios y debajo de los ===== los cambios del repositorio
3) Escojo como programador que hacer, y salvo el archivo en conflicto
4) Hago commit 
5) Hago push
6) Listo

Hacer seguimiento de los cambios que se han hecho en el repositorio
>git log

Regresa el repositorio a un estado anterior
>git reset --hard <hash commit>

Me pongo igual a como está el repositorio
>git reset --hard origin/master

Saber en cual rama estoy trabajando HEAD
>git branch

Crea una nueva branch con -b  o me mudo para otra branch
>git checkout -b <name>
>git checkout master

Meter en la branch donde estoy metida los cambios hechos en la branch que paso como parametro
>git merge <branch-name>

Pasos cuando el merge da conflicto:
1) Veo en el archivo o en los archivos las líneas con conflicto (los archivos son mencionados en la salida del merge)
2) Decido cuál línea dejar
3) Salvo archivo y hago commit -am "Conflicto Merge corregido". Este paso no es tan cierto, a veces solo hace falta hacer git commit

Subir una branch local-nueva al origin
>git push -u origin <branch-name>
>git push --set-upstream origin <branch-name>


Subir archivos a una branch en github
>git checkout <branch-name>
>git push -u origin <branch-name>

Subelo al repositorio que está clonado en la branch que deseas (la puedes poner por defecto en github para que caiga allí)


Clonar una branch
>git clone -b <branchname> <remote-repo-url>
>git clone -b web50/projects/2020/x/wiki https://github.com/me50/mcamachog1.git



En el trabajo, subir mis cambios
//entro en main
git checkout main
//se descargan los cambios más recientes de main
git pull
//creas una rama nueva con los cambios más recientes de main
git checkout -b rama_de_trabajo
//haces todos los cambios en tu rama_de_trabajo
…
//haces commit con un mensaje de todos los cambios hechos
git commit -am "cambios hechos" 
//en este momento pueden haber conflictos asì que antes de subirlos
git checkout main
git pull
git checkout rama_de_trabajo
//aquì es donde se reconcilia
git rebase main 
//una vez terminada la reconciliaciòn ahora sì subir
git push -u origin rama_de_trabajo



Verificar que las claves SSH están generadas
1) Revisar el ~/.ssh/id_ed25519.pub

Agregar una clave ssh a github para poder hacer los push
https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account

Generar las claves ssh con git
https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

GIT HUB FORKING
Programación colaborativa
Haciendo fork o forking
Un ejemplo es el repositorio de bootstrap en github, donde hay más de 70.000 personas que hicieron forking al repositorio, hacen cambios (con push) y solicitan actualizar sus cambios en un pool pull request (solicitan que sus cambios sean mergeados en la HEAD de bootstrap, cuando quieres que a tus  cambios les hagan un pull a la origin/main)

GIT HUB PAGES
Html, css and JavaScript


#Iniciar un repositorio para el directorio donde estoy metida
git init

#Iniciar un repositorio en un nuevo directorio
git init demo

#Listar archivos en stage
git ls-files

#Deshacer el add README.md (pase al stage)
git reset HEAD README.md

#Excluir archivo (no incluir archivo) cuando estoy pasando todos al stage
git add --all -- ':!path/to/file1'
#Sacar un archivo del stage (deshacer la embarrada en ese archivo)

git restore --staged no_incluir.txt

#Eliminar la modificación hecha al archivo 
git checkout -- README.md

#Ver historico de commits
git log

#Ayuda de comandos git
git help log

#Reporte de git log
git log --oneline --graph --decorate --all

#Salvar formato de git log en comando corto "hist"
git config --global alias.hist "git log --oneline --graph --decorate --all"

#Listar la configuración de git
git config --global --list

#Listar los commits relacionados con el archivo LICENSE.md
git hist -- LICENSE.md

#Renombrar archivos con git
git mv name.txt new_name.txt
#necesita un commit para actualizarlo en el repositorio

#Borrar archivos con git
git rm file.txt
#necesita un commit para actualizar la eliminación en el repositorio

#Si renombre o muevo con comandos del sistema operativo
#debo incluir en el stage las modificaciones de las archivos ya marcados 
#y también los nuevos archivos.

#Para incluir modificaciones a archivos ya marcados (en stage)
git add -u 

#Para incluir modificaciones a archivos ya marcados e incluir archivos nuevos
git add -A

#Excluir los archivos .log que ni me pregunte por ellos
#Se edita .gitignore y en la primera línea se coloca
*.log
#el archivo .gitignore se debe incluir en el stage y hacerle commit

#Para ver los cambios que se han hecho desde el último commit
git difftool

#Para ver los cambios entre dos versiones cualesquiera
git difftool commitcode1 commitcode2

#stashing, se guardan los cambios hechos, no se meten en el stage area
#pero se dejan a punto. Se guarda en la rama actual como WorkInProgress
git stash

#Para listar los stash's
git stash list

#Aplicar el stash y borrarlo (2 en 1)
git stash pop

#git reset and git reflow
#git reset --soft #deja lo ultimo en stage y en working
#git reset --mixed #default deja lo ultimo en working (des-hace los stages)
#git reset --hard #no deja nada, (deshace todo)
Git reset --hard 370d5b9

#Validar si mi repositorio local está asociado a un repositorio remoto
Git remote -v

#Asociar mi repositorio local a un nuevo repositorio en GitHub
git remote add origin https://github.com/mcamachog1/demo.git

#Subir los cambios
git push -u origin main --tags
#Si me da error Permission denied o unable to access,
#borrar los passwords viejos de github en el Keychain Access y usar el password del Personal Access Token de github

#Probar conexión SSH
ssh -T git@github.com

#Antes de subir los cambios, hacer:
Git fetch
Git pull (resolver conflictos, puede requerir un merge que termina en commit)
Git push

#Listar repositorios remotos
Git remote -v

#Si en github el repo cambia el nombre, cambiarlo en el local
Git remote set -url origin “nuevo nombre”

#Listar propiedades del repo remoto
Git remote show origin

#Subir una branch local al remoto y enlazarlas
Git push -u origin <local-branch>

#Borrar delete una branch local
Git branch -d remove <branch-name>

#Listar todas las branches tanto locales como remotas
Git branch -a

#Limpiar en el remoto las branch (o tags) fantasmas (las borre del local y estaban clonadas en el remoto)
Git fetch -p

#Actualizar mi local con las nuevas branchs del remoto
Git fetch
#Hacer merge en mi local con los cambios del remoto
Git pull

#Enlazar en mi local una branch del remoto
Git checkout <remote-branch>

#Si tengo un solo local, pero con dos fuentes de remoto entonces al enlazar la branch debo #indicar a cual remoto
Git checkout -b *local-branch-name* *remoto/branch-name*
Git checkout -b shared origin/shared

#Enlazar con el remoto una branch recién creada en el local
Git pull

#Editar archivo de configuración
git config --global -e

#Actualizar todas las branch, no solo en la que estoy
Git pull –all

#Borrar una rama remota desde el local el delete está indicado por los :
Git push origin :<branch-name>

#Simula que mis cambios se hicieron después de todos los cambios del remoto
git pull –rebase

#Subir mis cambios (después del rebase se suben de ultimito)
git push
 
#Levantar aplicación para revisar los merges
Git mergetool



#TAGS

#Listar los tags existentes
Git tag

#Crear una etiqueta (tag) en el último commit de la rama develop
Git tag *nombre* *branch*

#Crear tag con descripcion
Git tag -a *tag-name* -m *tag-description* *commit-id*

#Subir una tag a gitHub
Git push origin *tag-name*


#Subir a gitHub todos los tags
Git push –tags

#Borrar una tag en el local
git tag -d v0.1-alpha

#Borrar una tag en el remoto
Git push origin :v0.1-alpha

#Actualizar en el local una tag (que apunte al commit más reciente)
Git tag -f *tag-name* *commit-id*

#Actualizar en el remoto una tag que ya existe
Git push –force origin *tag-name*

#Ver un tag
Git show *tag-name*

#Fork

#Desde gitHub se puede hacer fork y asociar a tu cuenta de gitHub el repositorio forkeado
#Luego clonas normal desde tu cuenta local, tu cuenta remota

#Si quieres clonar local directamente el repositorio forkeado
Git remote add *remote-name* *direccion SSH*

#Visualizar los remotos
Git remote -v

#Actualizar desde el repositorio padre
Git pull *remote-name* *branch-name*

#Actualizar desde el local mi fork en gitHub con los cambios del directorio padre
Git push origin master

#Salvar cambios que hice en mi repositorio local y luego cambiarme de rama
$ git stash && git checkout v0.2



