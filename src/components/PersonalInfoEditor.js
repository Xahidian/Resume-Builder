import React, { useState, useEffect } from 'react';

const PersonalInfoEditor = ({ personalInfo, onSave }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (personalInfo) {
      setName(personalInfo.name || '');
      setAddress(personalInfo.address || '');
      setLinkedin(personalInfo.linkedin || '');
      setGithub(personalInfo.github || '');
      setPhone(personalInfo.phone || '');
      setEmail(personalInfo.email || '');
    }
  }, [personalInfo]);

  const handleSave = () => {
    if (!name.trim() || !email.trim() || !linkedin.trim() || !github.trim()) {
      alert('Name, Email, LinkedIn, and GitHub are required.');
      return;
    }

    onSave({
      name,
      address,
      linkedin,
      github,
      phone,
      email,
    });

    alert('Personal information saved successfully!');
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '10px', backgroundColor: '#fff' }}>
      <h2 style={{ marginBottom: '20px' }}>Personal Information</h2>

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
      />
      <input
        type="text"
        placeholder="LinkedIn URL"
        value={linkedin}
        onChange={(e) => setLinkedin(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
      />
      <input
        type="text"
        placeholder="GitHub URL"
        value={github}
        onChange={(e) => setGithub(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
      />
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
      />
      <button
        onClick={handleSave}
        style={{
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Save Personal Information
      </button>
    </div>
  );
};

export default PersonalInfoEditor;
