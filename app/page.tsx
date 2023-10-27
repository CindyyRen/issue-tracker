// import Image from 'next/image';
// import IssuesPage from './issues/list/page';

// export default function Home() {
//   return (
//     <>
//       <IssuesPage />
//     </>
//   );
// }
import Pagination from './components/Pagination';

export default function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return (
    <Pagination
      itemCount={100}
      pageSize={10}
      currentPage={parseInt(searchParams.page)}
    />
  );
}
