import React, { useState } from 'react';
import SectionEditor from '../components/SectionEditor';
import Preview from '../components/Preview';
import PersonalInfoEditor from '../components/PersonalInfoEditor';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const MainApp = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    linkedin: '',
    github: '',
  }); // Default state for personal info
  const [sections, setSections] = useState([]); // Sections state

  const saveSection = (section) => {
    setSections([...sections, section]); // Add new section
  };

  const openAsPDF = () => {
    const content = document.getElementById('pdf-preview-container');

    if (!content) {
      alert('No content to generate PDF');
      return;
    }

    html2canvas(content, { scale: 2, useCORS: true })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pageWidth = pdf.internal.pageSize.getWidth();
        const imgWidth = pageWidth - 20;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
        const pdfBlob = pdf.output('blob');
        const pdfURL = URL.createObjectURL(pdfBlob);
        window.open(pdfURL, '_blank');
      })
      .catch((error) => {
        console.error('PDF Generation Error:', error);
        alert('An error occurred while generating the PDF.');
      });
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Personal Info Section */}
      <div style={{ marginBottom: '20px' }}>
        <PersonalInfoEditor personalInfo={personalInfo} onSave={setPersonalInfo} />
      </div>

      {/* Add and Preview Section */}
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ flex: 1 }}>
          <SectionEditor onSaveSection={saveSection} />
        </div>
        <div style={{ flex: 1 }}>
          <Preview sections={sections} personalInfo={personalInfo} />
        </div>
      </div>

      {/* PDF Button */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          onClick={openAsPDF}
          style={{
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
        >
          View Portfolio as PDF
        </button>
      </div>
    </div>
  );
};

export default MainApp;
