export interface ProductoModel {
    _id: string
    nombre: string
    familia: string
    proveedor: string
    ean: string
    iva: number
    margen: number
    precioCompra: number
    precioVenta: number
    cantidad: number
    createdAt: string
    updatedAt: string
}