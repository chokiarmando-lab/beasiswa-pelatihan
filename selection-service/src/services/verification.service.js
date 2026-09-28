import { prisma } from '../config/database.js';

export const getAllVerifications = async () => {
  return await prisma.verification.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
};

export const getVerificationById = async (id) => {
  return await prisma.verification.findUnique({
    where: {
      id: Number(id),
    },
  });
};

export const updateVerificationStatus = async (
  applicationId,
  data,
) => {
  return await prisma.verification.update({
    where: {
      applicationId: Number(applicationId),
    },
    data: {
      status: data.status,
      notes: data.notes,
      verifiedBy: data.verifiedBy,
      verifiedAt:
        data.status === 'VERIFIED'
          ? new Date()
          : null,
    },
  });
};

export const getVerificationByApplicationId = async (
  applicationId,
) => {
  return await prisma.verification.findFirst({
    where: {
      applicationId: Number(applicationId),
    },
  });
};