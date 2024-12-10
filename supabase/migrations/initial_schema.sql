-- 员工信息表
create table public.employees (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users on delete cascade,
  name text not null,
  department text not null,
  position text not null,
  entry_date date not null,
  phone text,
  emergency_contact text,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- 考勤记录表
create table public.attendance_records (
  id uuid default uuid_generate_v4() primary key,
  employee_id uuid references public.employees(id),
  check_in timestamp with time zone,
  check_out timestamp with time zone,
  status text, -- 正常、迟到、早退、请假等
  note text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- 备用金借支表
create table public.petty_cash (
  id uuid default uuid_generate_v4() primary key,
  employee_id uuid references public.employees(id),
  amount decimal(10,2) not null,
  purpose text not null,
  status text not null, -- 待审批、已批准、已拒绝、已还款
  request_date timestamp with time zone default timezone('utc'::text, now()),
  approve_date timestamp with time zone,
  repayment_date timestamp with time zone,
  note text
);

-- 报销记录表
create table public.reimbursements (
  id uuid default uuid_generate_v4() primary key,
  employee_id uuid references public.employees(id),
  amount decimal(10,2) not null,
  category text not null,
  status text not null, -- 待审批、已批准、已拒绝、已支付
  request_date timestamp with time zone default timezone('utc'::text, now()),
  approve_date timestamp with time zone,
  payment_date timestamp with time zone,
  note text
); 