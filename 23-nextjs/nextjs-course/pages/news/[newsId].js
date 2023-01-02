import { useRouter } from "next/router";

function DetailsPage() {
  const router = useRouter();

  return <h1>This is the {router.query.newsId} page</h1>;
}
export default DetailsPage;
