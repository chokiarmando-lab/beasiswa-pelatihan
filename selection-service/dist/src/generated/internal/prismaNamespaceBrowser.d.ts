import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.ts';
export type * from './prismaNamespace.ts';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Verification: "Verification";
    readonly Selection: "Selection";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const VerificationScalarFieldEnum: {
    readonly id: "id";
    readonly applicationId: "applicationId";
    readonly status: "status";
    readonly notes: "notes";
    readonly verifiedBy: "verifiedBy";
    readonly verifiedAt: "verifiedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum];
export declare const SelectionScalarFieldEnum: {
    readonly id: "id";
    readonly applicationId: "applicationId";
    readonly institutionId: "institutionId";
    readonly score: "score";
    readonly notes: "notes";
    readonly status: "status";
    readonly selectedAt: "selectedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SelectionScalarFieldEnum = (typeof SelectionScalarFieldEnum)[keyof typeof SelectionScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const VerificationOrderByRelevanceFieldEnum: {
    readonly notes: "notes";
};
export type VerificationOrderByRelevanceFieldEnum = (typeof VerificationOrderByRelevanceFieldEnum)[keyof typeof VerificationOrderByRelevanceFieldEnum];
export declare const SelectionOrderByRelevanceFieldEnum: {
    readonly notes: "notes";
};
export type SelectionOrderByRelevanceFieldEnum = (typeof SelectionOrderByRelevanceFieldEnum)[keyof typeof SelectionOrderByRelevanceFieldEnum];
