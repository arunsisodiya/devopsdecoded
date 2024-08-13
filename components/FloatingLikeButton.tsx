import { Provider, ClapButton } from '@lyket/react';

export default function FloatingLikeButton({ url }) {
  return (
    <div
      className={`fixed bottom-1/2 right-1/4 z-50 rounded-full p-3 shadow-lg transition-colors hover:bg-red-50`}
      aria-label="Like this post"
    >
      <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">
        <ClapButton namespace={url} id={url} component={ClapButton.templates.Medium} />
      </Provider>
    </div>
  );
}
