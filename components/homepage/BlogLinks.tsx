import Link from '@/components/Link';
import Twemoji from '@/components/Twemoji';

const BlogLinks = () => {
  return (
    <div className="flex justify-between ">
      <div className="flex flex-col space-y-1.5">
        <Link href="/blog" className="hover:underline">
          <Twemoji emoji="memo" />
          <span data-umami-event="home-link-blog" className="ml-1.5">
            My writings
          </span>
        </Link>
        <Link href="/" className="hover:underline">
          <Twemoji emoji="briefcase" />
          <span data-umami-event="home-link-resume" className="ml-1.5">
            My career
          </span>
        </Link>
      </div>
      <div className="flex flex-col space-y-1.5">
        <Link href="/about" className="hover:underline">
          <Twemoji emoji="face-with-monocle" />
          <span data-umami-event="home-link-about" className="ml-1.5">
            More about me and myself
          </span>
        </Link>
        <Link href="mailto:btrack44@gmail.com" className="hover:underline">
          <Twemoji emoji="email" />
          <span data-umami-event="home-link-projects" className="ml-1.5">
            Contact me
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BlogLinks;
