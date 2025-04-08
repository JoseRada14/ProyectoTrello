# Proyecto Trello
Este es un proyecto de un aplicativo de tareas hecho con `HTML` `CSS` y `JavaScript` en el que se busca poner en practica conocmientos avanzados de `CSS`como animaciones, modularizacion con `Sass` y logica de programacion avanzada con Es Modules y POO

## TECNOLOGIAS USADAS
- `HTML5` para la estructura de la app
- `SASS` para la modularizacion del css
- `JAVASRCIPT` para la logica de la app
- `ES MODULES` 
- `POO`

## Enlaces a Recursos
alguna imagenes y recursos tomados fueron:
- [Bootstrap Icons](http://icons.getbootstrap.com/)
- [NPM](https://www.npmj.com/sass)
- [Wikipedia]()

# Comandos utilizados para SASS

Para modularizar el `CSS`, se utilizo el procesador `SASS`y se utilizaron los siguintes comandos en la terminal; 
1. Descargamos [NODE](https://nodejs.org/es/download) para poder descargar paqutes como `SASS`

2.  Verfificamos que `NODE` y que `NPM` se instalaron correctamente:
```
node -v
npm -v
```
3. instalamos el procesador `SASS` en nuestro proyecto:
```
npm install sass --save-dev
```
4. creamos el archvivo `.scss` con el que trabajaremos:
```
touch style.scss
```
5. Ejecutamos `SASS` para que convierta nuestro `.scss` en un `.css` regular:
```
npx sass style.scss style.css
```
6. Si queremos que siempre este actualizando el `.CSS` podemos agregar la flag `--watch`:
```
npx sass --watch style.scss style.css
```

## Resumen
las tecnologias utilizadas fueron:

|Tecnologia | Funcion|
| - | - |
| `HTML` | Estructura del Proyecto |
| `CSS`| Estilos del proyecto |
|`JavaScript`| Logica del proyecto|
| `SASS`| moularizacion del css|
