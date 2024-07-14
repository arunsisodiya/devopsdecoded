import React from 'react';
import Typed from 'typed.js';

import Twemoji from '@/components/Twemoji';

const TypedBios = () => {
  const el = React.useRef(null);
  const typed = React.useRef(null);

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    });
    return () => typed.current.destroy();
  }, []);

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>
          I'm aliased as <b className="font-medium">Arun</b> at work.
        </li>
        <li>
          I live in <b className="font-medium">Stuttgart, Germany</b>.
        </li>
        <li>
          I was born in the beautiful <b className="font-medium">Lucknow</b> city.
        </li>
        <li>
          My first programming language I learned was <b className="font-medium">C++</b>.
        </li>
        <li>I love cloud engineering.</li>
        <li>
          I'm focusing on learning <b className="font-medium">Cloud Architecture</b>.
        </li>
        <li>
          I work mostly with <b className="font-medium">Python/Javascript</b> technologies.
        </li>
        <li>
          I'm a dog-person <Twemoji emoji="dog" />.
        </li>
        <li>
          I'm a sporty-guy. I love
          <span className="ml-1">
            <Twemoji emoji="ping-pong" />, <Twemoji emoji="guitar" />
          </span>
          .
        </li>
        <li>
          I love listening <Twemoji emoji="musical-keyboard" /> and EDM music.
        </li>
        <li>
          I love playing video game <Twemoji emoji="video-game" />, PUBG is my favorite one.
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  );
};

export default TypedBios;
