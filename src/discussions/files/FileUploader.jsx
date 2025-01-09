import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from '@openedx/paragon';
import { FileUpload } from '@openedx/paragon/icons';
import { useIntl } from '@edx/frontend-platform/i18n';

import { ALLOWED_FILE_TYPES, MAX_UPLOAD_FILE_SIZE, SUPPORTED_FILE_FORMATS } from '../../data/constants';
import { uploadDiscussionFile } from './data/api';
import messages from './messages';

const FileUploader = ({
  courseId,
  threadId,
  onUploadComplete,
  onError,
}) => {
  const intl = useIntl();
  const [isUploading, setIsUploading] = useState(false);

  const handleFileSelect = useCallback(async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Validate file type
    if (!Object.keys(ALLOWED_FILE_TYPES).includes(file.type)) {
      onError(intl.formatMessage(messages.invalidFileType));
      return;
    }

    // Validate file size
    if (file.size > MAX_UPLOAD_FILE_SIZE) {
      onError(intl.formatMessage(messages.fileTooLarge, { maxSize: MAX_UPLOAD_FILE_SIZE / (1024 * 1024) }));
      return;
    }

    setIsUploading(true);
    try {
      const response = await uploadDiscussionFile(file, courseId, threadId);
      onUploadComplete(response.url, file.name);
    } catch (error) {
      onError(intl.formatMessage(messages.uploadError));
      console.error('File upload failed:', error);
    } finally {
      setIsUploading(false);
    }
  }, [courseId, threadId, onUploadComplete, onError, intl]);

  return (
    <div className="file-uploader">
      <input
        type="file"
        accept={SUPPORTED_FILE_FORMATS}
        onChange={handleFileSelect}
        style={{ display: 'none' }}
        id="file-upload-input"
      />
      <Button
        variant="primary"
        iconBefore={FileUpload}
        onClick={() => document.getElementById('file-upload-input').click()}
        disabled={isUploading}
      >
        {isUploading 
          ? intl.formatMessage(messages.uploading)
          : intl.formatMessage(messages.uploadFile)
        }
      </Button>
    </div>
  );
};

FileUploader.propTypes = {
  courseId: PropTypes.string.isRequired,
  threadId: PropTypes.string,
  onUploadComplete: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
};

export default FileUploader; 