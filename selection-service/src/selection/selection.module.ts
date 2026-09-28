import { Module } from '@nestjs/common';
import { SelectionController } from './selection.controller';
import { SelectionService } from './selection.service';
import { PrismaService } from '../prisma.service';


@Module({

 controllers:[
  SelectionController
 ],

 providers:[
  SelectionService,
  PrismaService
 ]

})
export class SelectionModule {}