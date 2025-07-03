import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LogoutBtn from './LogoutBtn';



const Header = () => {

  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

    const navItems = [
    { name: 'Home', postId: '/', active: true },
    { name: 'All Posts', postId: '/all-posts', active: true },
    { name: 'Login', postId: '/login', active: !authStatus },
    { name: 'Signup', postId: '/signup', active: !authStatus },
    { name: 'Add Post', postId: '/add-post', active: authStatus },
    ]


      return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#eaedf1] px-10 py-3">
      <div className="flex items-center gap-4 text-[#101518]">
        <div className="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor" />
          </svg>
        </div>
        <h2 className="text-[#101518] text-lg font-bold leading-tight tracking-[-0.015em]">
          Bloggr
        </h2>
      </div>

      <div className="flex flex-1 justify-center gap-8">
        <nav aria-label="Main navigation">
          <ul className="flex list-none gap-9 m-0 p-0">

            {navItems.map((item) => item.active && (
              <li key={item.name}>
                <button className='text-[#101518] text-sm font-medium hover:text-[#3b82f6] transition-colors'
                onClick={() => navigate(item.postId)}
                >
                  {item.name}
                </button>
              </li>
            ) 
            )}
          </ul>
        </nav>
      </div>
{/* akna kaj bakii log out btn   */}


      <div className="flex items-center gap-3">
        {authStatus && (
                <LogoutBtn />

        )}
        {/* <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#eaedf1] text-[#101518] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#d1d5db] transition-colors">
          <span className="truncate">New Post</span>
        </button> */}

        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 cursor-pointer hover:ring-2 hover:ring-[#3b82f6] hover:ring-opacity-50 transition-all"
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDjd0J3ncqsJt1echtNpxN1E6uxVVz88RsmiYJm9_m7WIg_0JiHcsdAHH8VzgW9u50Wg-BDyKzJRyoCR6ujnNU6XFzGqO2O69-65Fcbsy9JfmLskKE413sEBoI6ScFjVQP0f-LLsnL4lhuiKHxffgoAYwCnHxQ208MqfIGpG8Sa_8b_ZoUgs48-FsRvfqs_N4DvNQjntYN0RaY_sUAHykzc7AvvfjeBR7FRsWGnnhAZ1b9uRZAzvZKuUvTXg3-kpgZ9m3Z2BaWO03dC")`,
          }}
          role="button"
          tabIndex={0}
          aria-label="User profile"
        />
      </div>
    </header>
  );
};


export default Header;