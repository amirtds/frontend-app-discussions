import { getConfig } from '@edx/frontend-platform';
import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';

export async function uploadDiscussionFile(file, courseId, threadId = null) {
  const client = getAuthenticatedHttpClient();
  const formData = new FormData();
  formData.append('file', file);

  const url = `${getConfig().LMS_BASE_URL}/api/discussion/v1/courses/${courseId}/upload`;
  
  const response = await client.post(url, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      ...(threadId && { 'X-Thread-Id': threadId }),
    },
  });

  return response.data;
} 