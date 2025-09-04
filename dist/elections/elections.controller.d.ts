import { ElectionsService } from './elections.service';
import { CreateElectionDto } from './dto/create-election.dto';
import { UpdateElectionDto } from './dto/update-election.dto';
export declare class ElectionsController {
    private readonly electionsService;
    constructor(electionsService: ElectionsService);
    create(createElectionDto: CreateElectionDto): import("generated/prisma").Prisma.Prisma__electionsClient<{
        nombre_election: string;
        fecha_inicio: Date;
        fecha_fin: Date;
        id_election: number;
        estado_election: string;
        admin_id: number;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateElectionDto: UpdateElectionDto): string;
    remove(id: string): string;
}
