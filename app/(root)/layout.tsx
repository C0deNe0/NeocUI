import Header from '@/components/landing/Header';
import Footer from '@/components/layout/Footer';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: {
        template: 'NeoC UI = openSouce Components',
        default: 'NeoC UI',
    },
};

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <main className="relative w-full pt-0 md:pt-0">{children}</main>

            <Footer />
        </>
    );
}
