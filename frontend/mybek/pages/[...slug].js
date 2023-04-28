import Breadcrumb from '@/components/ui/breadcrumb';
import { useRouter } from 'next/router';

export default function Products() {
  const router = useRouter();
  const slug = router.query.slug;
  if (!slug) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto">
      <Breadcrumb items={slug} />
      <h1 className="text-secondary">Products</h1>
    </div>
  );
}
