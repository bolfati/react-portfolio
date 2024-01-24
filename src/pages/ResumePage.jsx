
export default function ResumePage() {

  // Iterate over each mock user to display their abridged profile data and a link to their page
  return (
    <div className="container pt-4">
      <h1>Resume</h1>
      <a href="/assets/Resume.pdf" download>
        Download Bijan's Resume Here:

      </a>
    </div>
  );
}