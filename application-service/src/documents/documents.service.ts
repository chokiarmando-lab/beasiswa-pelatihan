import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class DocumentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    applicationId: number,
    data: {
      documentType: string;
      fileName: string;
      filePath: string;
      mimeType: string;
      fileSize: number;
    },
  ) {
    return this.prisma.document.create({
      data: {
        applicationId,
        documentType: data.documentType as any,
        fileName: data.fileName,
        filePath: data.filePath,
        mimeType: data.mimeType,
        fileSize: data.fileSize,
      },
    });
  }

  async findByApplication(applicationId: number) {
    return this.prisma.document.findMany({
      where: {
        applicationId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async remove(id: number) {
    return this.prisma.document.delete({
      where: {
        id,
      },
    });
  }

  async findOne(id: number, applicationId: number) {
    return this.prisma.document.findFirst({
        where: {
        id,
        applicationId,
        },
    });
    }
}

