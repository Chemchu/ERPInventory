import { InventarioModel } from "../models/inventario.model"

class _InventarioService {
    private inventarios: InventarioModel[] = [
        {
            _id: "1",
            productos: [{
                _id: "prod1",
                nombre: "nombre",
                familia: "familia",
                proveedor: "proveedor",
                ean: "ean",
                iva: 10.00,
                margen: 20.00,
                cantidad: 100,
                precioCompra: 0.5,
                precioVenta: 0.65,
                createdAt: "1661107314000",
                updatedAt: "1661107314000",
            }],
            empleado: {
                _id: "empleado1",
                nombre: "Empleado 1",
                correo: "correo",
                dni: "DNIEmpleado1",
                rol: "rol",
            },
            createdAt: "1661107314000",
            updatedAt: "1661107314000",
        },
        {
            _id: "2",
            productos: [{
                _id: "prod1",
                nombre: "nombre",
                familia: "familia",
                proveedor: "proveedor",
                ean: "ean",
                iva: 10.00,
                margen: 20.00,
                cantidad: 100,
                precioCompra: 0.5,
                precioVenta: 0.65,
                createdAt: "1664390514000",
                updatedAt: "1664390514000",
            },
            {
                _id: "prod2",
                nombre: "nombre2",
                familia: "familia2",
                proveedor: "proveedor2",
                ean: "ean2",
                iva: 10.00,
                margen: 20.00,
                cantidad: 50,
                precioCompra: 0.5,
                precioVenta: 0.65,
                createdAt: "1661107314000",
                updatedAt: "1661107314000",
            }
            ],
            empleado: {
                _id: "Empleado 2",
                nombre: "nombre",
                correo: "correo",
                dni: "DNIEmpleado 2",
                rol: "rol",
            },
            createdAt: "1664390514000",
            updatedAt: "1664390514000",
        }
    ]

    getInventarios(): InventarioModel[] {
        return this.inventarios
    }

    getInventarioById(id: string): InventarioModel | undefined {
        return this.inventarios.find(inventario => inventario._id === id) || undefined
    }
}

export const InventarioService = new _InventarioService()