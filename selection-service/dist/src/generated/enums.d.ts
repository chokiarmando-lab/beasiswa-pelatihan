export declare const VerificationStatus: {
    readonly PENDING: "PENDING";
    readonly VERIFIED: "VERIFIED";
    readonly REVISION: "REVISION";
    readonly REJECTED: "REJECTED";
};
export type VerificationStatus = (typeof VerificationStatus)[keyof typeof VerificationStatus];
export declare const SelectionStatus: {
    readonly PENDING: "PENDING";
    readonly SELECTED: "SELECTED";
    readonly NOT_SELECTED: "NOT_SELECTED";
};
export type SelectionStatus = (typeof SelectionStatus)[keyof typeof SelectionStatus];
