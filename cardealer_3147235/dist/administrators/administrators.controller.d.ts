import { AdministratorsService } from './administrators.servicie';
export declare class AdministratorsController {
    private readonly administratorsService;
    constructor(administratorsService: AdministratorsService);
    create(body: any): void;
    findAll(): import("generated/prisma").Prisma.PrismaPromise<{
        id_admin: number;
        nombre_admin: string;
        apellido_admin: string;
        tipo_doc_admin: string;
        num_doc_admin: number;
        correo_admin: string;
        contrasena_admin: string;
    }[]>;
    findOne(id: number): void;
    update(id: string): string;
    remove(id: string): {
        success: boolean;
        mensaje: void;
    };
}
