import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';

const SectionEditor = ({ onSaveSection, initialData }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || '');
      setContent(initialData.content || '');
    }
  }, [initialData]);

  const handleSave = () => {
    if (!title.trim() || !content.trim()) {
      alert('Both title and content are required.');
      return;
    }

    onSaveSection({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <div
      style={{
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        backgroundColor: '#fff',
      }}
    >
      <h2 style={{ marginBottom: '20px' }}>{initialData ? 'Edit Section' : 'Add Section'}</h2>

      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginBottom: '20px' }}
      />

      <TextField
        label="Content"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ marginBottom: '20px' }}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleSave}
        style={{ marginTop: '10px' }}
      >
        {initialData ? 'Update Section' : 'Add Section'}
      </Button>
    </div>
  );
};

export default SectionEditor;
