-- CreateTable
CREATE TABLE `Verification` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `applicationId` INTEGER NOT NULL,
    `status` ENUM('PENDING', 'VERIFIED', 'REVISION', 'REJECTED') NOT NULL DEFAULT 'PENDING',
    `notes` TEXT NULL,
    `verifiedBy` INTEGER NULL,
    `verifiedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Verification_applicationId_key`(`applicationId`),
    INDEX `Verification_status_idx`(`status`),
    INDEX `Verification_verifiedBy_idx`(`verifiedBy`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Selection` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `applicationId` INTEGER NOT NULL,
    `institutionId` INTEGER NULL,
    `score` DOUBLE NULL,
    `notes` TEXT NULL,
    `status` ENUM('PENDING', 'SELECTED', 'NOT_SELECTED') NOT NULL DEFAULT 'PENDING',
    `selectedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Selection_applicationId_key`(`applicationId`),
    INDEX `Selection_status_idx`(`status`),
    INDEX `Selection_institutionId_idx`(`institutionId`),
    INDEX `Selection_score_idx`(`score`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
