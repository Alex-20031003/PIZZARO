import Container from '@/shared/ui/Container';
import logo from '@/assets/logo.svg';

export default function Footer() {
  return (
    <footer>
      <Container>
        <div>
          <img src={logo} alt="Logo Pizzaro" />
          <p>© 2026 Copyright All Rights Reserved</p>
        </div>

        
      </Container>
    </footer>
  )
}