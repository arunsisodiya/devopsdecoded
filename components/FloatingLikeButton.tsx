import { Provider, ClapButton } from '@lyket/react';
import { useState, useEffect } from 'react';

const FloatingLikeButton = ({ url }, { showLike = true }: { showLike?: boolean }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 50) setShow(true);
      else setShow(false);
    };

    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  return (
    <div className={`fixed bottom-1/2 right-8 hidden flex-col gap-3 ${show ? 'md:flex' : 'md:hidden'}`}>
      {showLike && (
        <div
          aria-label="Like this Post"
          className="rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
        >
          <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">
            <ClapButton namespace={url} id={url} component={ClapButton.templates.Medium} />
          </Provider>
        </div>
      )}
    </div>
  );
};

export default FloatingLikeButton;
