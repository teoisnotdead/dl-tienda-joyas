import { DB } from "../config/db.js"
import format from "pg-format"

export const obtenerJoyas = async ({ limits = 10, page = 1, order_by = "id_ASC" }) => {
    try {
        const [campo, direccion] = order_by.split("_")
        const offset = (page - 1) * limits

        const query = format(
            "SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s",
            campo,
            direccion,
            limits,
            offset
        )

        const { rows } = await DB.query(query)

        const totalQuery = "SELECT COUNT(*) AS totalJoyas, SUM(stock) AS stockTotal FROM inventario"
        const { rows: total } = await DB.query(totalQuery)

        return {
            totalJoyas: Number(total[0].totaljoyas),
            stockTotal: Number(total[0].stocktotal),
            results: rows.map((joya) => ({
                name: joya.nombre,
                href: `/joyas/joya/${joya.id}`,
            })),
        }
    } catch (error) {
        console.error("Error al obtener joyas:", error)
        throw error
    }
}

export const filtrarJoyas = async ({ precio_min, precio_max, categoria, metal }) => {
    try {
        const filtros = []
        const valores = []

        const agregarFiltro = (campo, operador, valor) => {
            valores.push(valor)
            filtros.push(`${campo} ${operador} $${valores.length}`)
        }

        if (precio_min) agregarFiltro("precio", ">=", precio_min)
        if (precio_max) agregarFiltro("precio", "<=", precio_max)
        if (categoria) agregarFiltro("categoria", "=", categoria)
        if (metal) agregarFiltro("metal", "=", metal)

        let query = "SELECT * FROM inventario"
        if (filtros.length > 0) {
            query += " WHERE " + filtros.join(" AND ")
        }

        const { rows } = await DB.query(query, valores)

        return rows
    } catch (error) {
        console.error("Error al filtrar joyas:", error)
        throw error
    }
}

