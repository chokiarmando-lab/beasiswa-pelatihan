import { prisma } from '../config/database.js';

export const getAllSelections = async () => {
  return await prisma.selection.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
};

export const getSelectionById = async (id) => {
  return await prisma.selection.findUnique({
    where: {
      id: Number(id),
    },
  });
};

export const getVerificationByApplicationId = async (applicationId) => {
  return await prisma.verification.findFirst({
    where: {
      applicationId: Number(applicationId),
    },
  });
};

export const createSelection = async (data) => {
  return await prisma.selection.create({
    data: {
      applicationId: Number(data.applicationId),

      institutionId:
        data.institutionId !== undefined &&
        data.institutionId !== null
          ? Number(data.institutionId)
          : null,

      score:
        data.score !== undefined &&
        data.score !== null
          ? Number(data.score)
          : null,

      notes: data.notes || null,

      status: data.status || 'PENDING',

      selectedAt: null,
    },
  });
};

export const updateSelection = async (id, data) => {
  return await prisma.selection.update({
    where: {
      id: Number(id),
    },

    data: {
      institutionId:
        data.institutionId !== undefined &&
        data.institutionId !== null
          ? Number(data.institutionId)
          : undefined,

      score:
        data.score !== undefined &&
        data.score !== null
          ? Number(data.score)
          : undefined,

      notes:
        data.notes !== undefined
          ? data.notes
          : undefined,

      status:
        data.status !== undefined
          ? data.status
          : undefined,

      selectedAt:
        data.status === 'SELECTED'
          ? new Date()
          : data.status === 'NOT_SELECTED'
            ? null
            : undefined,
    },
  });
};

export const getSelectionRanking = async () => {
  const selections = await prisma.selection.findMany({
    where: {
      score: {
        not: null,
      },
    },

    orderBy: {
      score: 'desc',
    },
  });

  return selections.map((selection, index) => ({
    ranking: index + 1,
    ...selection,
  }));
};

