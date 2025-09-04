import { PrismaService } from 'src/prisma/prisma.service';
export declare class AdministratorsService {
    private prisma;
    constructor(prisma: PrismaService);
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
    create(body: any): void;
    remove(id: number): void;
}
