'use client';
import { DataTableColumnHeader } from '@/components/ui/table/data-table-column-header';
import { ICustomer } from '@/types/customer';
import { Column, ColumnDef } from '@tanstack/react-table';
import { Text, Phone } from 'lucide-react';
import { CellAction } from './cell-action';

export const columns: ColumnDef<ICustomer>[] = [
  {
    id: 'name',
    accessorKey: 'name',
    header: ({ column }: { column: Column<ICustomer, unknown> }) => (
      <DataTableColumnHeader column={column} title='Name' />
    ),
    cell: ({ cell }) => <div>{cell.getValue<ICustomer['name']>()}</div>,
    meta: {
      label: 'Name',
      placeholder: 'Search customer...',
      variant: 'text',
      icon: Text
    },
    enableColumnFilter: true
  },
  {
    id: 'phone',
    accessorKey: 'phone',
    header: ({ column }: { column: Column<ICustomer, unknown> }) => (
      <DataTableColumnHeader column={column} title='Phone' />
    ),
    cell: ({ cell }) => <div>{cell.getValue<ICustomer['phone']>()}</div>,
    enableColumnFilter: true,
    meta: {
      label: 'Phone',
      placeholder: 'Search phone...',
      variant: 'text',
      icon: Phone
    }
  },
  {
    accessorKey: 'address',
    header: 'Address'
  },
  {
    accessorKey: 'notes',
    header: 'Notes'
  },
  {
    id: 'actions',
    header: () => <div className='text-right'>Actions</div>,
    cell: ({ row }) => (
      <div className='flex justify-end'>
        <CellAction data={row.original} />
      </div>
    )
  }
];
