import { useRouter } from 'next/router';
import Link from 'next/link';
import { 
  UserGroupIcon, 
  ClockIcon, 
  CurrencyYenIcon, 
  WrenchIcon 
} from '@heroicons/react/24/outline';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const router = useRouter();
  
  const navigation = [
    {
      name: '员工管理',
      href: '/employees',
      icon: UserGroupIcon,
      current: router.pathname.startsWith('/employees')
    },
    {
      name: '考勤管理',
      href: '/attendance',
      icon: ClockIcon,
      current: router.pathname.startsWith('/attendance')
    },
    {
      name: '财务管理',
      icon: CurrencyYenIcon,
      children: [
        { 
          name: '备用金',
          href: '/finance/petty-cash',
          current: router.pathname.startsWith('/finance/petty-cash')
        },
        { 
          name: '报销',
          href: '/finance/reimbursement',
          current: router.pathname.startsWith('/finance/reimbursement')
        }
      ]
    },
    {
      name: '办公工具',
      href: '/tools',
      icon: WrenchIcon,
      current: router.pathname.startsWith('/tools')
    }
  ];

  return (
    <aside 
      className={`${
        open ? 'translate-x-0' : '-translate-x-full'
      } fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform 
      transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static`}
    >
      <nav className="h-full p-4">
        <div className="space-y-1">
          {navigation.map((item) => 
            item.children ? (
              <div key={item.name} className="space-y-1">
                <div className="px-3 py-2 text-sm font-medium text-gray-600">
                  <item.icon className="h-5 w-5 inline-block mr-2" />
                  {item.name}
                </div>
                <div className="ml-4 space-y-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className={`${
                        child.current
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-600 hover:bg-gray-50'
                      } group flex items-center px-3 py-2 text-sm font-medium rounded-md`}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  item.current
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50'
                } group flex items-center px-3 py-2 text-sm font-medium rounded-md`}
              >
                <item.icon className="h-5 w-5 mr-2" />
                {item.name}
              </Link>
            )
          )}
        </div>
      </nav>
    </aside>
  );
} 