# Modulo

Desafío - Tienda de Joyas

## Descripción
Este proyecto es una aplicación web que permite a los usuarios ver y filtrar los productos de una tienda de joyas.

## Instalación
Para levantar el proyecto, se debe ejecutar los sgtes comandos:
```
npm install
npm run dev
```

## Endpoints
### `GET /joyas?limits=3&page=2&order_by=stock_ASC`
Devuelve los 3 primeros productos de la tienda, ordenados por stock, en orden ascendente.
```
{
    "totalJoyas": 6,
    "stockTotal": 27,
    "results": [
        {
            "name": "Anillo Wish",
            "href": "/joyas/joya/5"
        },
        {
            "name": "Collar History",
            "href": "/joyas/joya/2"
        },
        {
            "name": "Aros Berry",
            "href": "/joyas/joya/3"
        }
    ]
}
```
### `GET /joyas/filtros?precio_min=25000&precio_max=30000&categoria=aros&metal=plata`
Devuelve todos los productos de la tienda que cumplen con los filtros especificados.
```
[
    {
        "id": 5,
        "nombre": "Anillo Wish",
        "categoria": "aros",
        "metal": "plata",
        "precio": 30000,
        "stock": 4
    }
]
```