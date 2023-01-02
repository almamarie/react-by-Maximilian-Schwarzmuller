import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>This is the News page</h1>
      <ul>
        <li>
          <Link href="/news/next-js-is-a-great-framework">
            Next Js is a great framework
          </Link>
        </li>
        <li>
          <Link href="/news/next-js-is-a-great-framework">Something else</Link>
        </li>
      </ul>
    </Fragment>
  );
}
export default NewsPage;
