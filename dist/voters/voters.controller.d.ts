import { voters } from './entities/voters.entity';
import { VotersService } from './voters.service';
export declare class VotersController {
    private readonly VotersService;
    constructor(VotersService: VotersService);
    create(body: any): any;
    findAll(): voters[];
}
