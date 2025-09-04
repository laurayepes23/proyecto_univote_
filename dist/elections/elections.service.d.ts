import { CreateElectionDto } from './dto/create-election.dto';
import { UpdateElectionDto } from './dto/update-election.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ElectionsService {
    private repositorio;
    constructor(repositorio: PrismaService);
    create(createElectionDto: CreateElectionDto): import("generated/prisma").Prisma.Prisma__electionsClient<{
        nombre_election: string;
        fecha_inicio: Date;
        fecha_fin: Date;
        id_election: number;
        estado_election: string;
        admin_id: number;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateElectionDto: UpdateElectionDto): string;
    remove(id: number): string;
}
