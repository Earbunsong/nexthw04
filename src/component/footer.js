import React from 'react'

export default function footer() {
  return (
    <div classname="container">
  <footer classname="py-5">
    <div classname="row">
      <div classname="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul classname="nav flex-column">
          <li classname="nav-item mb-2"><a href="#" classname="nav-link p-0 text-muted">Home</a></li>
          <li classname="nav-item mb-2"><a href="#" classname="nav-link p-0 text-muted">Features</a></li>
          <li classname="nav-item mb-2"><a href="#" classname="nav-link p-0 text-muted">Pricing</a></li>
          <li classname="nav-item mb-2"><a href="#" classname="nav-link p-0 text-muted">FAQs</a></li>
          <li classname="nav-item mb-2"><a href="#" classname="nav-link p-0 text-muted">About</a></li>
        </ul>
      </div>

      <div classname="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul classname="nav flex-column">
          <li classname="nav-item mb-2"><a href="#" classname="nav-link p-0 text-muted">Home</a></li>
          <li classname="nav-item mb-2"><a href="#" classname="nav-link p-0 text-muted">Features</a></li>
          <li classname="nav-item mb-2"><a href="#" classname="nav-link p-0 text-muted">Pricing</a></li>
          <li classname="nav-item mb-2"><a href="#" classname="nav-link p-0 text-muted">FAQs</a></li>
          <li classname="nav-item mb-2"><a href="#" classname="nav-link p-0 text-muted">About</a></li>
        </ul>
      </div>

      <div classname="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul classname="nav flex-column">
          <li classname="nav-item mb-2"><a href="#" classname="nav-link p-0 text-muted">Home</a></li>
          <li classname="nav-item mb-2"><a href="#" classname="nav-link p-0 text-muted">Features</a></li>
          <li classname="nav-item mb-2"><a href="#" classname="nav-link p-0 text-muted">Pricing</a></li>
          <li classname="nav-item mb-2"><a href="#" classname="nav-link p-0 text-muted">FAQs</a></li>
          <li classname="nav-item mb-2"><a href="#" classname="nav-link p-0 text-muted">About</a></li>
        </ul>
      </div>

      <div classname="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of  new and exciting from us.</p>
          <div classname="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" classname="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" classname="form-control" placeholder="Email address"/>
            <button classname="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div classname="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2022 Company, Inc. All rights reserved.</p>
      <ul classname="list-unstyled d-flex">
        <li classname="ms-3"><a classname="link-dark" href="#"></a></li>
        <li classname="ms-3"><a classname="link-dark" href="#"></a></li>
        <li classname="ms-3"><a classname="link-dark" href="#"></a></li>
      </ul>
    </div>
  </footer>
</div>
  )
}
