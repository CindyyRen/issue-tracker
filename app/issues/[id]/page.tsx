import prisma from '@/prisma/client';
import IssueStatusBadge from '@/app/components/IssueStatusBadge';
import { notFound } from 'next/navigation';
import { Box, Grid } from '@radix-ui/themes';
import ReactMarkdown from 'react-markdown';
import EditIssueButton from './EditIssueButton';
import IssueDetails from './IssueDetails';
interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  // await delay(2000);
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return (
    <Grid columns={{ initial: '1', md: '2' }} gap="5">
      <Box>
        <IssueDetails issue={issue} />
      </Box>
      <Box>
        <EditIssueButton issueId={issue.id} />
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
