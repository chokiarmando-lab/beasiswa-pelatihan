-- CreateTable
CREATE TABLE `EducationWork` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `applicationId` INTEGER NOT NULL,
    `educationLevel` VARCHAR(100) NOT NULL,
    `institution` VARCHAR(255) NOT NULL,
    `major` VARCHAR(255) NULL,
    `currentJob` VARCHAR(255) NULL,
    `landOwnership` VARCHAR(255) NULL,
    `plantationInvolvement` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `EducationWork_applicationId_key`(`applicationId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `EducationWork` ADD CONSTRAINT `EducationWork_applicationId_fkey` FOREIGN KEY (`applicationId`) REFERENCES `Application`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
