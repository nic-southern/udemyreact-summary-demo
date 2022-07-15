import classes from "./MainNavigation.module.css";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

function MainNavigation() {
  const { data: session } = useSession();

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Meetups</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add New Meetup</Link>
          </li>
          {session ? (
            <li>
              <a href="" onClick={signOut}>
                Sign Out
              </a>
            </li>
          ) : (
            <li>
              <a href="" onClick={signIn}>
                Sign In
              </a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
