import React, { useState, useCallback } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const UploadZone = ({ onFileUpload, isAnalyzing }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleDragOver = useCallback((e) => {
    e?.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e?.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e?.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e?.dataTransfer?.files);
    const validFile = files?.find(file => 
      file?.type === 'application/pdf' || 
      file?.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
      file?.type === 'application/msword'
    );
    
    if (validFile) {
      setUploadedFile(validFile);
      onFileUpload(validFile);
    }
  }, [onFileUpload]);

  const handleFileSelect = useCallback((e) => {
    const file = e?.target?.files?.[0];
    if (file) {
      setUploadedFile(file);
      onFileUpload(file);
    }
  }, [onFileUpload]);

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i))?.toFixed(2)) + ' ' + sizes?.[i];
  };

  if (uploadedFile && !isAnalyzing) {
    return (
      <div className="bg-white rounded-xl border-2 border-success/20 p-8 text-center shadow-brand">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle" size={32} className="text-success" />
        </div>
        <h3 className="text-lg font-semibold text-primary mb-2">Resume Uploaded Successfully</h3>
        <p className="text-text-secondary mb-4">
          {uploadedFile?.name} ({formatFileSize(uploadedFile?.size)})
        </p>
        <Button
          variant="outline"
          size="sm"
          iconName="Upload"
          iconPosition="left"
          onClick={() => {
            setUploadedFile(null);
            document.getElementById('resume-upload').value = '';
          }}
        >
          Upload Different Resume
        </Button>
      </div>
    );
  }

  return (
    <div
      className={`relative bg-white rounded-xl border-2 border-dashed transition-all duration-300 p-8 text-center ${
        isDragOver
          ? 'border-secondary bg-secondary/5 shadow-accent'
          : 'border-border hover:border-secondary/50 hover:bg-muted/30'
      } ${isAnalyzing ? 'pointer-events-none opacity-75' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="w-20 h-20 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-6 shadow-brand">
        <Icon name="Upload" size={32} className="text-white" />
      </div>
      <h3 className="text-xl font-semibold text-primary mb-2">
        Your career story starts here
      </h3>
      <p className="text-text-secondary mb-6 max-w-md mx-auto">
        Upload your resume and let our AI analyze your skills, identify opportunities, and map your career resilience potential.
      </p>
      <div className="space-y-4">
        <Button
          variant="default"
          size="lg"
          iconName="FileText"
          iconPosition="left"
          className="btn-brand-accent hover-scale"
          onClick={() => document.getElementById('resume-upload')?.click()}
          disabled={isAnalyzing}
        >
          Choose Resume File
        </Button>
        
        <p className="text-sm text-trust">
          or drag and drop your file here
        </p>
      </div>
      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-center justify-center space-x-6 text-xs text-trust">
          <div className="flex items-center space-x-2">
            <Icon name="FileText" size={16} />
            <span>PDF</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="FileText" size={16} />
            <span>DOC</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="FileText" size={16} />
            <span>DOCX</span>
          </div>
        </div>
        <p className="text-xs text-trust mt-2">Maximum file size: 10MB</p>
      </div>
      <input
        id="resume-upload"
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileSelect}
        className="hidden"
      />
      {isAnalyzing && (
        <div className="absolute inset-0 bg-white/90 rounded-xl flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-secondary border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
            <p className="text-sm font-medium text-primary">Processing your resume...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadZone;