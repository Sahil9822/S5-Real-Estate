import { Button, Navbar} from 'flowbite-react';
import { FaMoon, FaSun} from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { toggleTheme } from '../redux/theme/themeSlice';

export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <Navbar className='border-b-2 bg-slate-200 shadow-md'>
      <Link to='/' className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-slate-500'>S5</span>
        <span className='text-slate-600'>Real</span>
        <span className='text-slate-700'>Estate</span>
      </Link>
      <form onSubmit={handleSubmit} className='flex items-center'>
        <input type='text' placeholder='Search...' className='lg:inline rounded-lg w-24 sm:w-64 text-gray-600' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </form>
      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 sm:inline' color='gray' pill onClick={() => dispatch(toggleTheme())}>
          {theme === 'light' ? <FaSun /> : <FaMoon />}
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === '/'} as={'div'}>
          <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/about'} as={'div'}>
          <Link to='/about'>About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/profile'} as={'div'}>
          <Link to='/profile'>
            {currentUser ? (
            <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt='profile'/>
            ) : (
            <li className=' text-slate-500 hover:underline'> Sign in</li>
            )}
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}