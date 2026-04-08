import * as Dialog from '@radix-ui/react-dialog';
import { Menu, X, Home, Info, Box, User } from 'lucide-react';
import './navbar.css';
import { RouterLink } from '../../router/router';

const Navbar = () => {
  const navItems = [
    { label: 'Home', icon: <Home size={20} />, href: '/' },
    { label: 'Products', icon: <Box size={20} />, href: '/user/business1' },
    { label: 'User', icon: <Info size={20} />, href: '/user' },
    { label: 'Login', icon: <User size={20} />, href: '/login' },
    // { label: 'Settings', icon: <Settings size={20} />, href: '/settings' },
  ];

  return (
    <nav className="navbar-wrapper">
      {/* Left: Logo Section */}
      <div className="navbar-logo">
        <div style={{ width: 32, height: 32, background: '#0f172a', borderRadius: 8 }} />
        <span>Brand</span>
      </div>

      {/* Right: Desktop Links */}
      <div className="navbar-desktop-links">
        {navItems.map((item) => (
          <RouterLink key={item.label} href={item.href}>
            {item.label}
          </RouterLink>
        ))}
      </div>

      {/* Right: Mobile Menu Button */}
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="mobile-menu-trigger" aria-label="Toggle menu">
            <Menu size={24} />
          </button>
        </Dialog.Trigger>
        
        <Dialog.Portal>
          <Dialog.Overlay className="dialog-overlay" />
          <Dialog.Content className="dialog-content">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <Dialog.Title style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>
                Navigation
              </Dialog.Title>
              <Dialog.Close asChild>
                <button className="mobile-menu-trigger">
                  <X size={24} />
                </button>
              </Dialog.Close>
            </div>

            <ul className="mobile-nav-list">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className="nav-link" 
                    style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem' }}
                  >
                    {item.icon}
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </nav>
  );
};

export default Navbar;