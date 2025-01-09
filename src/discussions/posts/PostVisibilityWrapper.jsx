import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Alert } from '@openedx/paragon';

import { DISCUSSION_VISIBILITY_TYPES } from '../../data/constants';
import { getThreadVisibility, hasUserPosted } from './data/api';
import messages from './messages';

const PostVisibilityWrapper = ({
  courseId,
  threadId,
  children,
}) => {
  const [visibility, setVisibility] = useState(DISCUSSION_VISIBILITY_TYPES.IMMEDIATE);
  const [userHasPosted, setUserHasPosted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const intl = useIntl();

  useEffect(() => {
    const loadVisibilityData = async () => {
      try {
        const [visibilityData, userParticipation] = await Promise.all([
          getThreadVisibility(courseId, threadId),
          hasUserPosted(courseId, threadId),
        ]);
        
        setVisibility(visibilityData.visibility_type);
        setUserHasPosted(userParticipation);
      } catch (error) {
        console.error('Failed to load visibility data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadVisibilityData();
  }, [courseId, threadId]);

  if (isLoading) {
    return null;
  }

  if (visibility === DISCUSSION_VISIBILITY_TYPES.POST_FIRST && !userHasPosted) {
    return (
      <div className="discussion-visibility-wrapper">
        <Alert variant="info">
          <h3>{intl.formatMessage(messages.postFirstTitle)}</h3>
          <p>{intl.formatMessage(messages.postFirstDescription)}</p>
        </Alert>
        {React.Children.map(children, child => {
          if (child.type.name === 'PostEditor') {
            return child;
          }
          return null;
        })}
      </div>
    );
  }

  return children;
};

PostVisibilityWrapper.propTypes = {
  courseId: PropTypes.string.isRequired,
  threadId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PostVisibilityWrapper; 