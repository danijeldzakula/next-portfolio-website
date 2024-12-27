import React from 'react';

import type { Employee, UserRole } from '@/types/employees';
import type { Column } from '@/types/table';

import EmployeeActions from './employee-actions';

interface IProps {
  userRole: UserRole;
}

function getRoleSpecificColumns(): Column<Employee>[] {
  return [
    {
      key: 'custom',
      header: 'Actions',
      render: (_, row) => {
        return <EmployeeActions row={row as Employee} />;
      },
    },
  ];
}

export default function EmployeeColumns({ userRole }: IProps) {
  const isAllowedRoles = ['Admin', 'Super Admin'].includes(userRole);

  const columns: Column<Employee>[] = [
    { key: 'id', header: 'ID' },
    { key: 'name', header: 'Name' },
    {
      key: 'email',
      header: 'Email',
      render: (email, row) => {
        return <a href={`mailto:${email}`}>{row?.email}</a>;
      },
    },
    { key: 'role', header: 'Role' },
    { key: 'address', header: 'Address' },
    ...(isAllowedRoles ? getRoleSpecificColumns() : []),
  ];

  return columns;
}
