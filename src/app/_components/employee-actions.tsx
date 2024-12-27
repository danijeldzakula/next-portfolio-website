'use client';

import React from 'react';

import type { Employee } from '@/types/employees';

export default function EmployeeActions({ row }: { row: Employee }) {
  const handleClick = (row: Employee) => {
    console.log(row.id);
  };

  return (
    <div className="flex space-x-2">
      <button className="rounded-sm bg-blue-50 px-2 py-1" type="button">
        View
      </button>
      <button className="rounded-sm bg-orange-50 px-2 py-1" type="button">
        Edit
      </button>
      <button
        className="rounded-sm bg-red-50 px-2 py-1"
        type="button"
        onClick={() => handleClick(row)}
      >
        Delete
      </button>
    </div>
  );
}
