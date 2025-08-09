import { clientOfPrisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import SizeBookForm from './size-book-form';

type TSizeBookViewPageProps = {
  sizeBookId: string;
};

export default async function SizeBookViewPage({
  sizeBookId
}: TSizeBookViewPageProps) {
  let sizeBook = null;
  let pageTitle = 'Create New Customer';

  if (sizeBookId !== 'new') {
    try {
      sizeBook = await clientOfPrisma.sizeBook.findUnique({
        where: { id: sizeBookId }
      });

      if (!sizeBook) {
        notFound();
      }
      pageTitle = `Edit Customer: ${sizeBook.name}`;
    } catch (error) {
      console.error('Error fetching customer:', error);
      notFound();
    }
  }

  return <SizeBookForm initialData={sizeBook} pageTitle={pageTitle} />;
}
