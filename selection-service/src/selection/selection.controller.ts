import {
 Controller,
 Post,
 Body,
 Param,
 ParseIntPipe,
 Get
} from '@nestjs/common';

import { SelectionService } from './selection.service';


@Controller('selection')
export class SelectionController {

constructor(
 private readonly selectionService: SelectionService
){}


@Post(':id')
create(
 @Param('id', ParseIntPipe)
 id:number,

 @Body()
 body:{
   score:number;
   note?:string;
 }
){

 return this.selectionService.createResult(
   id,
   body.score,
   body.note
 );

}


@Get(':id')
find(
 @Param('id', ParseIntPipe)
 id:number
){

 return this.selectionService.findByApplication(id);

}

}