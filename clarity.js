import Clarity from '@microsoft/clarity';

const projectId = window.CLARITY_PROJECT_ID;

if (projectId && projectId !== 'YOUR_CLARITY_PROJECT_ID') {
  Clarity.init(projectId);
  Clarity.setTag('site', 'cypher-rsvp');
  Clarity.consentV2({ ad_Storage: 'denied', analytics_Storage: 'granted' });
}
