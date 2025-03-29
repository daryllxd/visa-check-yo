export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-3xl font-bold">About Visa Check</h1>

        <div className="space-y-6">
          <section>
            <h2 className="mb-3 text-xl font-semibold">Our Mission</h2>
            <p className="text-muted-foreground">
              Visa Check aims to simplify international travel planning by providing accurate,
              up-to-date information about visa requirements around the world. We believe that
              travel should be accessible and understandable for everyone, regardless of their
              nationality or travel experience.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">How It Works</h2>
            <p className="text-muted-foreground mb-3">Our platform allows you to:</p>
            <ul className="text-muted-foreground list-inside list-disc space-y-2">
              <li>Check which countries you can visit based on your citizenship</li>
              <li>See how existing visas can expand your travel options</li>
              <li>Visualize your travel eligibility on an interactive world map</li>
              <li>Get detailed information about visa requirements and application processes</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">Data Sources</h2>
            <p className="text-muted-foreground">
              We compile our visa information from official government sources, embassy websites,
              and trusted international organizations. Our team regularly updates the database to
              reflect the latest changes in visa policies worldwide.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">Our Team</h2>
            <p className="text-muted-foreground">
              Visa Check was created by a team of travel enthusiasts and software developers who
              were frustrated by the complexity of finding accurate visa information. We're
              dedicated to creating tools that make travel planning easier and more accessible.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
