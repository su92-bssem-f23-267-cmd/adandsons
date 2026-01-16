import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface ExportPDFProps {
    title: string;
    columns: string[];
    data: any[][];
    filename?: string;
    orientation?: 'portrait' | 'landscape';
}

export const exportToPDF = ({
    title,
    columns,
    data,
    filename = 'report',
    orientation = 'portrait'
}: ExportPDFProps) => {
    const doc = new jsPDF({
        orientation: orientation,
        unit: 'mm',
        format: 'a4'
    });

    // Company Header
    const companyName = "AD & Sons";
    const companyTagline = "Agri Traders";
    const currentDate = new Date().toLocaleDateString();

    // Draw Header Background
    doc.setFillColor(16, 185, 129); // Emerald 500
    doc.rect(0, 0, doc.internal.pageSize.width, 25, 'F');

    // Company Name
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.text(companyName, 15, 15);

    // Tagline
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(companyTagline, 15, 21);

    // Report Title & Date
    doc.setTextColor(51, 65, 85); // Slate 700
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text(title, 15, 40);

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`Generated on: ${currentDate}`, doc.internal.pageSize.width - 15, 40, { align: 'right' });

    // Table
    autoTable(doc, {
        head: [columns],
        body: data,
        startY: 45,
        theme: 'grid',
        headStyles: {
            fillColor: [16, 185, 129], // Emerald 500
            textColor: 255,
            fontSize: 10,
            fontStyle: 'bold',
            halign: 'center'
        },
        bodyStyles: {
            fontSize: 9,
            textColor: 50
        },
        alternateRowStyles: {
            fillColor: [240, 253, 244] // Emerald 50
        },
        margin: { top: 45 },
        didDrawPage: (data) => {
            // Add page number at bottom
            const pageCount = doc.getNumberOfPages();
            doc.setFontSize(8);
            doc.setTextColor(150);
            doc.text(
                `Page ${pageCount}`,
                doc.internal.pageSize.width / 2,
                doc.internal.pageSize.height - 10,
                { align: 'center' }
            );
        }
    });

    // Save File
    doc.save(`${filename}_${new Date().getTime()}.pdf`);
};
