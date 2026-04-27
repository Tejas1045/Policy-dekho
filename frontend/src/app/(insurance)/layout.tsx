import NavBar from '@/components/shared/NavBar';
import type { ReactNode } from 'react';

export default function InsuranceLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen">
            <NavBar />
            <main className="pt-16 p-4">{children}</main>
        </div>
    );
}