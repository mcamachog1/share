Conectar a mi-laptop en azure desde Windows con Shell de GIT (desde D:)
ssh -i ssh/vminthecloud_key.pem maryvi@13.67.198.255
ssh -i ssh/linux_rsa maryvi@13.67.198.255
http://13.67.198.255:3000

Confirmar paquetes instalados en Linux
dpkg -l | grep wget

Instalar rvm (buscar en internet)

Instalar Rails
$gem install rails -v 6.0.3.4

Instalar Postgres
$sudo apt-get install postgresql-12

Chequear si esta instalado y corriendo
$sudo -u postgres psql

Instalar libreria de Ubuntu libpq-dev
$sudo apt-get install libpq-dev



----------------------------------------------------------------------------------------------------------------------
Quedé por aquí
Instalar App ruby con postgres en azure
https://docs.microsoft.com/es-es/azure/app-service/tutorial-ruby-postgres-app

Usuario de implementación
Desde Azure Cloud Shell
$az webapp deployment user set --user-name maryvidevuser --password Lesth123.

Creación de un plan de App Service mi-app-plan
$az appservice plan create --name mi-app-plan --resource-group skycpu --sku FREE --is-linux

Creación de una aplicación web
$az webapp create --resource-group skycpu --plan mi-app-plan --name ruby-app --runtime 'RUBY|2.6.2' --deployment-local-git

Direccion del repositorio en git
https://maryvidevuser@ruby-app.scm.azurewebsites.net/ruby-app.git

Configuración de la base de datos
az webapp config appsettings set --name ruby-app --resource-group skycpu --settings DB_HOST="<postgres-server-name>.postgres.database.azure.com" DB_DATABASE="sampledb" DB_USERNAME="root@<postgres-server-name>" DB_PASSWORD="Sampledb1"

Instalando control remoto a la maquina virtual
https://docs.microsoft.com/en-us/azure/virtual-machines/linux/use-remote-desktop

