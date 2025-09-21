import { Button } from "@/components/ui/button";

export default function ButtonExamples() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold mb-8">Button Component Examples</h1>
      
      {/* Variants */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="default">Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>

      {/* Sizes */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">🏀</Button>
        </div>
      </section>

      {/* States */}
      <section>
        <h2 className="text-xl font-semibold mb-4">States</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Normal</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>

      {/* Custom styling */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Custom Styling</h2>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            Custom Blue
          </Button>
          <Button className="bg-green-500 hover:bg-green-600 text-white">
            Custom Green
          </Button>
          <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full">
            Rounded
          </Button>
        </div>
      </section>

      {/* With icons or complex content */}
      <section>
        <h2 className="text-xl font-semibold mb-4">With Content</h2>
        <div className="flex flex-wrap gap-4">
          <Button>
            <span className="mr-2">🏀</span>
            Book Court
          </Button>
          <Button variant="outline">
            <span className="mr-2">📅</span>
            Schedule
          </Button>
          <Button variant="secondary">
            View Details
            <span className="ml-2">→</span>
          </Button>
        </div>
      </section>
    </div>
  );
}
