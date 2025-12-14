import React from 'react';
import { Download, ShieldCheck, FileCheck } from 'lucide-react';
import { Button } from '../UI/Button';

export const Downloads: React.FC = () => {
    return (
        <section className="py-12 bg-white/5 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Company Resources</h3>
                        <p className="text-gray-400 text-sm">Download our profiles and policies for your reference.</p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <Button variant="outline" size="sm" className="gap-2">
                            <Download className="w-4 h-4" />
                            Company Profile
                        </Button>
                        <Button variant="outline" size="sm" className="gap-2">
                            <ShieldCheck className="w-4 h-4" />
                            HSE Policy
                        </Button>
                        <Button variant="outline" size="sm" className="gap-2">
                            <FileCheck className="w-4 h-4" />
                            Trade License
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
