export type IconType = {
  className?: string;
};

export const GithubIcon = (props: IconType) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 496 512"
    className={props.className}
    height="100%"
    width="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
  </svg>
);

export const LinkedinIcon = (props: IconType) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    width="100%"
    height="100%"
    viewBox="0 0 50 50"
    className={props.className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
  </svg>
);

export const ArrowTopRight = (props: IconType) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 16 16"
    className={props.className}
    height="100%"
    width="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
    ></path>
  </svg>
);

export function NextJsIcon() {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="100%"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      className="text-zinc-900 dark:text-zinc-100"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path>
      <path d="M15 12v-3"></path>
    </svg>
  );
}

export function ReactRouterDomIcon({ className }: { className?: string }) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 36 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ?? ""}
    >
      <path
        d="M27.7179 8.23453C26.6978 7.90351 26.171 8.01511 25.101 7.89443C23.447 7.70823 22.788 7.04103 22.5084 5.32388C22.352 4.36531 22.5367 2.96182 22.1373 2.0929C21.3735 0.436097 19.5863 -0.306966 17.7908 0.117149C16.2749 0.47575 15.0135 2.03946 14.9436 3.64454C14.8638 5.4772 15.8755 7.04091 17.6128 7.58054C18.4381 7.83742 19.3151 7.96673 20.1771 8.03224C21.7579 8.1512 21.8794 9.05816 22.3071 9.80467C22.5767 10.2753 22.8379 10.7391 22.8379 12.1425C22.8379 13.5459 22.575 14.0096 22.3071 14.4803C21.8794 15.2251 21.3519 15.713 19.7711 15.8337C18.9091 15.8992 18.0305 16.0285 17.2067 16.2854C15.4695 16.8267 14.4577 18.3887 14.5376 20.2213C14.6075 21.8264 15.8688 23.3901 17.3848 23.7487C19.1803 24.1746 20.9675 23.4298 21.7313 21.773C22.1324 20.9041 22.352 19.9196 22.5084 18.9611C22.7897 17.2439 23.4486 16.5767 25.101 16.3905C26.171 16.2698 27.2784 16.3905 28.281 15.8026C29.3406 15.0036 30.2872 13.8045 30.2872 12.1425C30.2872 10.4805 29.2671 8.73795 27.7179 8.23453Z"
        fill="#F44250"
      />
      <path
        d="M10.7468 16.0372C8.66173 16.0372 6.96094 14.2786 6.96094 12.1226C6.96094 9.96665 8.66173 8.20801 10.7468 8.20801C12.8318 8.20801 14.5326 9.96665 14.5326 12.1226C14.5326 14.2769 12.8302 16.0372 10.7468 16.0372Z"
        className="fill-zinc-900 dark:fill-zinc-100"
      />
      <path
        d="M3.77247 23.9928C1.69077 23.9876 -0.00498999 22.2221 1.10332e-05 20.0644C0.00503422 17.9101 1.71249 16.1567 3.7992 16.1636C5.88256 16.1688 7.57832 17.9343 7.57166 20.092C7.56663 22.2445 5.85917 23.998 3.77247 23.9928Z"
        className="fill-zinc-900 dark:fill-zinc-100"
      />
      <path
        d="M31.9021 23.9927C29.8138 24.0048 28.0997 22.2583 28.088 20.1076C28.0763 17.9482 29.7654 16.1758 31.8453 16.1636C33.9337 16.1516 35.6478 17.8981 35.6595 20.0488C35.6711 22.2065 33.9821 23.9806 31.9021 23.9927Z"
        className="fill-zinc-900 dark:fill-zinc-100"
      />
    </svg>
  );
}

export function FramerMotionIcon({ className }: { className: string }) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 339 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ?? ""}
    >
      <path
        d="M30 45H309V185.667H169.5L30 45ZM30 185.667H169.5L309 326.333H169.5V467L30 326.333V185.667Z"
        className="fill-zinc-900 dark:fill-zinc-100"
      />
    </svg>
  );
}

export function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      aria-hidden="true"
      className={className}
      width="100%"
      height="100%"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      ></path>
    </svg>
  );
}

export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
  );
}

export function DangerIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
      ></path>
    </svg>
  );
}
