import DashboardIcon from '@assets/icons/dashboard.svg';
import PortfolioIcon from '@assets/icons/portfolio.svg';
import ReportingIcon from '@assets/icons/reporting-and-transactions.svg';
import ResearchIcon from '@assets/icons/research-portal.svg';
import TradingIcon from '@assets/icons/trading-and-market.svg';
import TutorialIcon from '@assets/icons/tutorial.svg';
import WalletIcon from '@assets/icons/wallet-transfer-pay.svg';
import { NavLink } from 'react-router';

const linksConfig = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: <DashboardIcon />,
  },
  {
    label: 'Portfolio',
    path: '/portfolio',
    icon: <PortfolioIcon />,
  },
  {
    label: 'Trading & Market',
    path: '/trading-and-market',
    icon: <TradingIcon />,
  },
  {
    label: 'Research Portal',
    path: '/research-portal',
    icon: <ResearchIcon />,
  },
  {
    label: 'Wallet Transfer Pay',
    path: '/wallet-transfer-pay',
    icon: <WalletIcon />,
  },
  {
    label: 'Reporting & Transactions',
    path: '/reporting-and-transactions',
    icon: <ReportingIcon />,
  },
  {
    label: 'Tutorial',
    path: '/tutorial',
    icon: <TutorialIcon />,
  },
];

function Navigation() {
  return (
    <aside className="px-5">
      <nav>
        <ul className="flex flex-col gap-6">
          {linksConfig.map((item) => {
            return (
              <li key={item.label}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `group flex items-center gap-2 py-2.5 px-5 rounded-lg hover:bg-light-purple hover:text-purple transition-colors ${isActive ? 'bg-light-purple text-purple active' : ''}`
                  }
                >
                  <span className="w-6 h-6 flex items-center justify-center group-hover:nth-[1]:text-purple transition-colors text-gray-400 group-[.active]:nth-[1]:text-purple">
                    {item.icon}
                  </span>
                  {item.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default Navigation;
