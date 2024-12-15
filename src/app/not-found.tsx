import { type Metadata } from 'next';

import { Container, Section } from '@/components/content';

export const metadata: Metadata = {
  title: 'Oops',
  description: 'Oops',
};

export default function NotFound() {
  return (
    <Section>
      <Container>Not found error | 404</Container>
    </Section>
  );
}
