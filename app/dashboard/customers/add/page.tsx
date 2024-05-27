import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";

export default function Page() {
  return (
    <main>
      <Breadcrumbs breadcrumbs={[
        {label: 'Customers', href: '/dashboard/customers'},
        {label: 'Add Customer', href: '/dashboard/customers/add', active: true},
      ]}/>
    </main>
  );
};