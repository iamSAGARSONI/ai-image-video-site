'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaCloudUploadAlt } from 'react-icons/fa';

const FileUpload = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setUploadedFile(acceptedFiles[0]);
    // TODO: Upload file to backend API
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg'],
      'video/*': ['.mp4', '.mov'],
    },
  });

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-purple-500 p-8 text-center cursor-pointer hover:bg-gray-700 transition-colors"
      >
        <input {...getInputProps()} />
        <FaCloudUploadAlt className="text-6xl text-purple-500 mx-auto" />
        <p className="mt-4 text-lg">Drag & drop an image or video, or click to upload</p>
      </div>
      {uploadedFile && (
        <div className="mt-4">
          <p className="text-sm">Uploaded file: {uploadedFile.name}</p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;