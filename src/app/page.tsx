import React from 'react';

import { Container, Section } from '@/components/content';
import DataTable from '@/components/data-table/DataTable';

import { API } from '@/services/api.service';
import type { Employee } from '@/types/employees';
import type { Column } from '@/types/table';

export default async function Home() {
  const { data } = await API.employee.retriveAllEmployees();

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
    {
      key: 'custom',
      header: 'Actions',
      render: () => {
        return (
          <div className="flex space-x-2">
            <button className="rounded-sm bg-blue-50 px-2 py-1" type="button">
              View
            </button>
            <button className="rounded-sm bg-orange-50 px-2 py-1" type="button">
              Edit
            </button>
            <button className="rounded-sm bg-red-50 px-2 py-1" type="button">
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <Section>
      <Container>
        <DataTable data={data} columns={columns}>
          <p className="bg-green-50 p-4 text-center">Data not found.</p>
        </DataTable>
      </Container>
    </Section>
  );
}
