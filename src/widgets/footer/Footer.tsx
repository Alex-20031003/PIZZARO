import Container from '@/shared/ui/Container';
import { MENU_ITEMS, CONTACT_ITEMS, INFO_ITEMS, SOCIAL_ITEMS } from './footer.data';
import logo from '@/assets/logo.svg';
import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="bg-(--black) text-(--light-grey) grid grid-cols-1">
      <Container>
        <div>
          <div>
            <img src={logo} alt="Logo Pizzaro" />
            <h1>PIZZARO</h1>
          </div>
          <p>© 2026 Copyright All Rights Reserved</p>
        </div>

        <div>
          <h1>Menu</h1>
          <ul>
            {MENU_ITEMS.map(({ to, label }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1>Information</h1>
          <ul>
            {INFO_ITEMS.map(({ to, label, external }) => (
              <li key={to}>
                {external ? <a href={to}>{label}</a> : <Link to={to}>{label}</Link>}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1>Contacts</h1>
          <ul>
            {CONTACT_ITEMS.map(({ to, label }) => (
              <li key={to}>
                {external ? <a href={to}>{label}</a> : <Link to={to}>{label}</Link>}
              </li>
            ))}
          </ul>

          <ul>
            {SOCIAL_ITEMS.map(({ to, icon, label }) => (
              <li key={to}>
                <a href={to}>
                  <img src={icon} alt={label} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}