export interface Employee {
  id: string;
  user_id: string;
  name: string;
  department: string;
  position: string;
  entry_date: string;
  phone?: string;
  emergency_contact?: string;
  created_at: string;
  updated_at: string;
}

export interface AttendanceRecord {
  id: string;
  employee_id: string;
  check_in: string;
  check_out: string;
  status: 'normal' | 'late' | 'early' | 'leave';
  note?: string;
  created_at: string;
}

export interface PettyCash {
  id: string;
  employee_id: string;
  amount: number;
  purpose: string;
  status: 'pending' | 'approved' | 'rejected' | 'repaid';
  request_date: string;
  approve_date?: string;
  repayment_date?: string;
  note?: string;
}

export interface Reimbursement {
  id: string;
  employee_id: string;
  amount: number;
  category: string;
  status: 'pending' | 'approved' | 'rejected' | 'paid';
  request_date: string;
  approve_date?: string;
  payment_date?: string;
  note?: string;
} 