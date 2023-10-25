import NextLink0 from 'next/link';
import { Link as RadixLink } from '@radix-ui/themes';

interface Props {
  href: string;
  children: string;
}

const Link = ({ href, children}: Props) => {
  return (
    <NextLink0 href={href} passHref legacyBehavior>
      <RadixLink>{children}</RadixLink>
    </NextLink0>
  )
}

export default Link