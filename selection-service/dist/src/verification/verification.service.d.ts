import { PrismaService } from '../prisma/prisma.service';
import { VerificationStatus } from '../generated/client';
export declare class VerificationService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: number;
        applicationId: number;
        status: VerificationStatus;
        notes: string | null;
        verifiedBy: number | null;
        verifiedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(applicationId: number): Promise<{
        id: number;
        applicationId: number;
        status: VerificationStatus;
        notes: string | null;
        verifiedBy: number | null;
        verifiedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    create(applicationId: number): Promise<{
        id: number;
        applicationId: number;
        status: VerificationStatus;
        notes: string | null;
        verifiedBy: number | null;
        verifiedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateStatus(applicationId: number, status: VerificationStatus, notes?: string, verifiedBy?: number): Promise<{
        id: number;
        applicationId: number;
        status: VerificationStatus;
        notes: string | null;
        verifiedBy: number | null;
        verifiedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
