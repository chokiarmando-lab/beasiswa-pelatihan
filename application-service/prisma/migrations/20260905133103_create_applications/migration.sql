-- CreateTable
CREATE TABLE `Application` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `scholarshipId` INTEGER NOT NULL,
    `status` ENUM('DRAFT', 'SUBMITTED', 'VERIFICATION', 'REVISION', 'VERIFIED', 'REJECTED', 'SELECTED', 'NOT_SELECTED') NOT NULL DEFAULT 'DRAFT',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Application_userId_idx`(`userId`),
    INDEX `Application_scholarshipId_idx`(`scholarshipId`),
    INDEX `Application_status_idx`(`status`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
