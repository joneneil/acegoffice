import { useQuery } from '@tanstack/react-query';
import { employeeApi, attendanceApi, financeApi } from '@/lib/api';
import type { Employee, AttendanceRecord, PettyCash, Reimbursement } from '@/types';

export function useEmployees() {
  return useQuery({
    queryKey: ['employees'],
    queryFn: () => employeeApi.getAll()
  });
}

export function useEmployee(id: string) {
  return useQuery({
    queryKey: ['employee', id],
    queryFn: () => employeeApi.getById(id)
  });
}

export function useAttendance(employeeId: string) {
  return useQuery({
    queryKey: ['attendance', employeeId],
    queryFn: () => attendanceApi.getByEmployeeId(employeeId)
  });
}

export function usePettyCash(employeeId?: string) {
  return useQuery({
    queryKey: ['pettyCash', employeeId],
    queryFn: () => financeApi.getPettyCash(employeeId)
  });
}

export function useReimbursements(employeeId?: string) {
  return useQuery({
    queryKey: ['reimbursements', employeeId],
    queryFn: () => financeApi.getReimbursements(employeeId)
  });
} 