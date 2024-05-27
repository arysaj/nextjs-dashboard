import { Metadata } from "next";
import Table from "@/app/ui/customers/table"
import { fetchCustomers, fetchFilteredCustomers } from "@/app/lib/data";

export const metadata: Metadata = {
    title: 'Customers',
};

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
    };
}) {
    const query = searchParams?.query || '';
    return (
        <Table query={query}/>
    );
}