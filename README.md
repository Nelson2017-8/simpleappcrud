# Simple Aplicación CRUD con Django

Una Simple Aplicación CRUD con Django y Mysql

## Pre-requisitos

* Python 3
* Servidor Mysql: Para el ejemplo se usó [laragon](https://laragon.org/download/index.html)

## Instalación

Clonar el repositorio y guardar en carpeta local. Abrir la carpeta desde la terminal e instalar los siguientes paquetes de python
```
pip install pymysql
pip install pillow
```

Es necesario tener el Controlador de PyMysql para la conexión con la base de datos y Pillow para subir archivos al servidor. 

Nos vamos a nuestra base de datos en mysql y creamos una nueva base de datos llamada "simpleappcrud". Ahora debemos configurar los datos de la base de datos.

En simpleappcrud/setting.py en el apartado de DATABASES, cambiamos por nuestra configuración.
NAME (nombre de la base de datos),
USER (nombre del usuario para acceder a la base de datos)
PASSWORD (contraseña para acceder a la base de datos)
PORT (puerto para acceder a la base de datos, por defecto es root)
HOST (host para acceder a la base de datos, por defecto es localhost)

Una vez verificado la configuración a mysql, cargamos las migraciones con
```
python manage.py makemigrations
python manage.py migrate
```

Una vez cargada las migraciónes iniciamos el servidor con el siguiente comando
```
python manage.py runserver
```

Ingresamos desde el navegador a la url [http://127.0.0.1:8000/admin](http://127.0.0.1:8000/admin). 

La primera vista que aparecerá será para agregar un nuevo usuario. Rellenamos el formulario y nos redimensiona a otra vista donde veremos todos los usuarios hasta el momento, en dicha vista podemos buscar, actualizar y eliminar usuarios. Las búsquedas de usuarios son filtradas netamente por el correo electrónico.

## Panel de Administrador de usuario

En django también podemos realizar operaciones CRUD desde el panel de administrador como super usuario, para ello necesitamos crear un usuario nuevo con el comando
```
python manage.py createsuperuser
```
Nos pedirá correo, nombre de usuario y una contraseña, por último, tecleamos Y para continuar y presionamos enter.

Ahora solo resta ingresar a la URL [http://127.0.0.1:8000/admin](http://127.0.0.1:8000/admin) y accedemos con nuestras credenciales que acabamos de introducir
