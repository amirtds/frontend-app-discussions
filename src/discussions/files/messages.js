import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  uploadFile: {
    id: 'discussions.upload.button',
    defaultMessage: 'Upload File',
    description: 'Button text for file upload',
  },
  uploading: {
    id: 'discussions.upload.inProgress',
    defaultMessage: 'Uploading...',
    description: 'Button text while file is uploading',
  },
  invalidFileType: {
    id: 'discussions.upload.error.invalidType',
    defaultMessage: 'Invalid file type. Supported formats: PDF, DOC, DOCX, TXT',
    description: 'Error message for invalid file type',
  },
  fileTooLarge: {
    id: 'discussions.upload.error.tooLarge',
    defaultMessage: 'File size must not exceed {maxSize}MB',
    description: 'Error message for file size exceeding limit',
  },
  uploadError: {
    id: 'discussions.upload.error.generic',
    defaultMessage: 'Failed to upload file. Please try again.',
    description: 'Generic error message for file upload failure',
  },
});

export default messages; 