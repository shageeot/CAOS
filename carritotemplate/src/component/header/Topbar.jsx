
const Topbar = () => {
  return (
     
   <div className="container-fluid px-5 d-none border-bottom d-lg-block">
  <div className="row gx-0 align-items-center">
    <div className="col-lg-4 text-center text-lg-start mb-lg-0">
      <div className="d-inline-flex align-items-center" style={{height: 45}}>
        <a href="#" className="text-muted me-2"> Help</a><small> / </small>
        <a href="#" className="text-muted mx-2"> Support</a><small> / </small>
        <a href="#" className="text-muted ms-2"> Contact</a>
      </div>
    </div>
    <div className="col-lg-4 text-center d-flex align-items-center justify-content-center">
      <small className="text-dark">Call Us:</small>
      <a href="#" className="text-muted">(+012) 1234 567890</a>
    </div>
    <div className="col-lg-4 text-center text-lg-end">
      <div className="d-inline-flex align-items-center" style={{height: 45}}>
        <div className="dropdown">
          <a href="#" className="dropdown-toggle text-muted me-2" data-bs-toggle="dropdown"><small>
              USD</small></a>
          <div className="dropdown-menu rounded">
            <a href="#" className="dropdown-item"> Euro</a>
            <a href="#" className="dropdown-item"> Dolar</a>
          </div>
        </div>
        <div className="dropdown">
          <a href="#" className="dropdown-toggle text-muted mx-2" data-bs-toggle="dropdown"><small>
              English</small></a>
          <div className="dropdown-menu rounded">
            <a href="#" className="dropdown-item"> English</a>
            <a href="#" className="dropdown-item"> Turkish</a>
            <a href="#" className="dropdown-item"> Spanol</a>
            <a href="#" className="dropdown-item"> Italiano</a>
          </div>
        </div>
        <div className="dropdown">
          <a href="#" className="dropdown-toggle text-muted ms-2" data-bs-toggle="dropdown"><small><i className="fa fa-home me-2" /> My Dashboard</small></a>
          <div className="dropdown-menu rounded">
            <a href="#" className="dropdown-item"> Login</a>
            <a href="#" className="dropdown-item"> Wishlist</a>
            <a href="#" className="dropdown-item"> My Card</a>
            <a href="#" className="dropdown-item"> Notifications</a>
            <a href="#" className="dropdown-item"> Account Settings</a>
            <a href="#" className="dropdown-item"> My Account</a>
            <a href="#" className="dropdown-item"> Log Out</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Topbar