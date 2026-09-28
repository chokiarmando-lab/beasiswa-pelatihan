import { VerificationService } from './verification.service';
export declare class VerificationController {
    private readonly verificationService;
    constructor(verificationService: VerificationService);
    findAll(): Promise<{
        id: number;
        applicationId: number;
        status: import("../generated/enums").VerificationStatus;
        notes: string | null;
        verifiedBy: number | null;
        verifiedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(applicationId: number): Promise<{
        id: number;
        applicationId: number;
        status: import("../generated/enums").VerificationStatus;
        notes: string | null;
        verifiedBy: number | null;
        verifiedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    create(applicationId: number): Promise<{
        id: number;
        applicationId: number;
        status: import("../generated/enums").VerificationStatus;
        notes: string | null;
        verifiedBy: number | null;
        verifiedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateStatus(applicationId: number, body: {
        status: 'PENDING' | 'VERIFIED' | 'REVISION' | 'REJECTED';
        notes?: string;
        verifiedBy?: number;
    }): Promise<{
        id: number;
        applicationId: number;
        status: import("../generated/enums").VerificationStatus;
        notes: string | null;
        verifiedBy: number | null;
        verifiedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
