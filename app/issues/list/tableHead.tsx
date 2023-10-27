import React from 'react';
import { Table } from '@radix-ui/themes';
import { ArrowUpIcon } from '@radix-ui/react-icons';
import NextLink from 'next/link';
import { Issue, Status } from '@prisma/client';

export default function tableHead() {
  const columns: {
    label: string;
    value: keyof Issue;
    className?: string;
  }[] = [
    { label: 'Issue', value: 'title' },
    {
      label: 'Status',
      value: 'status',
      className: 'hidden md:table-cell',
    },
    {
      label: 'Created',
      value: 'createdAt',
      className: 'hidden md:table-cell',
    },
  ];
  return (
    <>
      <Table.Row>
        {columns.map((column) => (
          <Table.ColumnHeaderCell key={column.value}>
            <NextLink
              href={{
                query: { ...searchParams, orderBy: column.value },
              }}
            >
              {column.label}
            </NextLink>
            {column.value === searchParams.orderBy && (
              <ArrowUpIcon className="inline" />
            )}
          </Table.ColumnHeaderCell>
        ))}
      </Table.Row>
    </>
  );
}
