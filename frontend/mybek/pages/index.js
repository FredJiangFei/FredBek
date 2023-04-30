import BkLink from '@/components/ui/bkLink';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';

export default function Home() {
  return (
    <>
      <div className="m-2 space-x-2" style={{ backgroundColor: '#D7D2CB' }}>
      <div className="m-2 space-x-2">
        <BkLink href="/details">Link</BkLink>
        <BkLink href="/details" size="sm">
          Link
        </BkLink>
      </div>
      <div className="p-2 space-x-2">
        <Button size="lg">Button</Button>
        <Button variant="secondary" size="lg">
          Button
        </Button>
        <Button variant="tertiary" size="lg">
          Button
        </Button>
        <Button variant="primary-inverted" size="lg">
          Button
        </Button>
        <Button variant="secondary-inverted" size="lg">
          Button
        </Button>
      </div>
      <div className="p-2 space-x-2">
        <Button>Button</Button>
        <Button variant="secondary">Button</Button>
        <Button variant="tertiary">Button</Button>
        <Button variant="primary-inverted">Button</Button>
        <Button variant="secondary-inverted">Button</Button>
      </div>
      <div className="p-2 space-x-2">
        <Button size="sm">Button</Button>
        <Button variant="secondary" size="sm">
          Button
        </Button>
        <Button variant="tertiary" size="sm">
          Button
        </Button>
        <Button variant="primary-inverted" size="sm">
          Button
        </Button>
        <Button variant="secondary-inverted" size="sm">
          Button
        </Button>
      </div>
      <div className="p-2 space-x-2">
        <Button size="xs">Button</Button>
        <Button variant="secondary" size="xs">
          Button
        </Button>
        <Button variant="tertiary" size="xs">
          Button
        </Button>
        <Button variant="primary-inverted" size="xs">
          Button
        </Button>
        <Button variant="secondary-inverted" size="xs">
          Button
        </Button>
      </div>
      <div className="p-2">
        <Input placeHolder='Placeholder text'/>
        <Input placeHolder='Placeholder text' variant='success'/>
        <Input placeHolder='Placeholder text' variant='error'/>
      </div>
      </div>
      

      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
    </>
  );
}
