import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { employeeApi, attendanceApi, financeApi } from '@/lib/api';
import type { Employee, AttendanceRecord, PettyCash, Reimbursement } from '@/types';

export function useEmployees() {
  return useQuery(['employees'], () => employeeApi.getAll());
}

export function useEmployee(id: string) {
  return useQuery(['employee', id], () => employeeApi.getById(id));
}

export function useAttendance(employeeId: string) {
  return useQuery(
    ['attendance', employeeId], 
    () => attendanceApi.getByEmployeeId(employeeId)
  );
}

export function usePettyCash(employeeId?: string) {
  return useQuery(
    ['pettyCash', employeeId], 
    () => financeApi.getPettyCash(employeeId)
  );
}

export function useReimbursements(employeeId?: string) {
  return useQuery(
    ['reimbursements', employeeId], 
    () => financeApi.getReimbursements(employeeId)
  );
} 