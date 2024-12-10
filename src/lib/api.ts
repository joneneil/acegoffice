import { supabase } from './supabase';
import type { Employee, AttendanceRecord, PettyCash, Reimbursement } from '@/types';

export const employeeApi = {
  async getAll() {
    const { data, error } = await supabase
      .from('employees')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data as Employee[];
  },

  async getById(id: string) {
    const { data, error } = await supabase
      .from('employees')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data as Employee;
  }
};

export const attendanceApi = {
  async getByEmployeeId(employeeId: string) {
    const { data, error } = await supabase
      .from('attendance_records')
      .select('*')
      .eq('employee_id', employeeId)
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data as AttendanceRecord[];
  }
};

export const financeApi = {
  async getPettyCash(employeeId?: string) {
    let query = supabase.from('petty_cash').select('*');
    if (employeeId) {
      query = query.eq('employee_id', employeeId);
    }
    const { data, error } = await query.order('request_date', { ascending: false });
    if (error) throw error;
    return data as PettyCash[];
  },

  async getReimbursements(employeeId?: string) {
    let query = supabase.from('reimbursements').select('*');
    if (employeeId) {
      query = query.eq('employee_id', employeeId);
    }
    const { data, error } = await query.order('request_date', { ascending: false });
    if (error) throw error;
    return data as Reimbursement[];
  }
}; 