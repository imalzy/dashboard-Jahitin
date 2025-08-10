import { clientOfPrisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// GET single customer
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const customerId = url.pathname.split('/').at(-1); // last segment

  try {
    const customer = await clientOfPrisma.customer.findUnique({
      where: { id: customerId }
    });

    if (!customer) {
      return NextResponse.json(
        { error: 'Customer not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(customer);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching customer:', error);
    return NextResponse.json(
      { error: 'Failed to fetch customer' },
      { status: 500 }
    );
  }
}

// UPDATE customer
export async function PUT(req: NextRequest) {
  const url = new URL(req.url);
  const customerId = url.pathname.split('/').at(-1); // last segment

  try {
    const body = await req.json();

    // Check if customer exists
    const existingCustomer = await clientOfPrisma.customer.findUnique({
      where: { id: customerId }
    });

    if (!existingCustomer) {
      return NextResponse.json(
        { error: 'Customer not found' },
        { status: 404 }
      );
    }

    // Update customer
    const updatedCustomer = await clientOfPrisma.customer.update({
      where: { id: customerId },
      data: {
        name: body.name,
        phone: body.phone,
        address: body.address || null,
        notes: body.notes || null
      }
    });

    return NextResponse.json(updatedCustomer);
  } catch (error) {
    console.error('Error updating customer:', error);
    return NextResponse.json(
      { error: 'Failed to update customer' },
      { status: 500 }
    );
  }
}

// DELETE customer
export async function DELETE(req: NextRequest) {
  const url = new URL(req.url);
  const customerId = url.pathname.split('/').at(-1); // last segment

  try {
    // Check if customer exists
    const existingCustomer = await clientOfPrisma.customer.findUnique({
      where: { id: customerId }
    });

    if (!existingCustomer) {
      return NextResponse.json(
        { error: 'Customer not found' },
        { status: 404 }
      );
    }

    // Delete customer
    await clientOfPrisma.customer.delete({
      where: { id: customerId }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting customer:', error);
    return NextResponse.json(
      { error: 'Failed to delete customer' },
      { status: 500 }
    );
  }
}
