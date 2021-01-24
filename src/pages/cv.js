import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Button } from '../components';

export default function CV() {
  return (
    <section
      style={{
        border: '1px solid rgba(0, 0, 0, 0.3)',
      }}
    >
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js">
        <Viewer fileUrl="/files/CV.pdf" />
      </Worker>
      <Button to="/">Go Back</Button>
    </section>
  );
}
