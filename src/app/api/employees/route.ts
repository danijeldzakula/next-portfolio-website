import { NextResponse } from 'next/server';

import employeeData from '@/shared/employees.json';

export async function GET() {
  return NextResponse.json({
    data: employeeData,
    status: 200,
    messsage: 'Success',
  });
}
