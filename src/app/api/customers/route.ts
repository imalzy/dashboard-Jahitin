import { clientOfPrisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');

  const skip = (page - 1) * limit;

  try {
    const [customers, total] = await Promise.all([
      clientOfPrisma.customer.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' }
      }),
      clientOfPrisma.customer.count()
    ]);

    return NextResponse.json({
      data: customers,
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching customers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch customers' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const customer = await clientOfPrisma.customer.create({
      data: {
        name: body.name,
        phone: body.phone,
        address: body.address || null,
        notes: body.notes || null
      }
    });
    return NextResponse.json(customer);
  } catch (error) {
    console.error('Error creating customer:', error);
    return NextResponse.json(
      { error: 'Failed to create customer' },
      { status: 500 }
    );
  }
}
