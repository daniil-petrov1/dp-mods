"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar" aria-label="Боковое меню">
      <div className="sidebar__inner">
        <div className="sidebar__top">
          <Link href="/" className="logo">
            <strong className="logo__text">DP Mods</strong>
            <svg
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className="logo__icon"
              aria-hidden="true"
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M6.23117 14.4992L3.2697 17.4606C3.15579 17.5745 3.16919 17.7554 3.2831 17.8559C4.49583 18.8945 5.88946 19.6047 7.3501 19.9933C7.4841 20.0268 7.6248 19.9598 7.67171 19.8325L9.24624 15.7052C9.34675 15.4372 9.58125 15.2295 9.86936 15.1759C10.2513 15.1089 10.6198 15.33 10.7538 15.6784L12.335 19.8258C12.3819 19.9531 12.5226 20.0268 12.6566 19.9866C14.1173 19.598 15.5109 18.8878 16.7236 17.8492C16.8442 17.7487 16.8509 17.5678 16.737 17.4539L13.7756 14.4925C11.6851 12.4154 8.31492 12.4154 6.23117 14.4992Z"
                  fill="currentColor"
                />
                <path
                  d="M5.501 6.23115L2.53953 3.26968C2.42562 3.15578 2.24472 3.16918 2.14422 3.28308C1.10569 4.49581 0.395472 5.88945 0.00686232 7.35008C-0.0266385 7.48409 0.0403632 7.62479 0.167666 7.67169L4.30167 9.24623C4.56968 9.34673 4.77738 9.58124 4.83098 9.86934C4.89798 10.2513 4.67688 10.6198 4.32847 10.7538L0.174366 12.3283C0.0470633 12.3752 -0.0266385 12.5159 0.0135625 12.6499C0.402172 14.1105 1.11239 15.5042 2.15092 16.7169C2.25142 16.8375 2.43232 16.8442 2.54623 16.7303L5.5077 13.7688C7.58475 11.6851 7.58475 8.31491 5.501 6.23115Z"
                  fill="currentColor"
                />
                <path
                  d="M13.7688 5.50084L16.7303 2.53937C16.8442 2.42546 16.8308 2.24456 16.7169 2.14406C15.5041 1.10553 14.1105 0.395312 12.6499 0.0067021C12.5159 -0.0267987 12.3752 0.0402029 12.3283 0.167506L10.7537 4.29481C10.6532 4.56282 10.4187 4.77052 10.1306 4.82412C9.74869 4.89112 9.38019 4.67002 9.24618 4.32161L7.67164 0.174206C7.62474 0.0469031 7.48404 -0.0267987 7.35003 0.0134023C5.8894 0.395312 4.49576 1.10553 3.28303 2.14406C3.16243 2.24456 3.15573 2.42546 3.26963 2.53937L6.23111 5.50084C8.31486 7.58459 11.685 7.58459 13.7688 5.50084Z"
                  fill="currentColor"
                />
                <path
                  d="M15.6783 10.7471C15.3299 10.6131 15.1088 10.2513 15.1758 9.86265C15.2227 9.57454 15.4304 9.34673 15.7051 9.23953L19.8324 7.66499C19.9597 7.61809 20.0334 7.47739 19.9932 7.34338C19.6046 5.88945 18.8944 4.49581 17.8559 3.28308C17.7554 3.16248 17.5745 3.15578 17.4606 3.26968L14.4991 6.23116C12.4153 8.31491 12.4153 11.6851 14.4991 13.7688L17.4606 16.7303C17.5745 16.8442 17.7554 16.8308 17.8559 16.7169C18.8944 15.5042 19.6046 14.1106 19.9932 12.6499C20.0267 12.5159 19.9597 12.3752 19.8324 12.3283L15.6783 10.7471Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="20" height="20" fill="currentColor" />
                </clipPath>
              </defs>
            </svg>
          </Link>

          <nav className="sidebar__nav" aria-label="Основное меню">
            <ul className="sidebar__nav-list">
              <li>
                <Link
                  href="/custom-code"
                  className={`sidebar__link${
                    pathname.startsWith("/custom-code")
                      ? " sidebar__link--active"
                      : ""
                  }`}
                >
                  Custom code
                </Link>
              </li>
              <li>
                <Link
                  href="/webflow"
                  className={`sidebar__link${
                    pathname.startsWith("/webflow")
                      ? " sidebar__link--active"
                      : ""
                  }`}
                >
                  Webflow
                </Link>
              </li>
              <li>
                <Link
                  href="/tilda"
                  className={`sidebar__link${
                    pathname.startsWith("/tilda")
                      ? " sidebar__link--active"
                      : ""
                  }`}
                >
                  Tilda
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="sidebar__bottom">
          <a
            href="https://daniil-petrov.ru/"
            target="_blank"
            className="sidebar__credit"
            rel="noopener noreferrer"
          >
            Code by Daniil Petrov
          </a>
        </div>
      </div>
    </aside>
  );
}
