import React, { useState } from 'react';
import { Form, CheckboxControl } from '@openedx/paragon';
import { useIntl } from '@edx/frontend-platform/i18n';
import { DISCUSSION_VISIBILITY_TYPES } from '../../data/constants';
import messages from './messages';

const TopicEditor = ({
  onSave,
  initialData,
  isEditing,
  hasStaffAccess,
}) => {
  const intl = useIntl();
  const [formData, setFormData] = useState(initialData || {
    visibility: DISCUSSION_VISIBILITY_TYPES.IMMEDIATE,
  });
  
  return (
    <Form>
      {/* Existing form fields */}
      
      {hasStaffAccess && (
        <Form.Group>
          <CheckboxControl
            name="postFirstVisibility"
            label={intl.formatMessage(messages.postFirstVisibilityLabel)}
            description={intl.formatMessage(messages.postFirstVisibilityDescription)}
            onChange={(checked) => {
              setFormData(prev => ({
                ...prev,
                visibility: checked ? 
                  DISCUSSION_VISIBILITY_TYPES.POST_FIRST : 
                  DISCUSSION_VISIBILITY_TYPES.IMMEDIATE
              }));
            }}
            checked={formData.visibility === DISCUSSION_VISIBILITY_TYPES.POST_FIRST}
          />
        </Form.Group>
      )}
      
      {/* Save button etc. */}
    </Form>
  );
};

export default TopicEditor; 