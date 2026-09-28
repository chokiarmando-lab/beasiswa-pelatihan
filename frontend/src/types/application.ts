export interface Application {

  id?: number;

  userId: number;

  scholarshipId: number;

  status:
  | "DRAFT"
  | "SUBMITTED"
  | "VERIFICATION"
  | "REVISION"
  | "VERIFIED"
  | "REJECTED"
  | "SELECTED"
  | "NOT_SELECTED";

}