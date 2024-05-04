export type ResponseData<T> =
  | {
      responseData: T;
      error: undefined;
    }
  | {
      responseData: undefined;
      error: unknown;
    };

export interface SignaruteRequested {
  about_to_expire_reminder: boolean;
  completed_on: any;
  created: string;
  disable_notifications: any;
  email: string;
  expires: string;
  language: string;
  lock_order: boolean;
  mode: string;
  name: string;
  notes: any;
  signer_reminder_days_cycle: number;
  signer_reminders: boolean;
  subject_cc: any;
  subject_signer: any;
  timezone: any;
  token_requester: string;
  uuid: string;
  uuid_visible: boolean;
  verify_enabled: boolean;
  expired: boolean;
  expiring: boolean;
  signers: Signer[];
  files: File[];
  certified: boolean;
  status: string;
}

export interface Signer {
  uuid: string;
  name: string;
  email: string;
  phone: any;
  type: string;
  token_requester: string;
  status: string;
  access_code: boolean;
  phone_access_code: boolean;
  force_signature_type: string;
  notes: any;
}

export interface File {
  filename: string;
  pages: number;
  filesize: number;
}
