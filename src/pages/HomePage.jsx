export default function HomePage() {

  // Iterate over each mock user to display their abridged profile data and a link to their page
  return (
    <div className="container pt-4">
      <h1>Home</h1>
      <div>
        <p classname="text-dark">
           Welcome to Bijan's webpage!  This portfolio was created using React, React Router, and Bootstrap.  Please feel free to explore the site and contact Bijan if you have any questions or comments.
        </p>
      </div>
<div>
    <img className="img-fluid float-right rounded"src="/assets/bigcheetobigbloo.jpg" alt="picture of bijan holding two cats"></img>
</div>

    </div>
  );
}