import Breadcrumb from '@/components/ui/breadcrumb';
import { useRouter } from 'next/router';

export default function Products() {
  const router = useRouter();
  const slug = router.query.slug;
  if (!slug) {
    return <p>Loading...</p>;
  }

  


  return (
    <>
      <Breadcrumb items={slug} />
    </>
  );
}
