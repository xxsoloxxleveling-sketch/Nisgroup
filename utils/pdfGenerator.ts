import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface QuoteDetails {
    service: string;
    property: string;
    area: number;
    includeMaterial: boolean;
    minPrice: number;
    maxPrice: number;
}

const loadImage = (url: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(img);
        img.onerror = (err) => reject(err);
    });
};

export const generateQuotePDF = async (details: QuoteDetails) => {
    const doc = new jsPDF();

    // --- Header ---
    // Brand Color Strip
    doc.setFillColor(200, 16, 46); // Brand Red
    doc.rect(0, 0, 210, 5, 'F');

    // Logo / Company Name
    try {
        const logoImg = await loadImage('/images/logo.png');
        // Calculate aspect ratio to fit height of approx 15-20 units
        const imgHeight = 20;
        const imgWidth = (logoImg.width / logoImg.height) * imgHeight;
        doc.addImage(logoImg, 'PNG', 20, 15, imgWidth, imgHeight);
    } catch (error) {
        console.error("Failed to load logo", error);
        // Fallback to text if image fails
        doc.setFontSize(24);
        doc.setTextColor(20, 20, 20);
        doc.setFont('helvetica', 'bold');
        doc.text('NIS', 20, 25);
    }

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    // Adjusted y position slightly to account for image
    doc.setTextColor(100, 100, 100);
    doc.text('National Integrated Services', 20, 40);
    doc.text('Muscat, Sultanate of Oman', 20, 45);
    doc.text('contact@nis-oman.com | +968 9000 0000', 20, 50);

    // Quote Title
    doc.setFontSize(18);
    doc.setTextColor(200, 16, 46);
    doc.text('ESTIMATE SUMMARY', 140, 25);

    // Date
    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 140, 32);
    doc.text(`Ref: EST-${Math.floor(Math.random() * 10000)}`, 140, 37);

    // --- Project Details ---
    const contentStartY = 60;
    doc.setDrawColor(200, 200, 200);
    doc.line(20, contentStartY, 190, contentStartY);

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'bold');
    doc.text('Project Parameters', 20, contentStartY + 10);

    autoTable(doc, {
        startY: contentStartY + 15,
        head: [['Parameter', 'Selected Option']],
        body: [
            ['Service Type', details.service],
            ['Property Type', details.property],
            ['Approx Area / Units', `${details.area} ${details.service === 'AC' ? 'Units' : 'sqm'}`],
            ['Includes Materials', details.includeMaterial ? 'Yes' : 'No (Labor Only)'],
        ],
        theme: 'striped',
        headStyles: { fillColor: [200, 16, 46] },
        styles: { fontSize: 10, cellPadding: 5 },
    });

    // --- Price Estimate ---
    const finalY = (doc as any).lastAutoTable.finalY + 20;

    doc.setFillColor(245, 245, 245);
    doc.setDrawColor(200, 200, 200);
    doc.roundedRect(20, finalY, 170, 40, 3, 3, 'FD');

    doc.setFontSize(11);
    doc.setTextColor(100, 100, 100);
    doc.text('Estimated Price Range:', 30, finalY + 15);

    doc.setFontSize(22);
    doc.setTextColor(200, 16, 46);
    doc.setFont('helvetica', 'bold');
    doc.text(`OMR ${details.minPrice}  -  OMR ${details.maxPrice}`, 30, finalY + 28);

    // --- Footer / Disclaimer ---
    doc.setFontSize(8);
    doc.setTextColor(120, 120, 120);
    doc.setFont('helvetica', 'italic');
    doc.text(
        'Disclaimer: This is an automated estimate for informational purposes only and does not constitute a formal quotation. Final pricing is subject to a free site inspection.',
        20,
        finalY + 55,
        { maxWidth: 170 }
    );

    doc.setFont('helvetica', 'normal');
    doc.text('Thank you for considering NIS for your project.', 20, finalY + 70);

    // Save
    doc.save('NIS-Cost-Estimate.pdf');
};
