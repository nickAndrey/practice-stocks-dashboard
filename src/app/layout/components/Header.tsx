import userImage from '@/assets/images/user.png';
import Notification from '@assets/icons/notification.svg';
import Search from '@assets/icons/search-normal.svg';

type HeaderProps = { name: string };

function Header({ name }: HeaderProps) {
  return (
    <header className="col-start-1 col-end-3 grid grid-cols-[315px_1fr] h-[96px] items-center">
      <a href="#" className="text-2xl pl-5 pr-8">
        Foxstocks
      </a>

      <div className="flex items-center w-full pr-8">
        <span>Hello {name},</span>

        <div className="flex gap-8 items-center ml-auto">
          <div className="bg-grey p-3 rounded-lg flex gap-4 w-full items-center">
            <Search />
            <input
              name="search"
              type="text"
              placeholder="Search for stocks and more"
              className="w-full max-w-[344px]"
            />
          </div>

          <Notification />

          <img src={userImage} alt="user" />
        </div>
      </div>
    </header>
  );
}

export default Header;
