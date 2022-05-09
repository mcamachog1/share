python decorators:

.- Es una funcion que se define para hacer cambios a otra funcion.
.- El decorator se asocia a la funcion modificable cuando se define usando el simbolo @
.- Luego se llama a la funcion y se va a correr el decorator
.- El decorator debe retornar una funcion/metodo


python import:

1)import calculadora 
Importa todo el archivo, las llamadas a las funciones necesitan el nombre del archivo adelante 
Ejemplo: calculadora.Calculadora() 

2)from funciones import cube 
Del archivo funciones importa la funcion cube, se puede llamar sin poner el nombre del archivo adelante 
3)from funciones import * 
Del archivo funciones importa todas las funciones y se pueden llamar sin poner el nombre del archivo adelante. 
Ejemplo: cube(x)