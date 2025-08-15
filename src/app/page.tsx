
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link href="/" className="navbar-brand">
            Disc Golf Site
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/courses" className="nav-link">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/discs" className="nav-link">
                  Discs
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/articles" className="nav-link">
                  Articles
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="jumbotron text-center">
        <h1 className="display-4">Welcome to the Disc Golf Site</h1>
        <p className="lead">Your one-stop shop for everything Disc Golf.</p>
      </div>

      <main className="container mt-5">
        <div className="row text-center">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Course Reviews</h5>
                <p className="card-text">
                  Find reviews of the best disc golf courses around the world.
                </p>
                <Link href="/courses" className="btn btn-primary">
                  Browse Courses
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Disc Reviews</h5>
                <p className="card-text">
                  Read reviews of the latest discs from all the popular brands.
                </p>
                <Link href="/discs" className="btn btn-primary">
                  Browse Discs
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Improve Your Game</h5>
                <p className="card-text">
                  Read articles and watch videos to take your game to the next
                  level.
                </p>
                <Link href="/articles" className="btn btn-primary">
                  Browse Articles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="container mt-5 text-center">
        <p>&copy; 2025 Disc Golf Site</p>
      </footer>
    </div>
  );
}
