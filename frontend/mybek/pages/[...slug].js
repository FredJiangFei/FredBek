import Breadcrumb from '@/components/ui/breadcrumb';
import Card from '@/components/ui/card';
import Title from '@/components/ui/title';
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
      <Title className="text-secondary">Products</Title>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
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
