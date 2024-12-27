import React from 'react';

import { Container, Section } from '@/components/content';
import DataTable from '@/components/data-table/DataTable';

import { API } from '@/services/api.service';

import EmployeeColumns from './_components/employee-columns';

export default async function Home() {
  const { data } = await API.employee.retriveAllEmployees();

  return (
    <Section>
      <Container>
        <DataTable
          data={data}
          columns={EmployeeColumns({ userRole: 'Super Admin' })}
        >
          <p className="bg-green-50 p-4 text-center">Data not found.</p>
        </DataTable>
      </Container>
    </Section>
  );
}
