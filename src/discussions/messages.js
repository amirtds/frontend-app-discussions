import { defineMessages } from '@edx/frontend-platform/i18n';

export default defineMessages({
  // File Upload Messages
  uploadFile: {
    id: 'discussions.upload.button',
    defaultMessage: 'Upload File',
  },
  uploading: {
    id: 'discussions.upload.inProgress',
    defaultMessage: 'Uploading...',
  },
  invalidFileType: {
    id: 'discussions.upload.error.invalidType',
    defaultMessage: 'Invalid file type. Supported formats: PDF, DOC, DOCX, TXT',
  },
  fileTooLarge: {
    id: 'discussions.upload.error.tooLarge',
    defaultMessage: 'File size must not exceed {maxSize}MB',
  },
  uploadError: {
    id: 'discussions.upload.error.generic',
    defaultMessage: 'Failed to upload file. Please try again.',
  },

  // Visibility Messages
  postFirstTitle: {
    id: 'discussions.visibility.postFirst.title',
    defaultMessage: 'Share your thoughts first',
  },
  postFirstDescription: {
    id: 'discussions.visibility.postFirst.description',
    defaultMessage: 'To see other responses, share your thoughts first by posting in this discussion.',
  },
  postFirstVisibilityLabel: {
    id: 'discussions.topic.postFirst.label',
    defaultMessage: 'Require students to post before seeing responses',
  },
  postFirstVisibilityDescription: {
    id: 'discussions.topic.postFirst.description',
    defaultMessage: 'Students must create a post before they can see other responses in this discussion.',
  },
});
