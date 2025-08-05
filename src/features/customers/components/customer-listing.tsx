import { searchParamsCache } from '@/lib/searchparams';
import { CustomerTable } from './customer-tables';
import { columns } from './customer-tables/columns';
import { ICustomer } from '@/types/customer';
import { clientOfPrisma } from '@/lib/prisma';

type CustomerListingPage = {};

export default async function CustomerListingPage({}: CustomerListingPage) {
  // Showcasing the use of search params cache in nested RSCs
  const page = Number(searchParamsCache.get('page') ?? '1');
  const search = searchParamsCache.get('name') ?? '';
  const pageLimit = Number(searchParamsCache.get('perPage') ?? '10');

  try {
    // Calculate pagination
    const skip = (page - 1) * pageLimit;

    // Build search filter if needed
    const where = search
      ? {
          OR: [
            { name: { contains: search, mode: 'insensitive' } },
            { phone: { contains: search, mode: 'insensitive' } }
          ]
        }
      : {};

    // Fetch data directly from the database
    const [customers, totalCustomers] = await Promise.all([
      clientOfPrisma.customer.findMany({
        skip,
        take: pageLimit,
        orderBy: { createdAt: 'desc' },
        where
      }),
      clientOfPrisma.customer.count({ where })
    ]);

    return (
      <CustomerTable
        data={customers}
        totalItems={totalCustomers}
        columns={columns}
      />
    );
  } catch (error) {
    console.error('Failed to fetch customers:', error);
    return (
      <CustomerTable
        data={[]}
        totalItems={0}
        columns={columns}
        error='Failed to load customers. Please try again.'
      />
    );
  }
}
