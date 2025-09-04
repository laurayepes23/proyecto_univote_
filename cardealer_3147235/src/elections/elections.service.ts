import { Injectable } from '@nestjs/common';
import { CreateElectionDto } from './dto/create-election.dto';
import { UpdateElectionDto } from './dto/update-election.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ElectionsService {

  constructor(private repositorio: PrismaService) {}

  create(createElectionDto: CreateElectionDto) {
    return this.repositorio.elections.create({
      data: CreateElectionDto
    })
  }

  findAll() {
    return `This action returns all elections`;
  }

  findOne(id: number) {
    return `This action returns a #${id} election`;
  }

  update(id: number, updateElectionDto: UpdateElectionDto) {
    return `This action updates a #${id} election`;
  }

  remove(id: number) {
    return `This action removes a #${id} election`;
  }
}
