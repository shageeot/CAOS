
const Topbar2 = () => {
  return (
   <div className="container-fluid px-5 py-4 d-none d-lg-block">
  <div className="row gx-0 align-items-center text-center">
    <div className="col-md-4 col-lg-3 text-center text-lg-start">
      <div className="d-inline-flex align-items-center">
        <a href className="navbar-brand p-0">
          <h1 className="display-5 text-primary m-0"><i className="fas fa-shopping-bag text-secondary me-2 wow animate__animated animate__fadeOutDownBig"  data-wow-delay="0.2s" />Electro</h1>
          {/* <img src="img/logo.png" alt="Logo"> */}
        </a>
      </div>
    </div>
    <div className="col-md-4 col-lg-6 text-center">
      <div className="position-relative ps-4">
        <div className="d-flex border rounded-pill">
          <input className="form-control border-0 rounded-pill w-100 py-3" type="text" data-bs-target="#dropdownToggle123" placeholder="Search Looking For?" />
          <select className="form-select text-dark border-0 border-start rounded-0 p-3" style={{width: 200}}>
            <option value="All Category">All Category</option>
            <option value="Pest Control-2">Category 1</option>
            <option value="Pest Control-3">Category 2</option>
            <option value="Pest Control-4">Category 3</option>
            <option value="Pest Control-5">Category 4</option>
          </select>
          <button type="button" className="btn btn-primary rounded-pill py-3 px-5" style={{border: 0}}><i className="fas fa-search" /></button>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-lg-3 text-center text-lg-end">
      <div className="d-inline-flex align-items-center">
        <a href="#" className="text-muted d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-md-square border"><i className="fas fa-random" /></span></a>
        <a href="#" className="text-muted d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-md-square border"><i className="fas fa-heart" /></span></a>
        <a href="#" className="text-muted d-flex align-items-center justify-content-center"><span className="rounded-circle btn-md-square border"><i className="fas fa-shopping-cart" /></span>
          <span className="text-dark ms-2">$0.00</span></a>
      </div>
    </div>
  </div>
</div>

  )
}

export default Topbar2