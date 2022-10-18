import { EmpleadoModel } from "./empleado.model"
import { ProductoModel } from "./producto.model"

export interface InventarioModel {
    _id: string
    productos: ProductoModel[]
    createdAt: string
    updatedAt: string
    empleado: EmpleadoModel
}