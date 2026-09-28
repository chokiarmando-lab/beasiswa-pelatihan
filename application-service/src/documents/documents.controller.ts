import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { DocumentsService } from './documents.service';

@Controller('documents')
export class DocumentsController {
  constructor(
    private readonly documentsService: DocumentsService,
  ) {}

    @Post(':applicationId')
    @UseInterceptors(
    FileInterceptor('file', {
        storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
            const uniqueName =
            `${Date.now()}-${Math.round(Math.random() * 1e9)}` +
            extname(file.originalname);

            cb(null, uniqueName);
        },
        }),

        limits: {
        fileSize: 2 * 1024 * 1024,
        },

        fileFilter: (req, file, cb) => {
        const allowedExtensions = ['.pdf', '.jpg', '.jpeg', '.png'];
        const extension = extname(file.originalname).toLowerCase();

        if (!allowedExtensions.includes(extension)) {
            return cb(
            new BadRequestException(
                'File harus berupa PDF, JPG, atau PNG',
            ),
            false,
            );
        }

        cb(null, true);
        },
    }),
    )
    async upload(
    @Param('applicationId', ParseIntPipe) applicationId: number,
    @Body() body: {
        documentType: string;
    },
    @UploadedFile()
    file: {
        originalname: string;
        path: string;
        mimetype: string;
        size: number;
    },
    ) {
    if (!file) {
        throw new BadRequestException('File wajib diupload');
    }

    if (!body.documentType) {
        throw new BadRequestException('documentType wajib diisi');
    }

    return this.documentsService.create(applicationId, {
        documentType: body.documentType,
        fileName: file.originalname,
        filePath: file.path,
        mimeType: file.mimetype,
        fileSize: file.size,
    });
    }

  @Get(':applicationId')
  findByApplication(
    @Param('applicationId', ParseIntPipe) applicationId: number,
  ) {
    return this.documentsService.findByApplication(applicationId);
  }

    @Get(':applicationId/:id/download')
    async download(
    @Param('applicationId', ParseIntPipe) applicationId: number,
    @Param('id', ParseIntPipe) id: number,
    @Res() res: any,
    ) {
    const document = await this.documentsService.findOne(
        id,
        applicationId,
    );

    if (!document) {
        throw new BadRequestException('Document not found');
    }

    return res.download(document.filePath, document.fileName);
    }
}
