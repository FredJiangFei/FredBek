import Breadcrumb from '@/components/ui/breadcrumb';
import Card from '@/components/ui/card';
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
      <span className="text-page-title text-secondary">Products</span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
