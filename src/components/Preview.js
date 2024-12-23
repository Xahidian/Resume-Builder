const Preview = ({ sections, personalInfo, onEditSection, onDeleteSection }) => {
  return (
    <div>
      {/* For PDF Generation */}
      <div
        id="pdf-preview-container"
        style={{
          padding: '20px',
          backgroundColor: '#fff',
          color: '#000',
          fontFamily: 'Calibri, Arial, sans-serif',
          lineHeight: '1.5',
        }}
      >
        {/* Personal Information Section */}
        {personalInfo && (
          <div style={{ marginBottom: '20px' }}>
            <h1
              style={{
                fontSize: '20px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                textAlign: 'center',
              }}
            >
              {personalInfo.name}
            </h1>
            <p style={{ textAlign: 'center', margin: '5px 0', fontSize: '16px' }}>
              {personalInfo.address}
            </p>
            <p style={{ textAlign: 'center', margin: '5px 0', fontSize: '16px' }}>
              <a href={personalInfo.linkedin} style={{ textDecoration: 'none', color: '#0000EE' }}>
                LinkedIn
              </a>{' '}
              |{' '}
              <a href={personalInfo.github} style={{ textDecoration: 'none', color: '#0000EE' }}>
                GitHub
              </a>{' '}
              | {personalInfo.phone} | {personalInfo.email}
            </p>
            <hr style={{ border: '0', borderTop: '2px solid #000', margin: '10px 0' }} />
          </div>
        )}

        {/* Sections */}
        {sections.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#888' }}>No sections available.</p>
        ) : (
          sections.map((section, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <h4
                style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  borderBottom: '1px solid #ddd',
                  paddingBottom: '5px',
                }}
              >
                {section.title}
              </h4>
              <p style={{ marginTop: '10px', fontSize: '16px' }}>{section.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Preview;
