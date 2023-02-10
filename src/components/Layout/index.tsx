import { ChildrenContainer, Container } from '@/pages/style';
import { ReactNode } from 'react';
import Header from '../Header';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Header />
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  );
}
