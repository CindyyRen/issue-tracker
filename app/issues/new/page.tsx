'use client';

import IssueForm from '../_components/IssueForm';
// const SimpleMDE = dynamic(() => import('react-simplemde-editor'), {
//   ssr: false,
// });
//  loading: () => <p>Loading...</p>,
// ssr: false, only loaded on the client side.

const NewIssuePage = () => {
  return <IssueForm />;
};

export default NewIssuePage;
