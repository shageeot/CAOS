import MenuPrincipal from "./shop/MenuPrincipal"
import ProdCat from "./shop/ProdCat"

const ShopPages = ({categoria}) => {
  return (
       <div className="container-fluid shop py-5">
            <div className="container py-5">
                <div className="row g-4">

                <div className="col-lg-3 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="product-categories mb-4">
                    <h4>Categorias</h4>
                    <ul className="list-unstyled">
                        <MenuPrincipal/>
                    </ul>
                    </div>

                    {/*}
                    <div className="price mb-4">
                    <h4 className="mb-2">Price</h4>
                    <input type="range" className="form-range w-100" id="rangeInput" name="rangeInput" min={0} max={500} defaultValue={0} oninput="amount.value=rangeInput.value" />
                    <output id="amount" name="amount" min-velue={0} max-value={500} htmlFor="rangeInput">0</output>
                    <div className />
                    </div>
                    {*/}     

                    <div className="product-color mb-3">
                    <h4>Select By Color</h4>
                    <ul className="list-unstyled">
                        <li>
                        <div className="product-color-item">
                            <a href="#" className="text-dark"><i className="fas fa-apple-alt text-secondary me-2" />
                            Gold</a>
                            <span>(1)</span>
                        </div>
                        </li>
                        <li>
                        <div className="product-color-item">
                            <a href="#" className="text-dark"><i className="fas fa-apple-alt text-secondary me-2" />
                            Green</a>
                            <span>(1)</span>
                        </div>
                        </li>
                        <li>
                        <div className="product-color-item">
                            <a href="#" className="text-dark"><i className="fas fa-apple-alt text-secondary me-2" />
                            White</a>
                            <span>(1)</span>
                        </div>
                        </li>
                    </ul>
                    </div>
                    <div className="additional-product mb-4">
                    <h4>Additional Products</h4>
                    <div className="additional-product-item">
                        <input type="radio" className="me-2" id="Categories-1" name="Categories-1" defaultValue="Beverages" />
                        <label htmlFor="Categories-1" className="text-dark"> Accessories</label>
                    </div>
                    <div className="additional-product-item">
                        <input type="radio" className="me-2" id="Categories-2" name="Categories-1" defaultValue="Beverages" />
                        <label htmlFor="Categories-2" className="text-dark"> Electronics &amp; Computer</label>
                    </div>
                    <div className="additional-product-item">
                        <input type="radio" className="me-2" id="Categories-3" name="Categories-1" defaultValue="Beverages" />
                        <label htmlFor="Categories-3" className="text-dark"> Laptops &amp; Desktops</label>
                    </div>
                    <div className="additional-product-item">
                        <input type="radio" className="me-2" id="Categories-4" name="Categories-1" defaultValue="Beverages" />
                        <label htmlFor="Categories-4" className="text-dark"> Mobiles &amp; Tablets</label>
                    </div>
                    <div className="additional-product-item">
                        <input type="radio" className="me-2" id="Categories-5" name="Categories-1" defaultValue="Beverages" />
                        <label htmlFor="Categories-5" className="text-dark"> SmartPhone &amp; Smart TV</label>
                    </div>
                    </div>
                    <div className="featured-product mb-4">
                    <h4 className="mb-3">Featured products</h4>
                    <div className="featured-product-item">
                        <div className="rounded me-4" style={{width: 100, height: 100}}>
                        <img src="img/product-3.png" className="img-fluid rounded" alt="Image" />
                        </div>
                        <div>
                        <h6 className="mb-2">SmartPhone</h6>
                        <div className="d-flex mb-2">
                            <i className="fa fa-star text-secondary" />
                            <i className="fa fa-star text-secondary" />
                            <i className="fa fa-star text-secondary" />
                            <i className="fa fa-star text-secondary" />
                            <i className="fa fa-star" />
                        </div>
                        <div className="d-flex mb-2">
                            <h5 className="fw-bold me-2">2.99 $</h5>
                            <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                        </div>
                        </div>
                    </div>
                    <div className="featured-product-item">
                        <div className="rounded me-4" style={{width: 100, height: 100}}>
                        <img src="img/product-4.png" className="img-fluid rounded" alt="Image" />
                        </div>
                        <div>
                        <h6 className="mb-2">Smart Camera</h6>
                        <div className="d-flex mb-2">
                            <i className="fa fa-star text-secondary" />
                            <i className="fa fa-star text-secondary" />
                            <i className="fa fa-star text-secondary" />
                            <i className="fa fa-star text-secondary" />
                            <i className="fa fa-star" />
                        </div>
                        <div className="d-flex mb-2">
                            <h5 className="fw-bold me-2">2.99 $</h5>
                            <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                        </div>
                        </div>
                    </div>
                    <div className="featured-product-item">
                        <div className="rounded me-4" style={{width: 100, height: 100}}>
                        <img src="img/product-5.png" className="img-fluid rounded" alt="Image" />
                        </div>
                        <div>
                        <h6 className="mb-2">Camera Leance</h6>
                        <div className="d-flex mb-2">
                            <i className="fa fa-star text-secondary" />
                            <i className="fa fa-star text-secondary" />
                            <i className="fa fa-star text-secondary" />
                            <i className="fa fa-star text-secondary" />
                            <i className="fa fa-star" />
                        </div>
                        <div className="d-flex mb-2">
                            <h5 className="fw-bold me-2">2.99 $</h5>
                            <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                        </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center my-4">
                        <a href="#" className="btn btn-primary px-4 py-3 rounded-pill w-100">Vew More</a>
                    </div>
                    </div>
                    <a href="#">
                    </a><div className="position-relative"><a href="#">
                        <img src="img/product-banner-2.jpg" className="img-fluid w-100 rounded" alt="Image" />
                    </a><div className="text-center position-absolute d-flex flex-column align-items-center justify-content-center rounded p-4" style={{width: '100%', height: '100%', top: 0, right: 0, background: 'rgba(242, 139, 0, 0.3)'}}><a href="#">
                        <h5 className="display-6 text-primary">SALE</h5>
                        <h4 className="text-secondary">Get UP To 50% Off</h4>
                        </a><a href="#" className="btn btn-primary rounded-pill px-4">Shop Now</a>
                    </div>
                    </div>
                    <div className="product-tags py-4">
                    <h4 className="mb-3">PRODUCT TAGS</h4>
                    <div className="product-tags-items bg-light rounded p-3">
                        <a href="#" className="border rounded py-1 px-2 mb-2">New</a>
                        <a href="#" className="border rounded py-1 px-2 mb-2">brand</a>
                        <a href="#" className="border rounded py-1 px-2 mb-2">black</a>
                        <a href="#" className="border rounded py-1 px-2 mb-2">white</a>
                        <a href="#" className="border rounded py-1 px-2 mb-2">tablats</a>
                        <a href="#" className="border rounded py-1 px-2 mb-2">phone</a>
                        <a href="#" className="border rounded py-1 px-2 mb-2">camera</a>
                        <a href="#" className="border rounded py-1 px-2 mb-2">drone</a>
                        <a href="#" className="border rounded py-1 px-2 mb-2">talevision</a>
                        <a href="#" className="border rounded py-1 px-2 mb-2">slaes</a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-9 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="rounded mb-4 position-relative">
                    <img src="img/product-banner-3.jpg" className="img-fluid rounded w-100" style={{height: 250}} alt="Image" />
                    <div className="position-absolute rounded d-flex flex-column align-items-center justify-content-center text-center" style={{width: '100%', height: 250, top: 0, left: 0, background: 'rgba(242, 139, 0, 0.3)'}}>
                        <h4 className="display-5 text-primary">SALE</h4>
                        <h3 className="display-4 text-white mb-4">Get UP To 50% Off</h3>
                        <a href="#" className="btn btn-primary rounded-pill">Shop Now</a>
                    </div>
                    </div>
                    <div className="row g-4">
                    <div className="col-xl-7">
                        <div className="input-group w-100 mx-auto d-flex">
                        <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                        <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search" /></span>
                        </div>
                    </div>
                    <div className="col-xl-3 text-end">
                        <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between">
                        <label htmlFor="electronics">Sort By:</label>
                        <select id="electronics" name="electronicslist" className="border-0 form-select-sm bg-light me-3" form="electronicsform">
                            <option value="volvo">Default Sorting</option>
                            <option value="volv">Nothing</option>
                            <option value="sab">Popularity</option>
                            <option value="saab">Newness</option>
                            <option value="opel">Average Rating</option>
                            <option value="audio">Low to high</option>
                            <option value="audi">High to low</option>
                        </select>
                        </div>
                    </div>
                    <div className="col-lg-4 col-xl-2">
                        <ul className="nav nav-pills d-inline-flex text-center py-2 px-2 rounded bg-light mb-4">
                        <li className="nav-item me-4">
                            <a className="bg-light" data-bs-toggle="pill" href="#tab-5">
                            <i className="fas fa-th fa-3x text-primary" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="bg-light" data-bs-toggle="pill" href="#tab-6">
                            <i className="fas fa-bars fa-3x text-primary" />
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="tab-content">
                    <div id="tab-5" className="tab-pane fade show p-0 active">
                        <div className="row g-4 product">

                            <ProdCat categoria={categoria} />
                        

                        <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="pagination d-flex justify-content-center mt-5">
                            <a href="#" className="rounded">«</a>
                            <a href="#" className="active rounded">1</a>
                            <a href="#" className="rounded">2</a>
                            <a href="#" className="rounded">3</a>
                            <a href="#" className="rounded">4</a>
                            <a href="#" className="rounded">5</a>
                            <a href="#" className="rounded">6</a>
                            <a href="#" className="rounded">»</a>
                            </div>
                        </div>

                        </div>
                    </div>
                    <div id="tab-6" className="products tab-pane fade show p-0">
                        <div className="row g-4 products-mini">
                        <div className="col-lg-6">
                            <div className="products-mini-item border">
                            <div className="row g-0">
                                <div className="col-5">
                                <div className="products-mini-img border-end h-100">
                                    <img src="img/product-3.png" className="img-fluid w-100 h-100" alt="Image" />
                                    <div className="products-mini-icon rounded-circle bg-primary">
                                    <a href="#"><i className="fa fa-eye fa-1x text-white" /></a>
                                    </div>
                                </div>
                                </div>
                                <div className="col-7">
                                <div className="products-mini-content p-3">
                                    <a href="#" className="d-block mb-2">SmartPhone</a>
                                    <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                                    <del className="me-2 fs-5">$1,250.00</del>
                                    <span className="text-primary fs-5">$1,050.00</span>
                                </div>
                                </div>
                            </div>
                            <div className="products-mini-add border p-3">
                                <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i className="fas fa-shopping-cart me-2" /> Add To Cart</a>
                                <div className="d-flex">
                                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="products-mini-item border">
                            <div className="row g-0">
                                <div className="col-5">
                                <div className="products-mini-img border-end h-100">
                                    <img src="img/product-4.png" className="img-fluid w-100 h-100" alt="Image" />
                                    <div className="products-mini-icon rounded-circle bg-primary">
                                    <a href="#"><i className="fa fa-eye fa-1x text-white" /></a>
                                    </div>
                                </div>
                                </div>
                                <div className="col-7">
                                <div className="products-mini-content p-3">
                                    <a href="#" className="d-block mb-2">SmartPhone</a>
                                    <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                                    <del className="me-2 fs-5">$1,250.00</del>
                                    <span className="text-primary fs-5">$1,050.00</span>
                                </div>
                                </div>
                            </div>
                            <div className="products-mini-add border p-3">
                                <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i className="fas fa-shopping-cart me-2" /> Add To Cart</a>
                                <div className="d-flex">
                                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="products-mini-item border">
                            <div className="row g-0">
                                <div className="col-5">
                                <div className="products-mini-img border-end h-100">
                                    <img src="img/product-5.png" className="img-fluid w-100 h-100" alt="Image" />
                                    <div className="products-mini-icon rounded-circle bg-primary">
                                    <a href="#"><i className="fa fa-eye fa-1x text-white" /></a>
                                    </div>
                                </div>
                                </div>
                                <div className="col-7">
                                <div className="products-mini-content p-3">
                                    <a href="#" className="d-block mb-2">SmartPhone</a>
                                    <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                                    <del className="me-2 fs-5">$1,250.00</del>
                                    <span className="text-primary fs-5">$1,050.00</span>
                                </div>
                                </div>
                            </div>
                            <div className="products-mini-add border p-3">
                                <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i className="fas fa-shopping-cart me-2" /> Add To Cart</a>
                                <div className="d-flex">
                                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="products-mini-item border">
                            <div className="row g-0">
                                <div className="col-5">
                                <div className="products-mini-img border-end h-100">
                                    <img src="img/product-6.png" className="img-fluid w-100 h-100" alt="Image" />
                                    <div className="products-mini-icon rounded-circle bg-primary">
                                    <a href="#"><i className="fa fa-eye fa-1x text-white" /></a>
                                    </div>
                                </div>
                                </div>
                                <div className="col-7">
                                <div className="products-mini-content p-3">
                                    <a href="#" className="d-block mb-2">SmartPhone</a>
                                    <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                                    <del className="me-2 fs-5">$1,250.00</del>
                                    <span className="text-primary fs-5">$1,050.00</span>
                                </div>
                                </div>
                            </div>
                            <div className="products-mini-add border p-3">
                                <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i className="fas fa-shopping-cart me-2" /> Add To Cart</a>
                                <div className="d-flex">
                                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="products-mini-item border">
                            <div className="row g-0">
                                <div className="col-5">
                                <div className="products-mini-img border-end h-100">
                                    <img src="img/product-7.png" className="img-fluid w-100 h-100" alt="Image" />
                                    <div className="products-mini-icon rounded-circle bg-primary">
                                    <a href="#"><i className="fa fa-eye fa-1x text-white" /></a>
                                    </div>
                                </div>
                                </div>
                                <div className="col-7">
                                <div className="products-mini-content p-3">
                                    <a href="#" className="d-block mb-2">SmartPhone</a>
                                    <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                                    <del className="me-2 fs-5">$1,250.00</del>
                                    <span className="text-primary fs-5">$1,050.00</span>
                                </div>
                                </div>
                            </div>
                            <div className="products-mini-add border p-3">
                                <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i className="fas fa-shopping-cart me-2" /> Add To Cart</a>
                                <div className="d-flex">
                                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="products-mini-item border">
                            <div className="row g-0">
                                <div className="col-5">
                                <div className="products-mini-img border-end h-100">
                                    <img src="img/product-8.png" className="img-fluid w-100 h-100" alt="Image" />
                                    <div className="products-mini-icon rounded-circle bg-primary">
                                    <a href="#"><i className="fa fa-eye fa-1x text-white" /></a>
                                    </div>
                                </div>
                                </div>
                                <div className="col-7">
                                <div className="products-mini-content p-3">
                                    <a href="#" className="d-block mb-2">SmartPhone</a>
                                    <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                                    <del className="me-2 fs-5">$1,250.00</del>
                                    <span className="text-primary fs-5">$1,050.00</span>
                                </div>
                                </div>
                            </div>
                            <div className="products-mini-add border p-3">
                                <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i className="fas fa-shopping-cart me-2" /> Add To Cart</a>
                                <div className="d-flex">
                                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="products-mini-item border">
                            <div className="row g-0">
                                <div className="col-5">
                                <div className="products-mini-img border-end h-100">
                                    <img src="img/product-9.png" className="img-fluid w-100 h-100" alt="Image" />
                                    <div className="products-mini-icon rounded-circle bg-primary">
                                    <a href="#"><i className="fa fa-eye fa-1x text-white" /></a>
                                    </div>
                                </div>
                                </div>
                                <div className="col-7">
                                <div className="products-mini-content p-3">
                                    <a href="#" className="d-block mb-2">SmartPhone</a>
                                    <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                                    <del className="me-2 fs-5">$1,250.00</del>
                                    <span className="text-primary fs-5">$1,050.00</span>
                                </div>
                                </div>
                            </div>
                            <div className="products-mini-add border p-3">
                                <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i className="fas fa-shopping-cart me-2" /> Add To Cart</a>
                                <div className="d-flex">
                                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="products-mini-item border">
                            <div className="row g-0">
                                <div className="col-5">
                                <div className="products-mini-img border-end h-100">
                                    <img src="img/product-12.png" className="img-fluid w-100 h-100" alt="Image" />
                                    <div className="products-mini-icon rounded-circle bg-primary">
                                    <a href="#"><i className="fa fa-eye fa-1x text-white" /></a>
                                    </div>
                                </div>
                                </div>
                                <div className="col-7">
                                <div className="products-mini-content p-3">
                                    <a href="#" className="d-block mb-2">SmartPhone</a>
                                    <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                                    <del className="me-2 fs-5">$1,250.00</del>
                                    <span className="text-primary fs-5">$1,050.00</span>
                                </div>
                                </div>
                            </div>
                            <div className="products-mini-add border p-3">
                                <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i className="fas fa-shopping-cart me-2" /> Add To Cart</a>
                                <div className="d-flex">
                                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="products-mini-item border">
                            <div className="row g-0">
                                <div className="col-5">
                                <div className="products-mini-img border-end h-100">
                                    <img src="img/product-13.png" className="img-fluid w-100 h-100" alt="Image" />
                                    <div className="products-mini-icon rounded-circle bg-primary">
                                    <a href="#"><i className="fa fa-eye fa-1x text-white" /></a>
                                    </div>
                                </div>
                                </div>
                                <div className="col-7">
                                <div className="products-mini-content p-3">
                                    <a href="#" className="d-block mb-2">SmartPhone</a>
                                    <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                                    <del className="me-2 fs-5">$1,250.00</del>
                                    <span className="text-primary fs-5">$1,050.00</span>
                                </div>
                                </div>
                            </div>
                            <div className="products-mini-add border p-3">
                                <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i className="fas fa-shopping-cart me-2" /> Add To Cart</a>
                                <div className="d-flex">
                                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="products-mini-item border">
                            <div className="row g-0">
                                <div className="col-5">
                                <div className="products-mini-img border-end h-100">
                                    <img src="img/product-14.png" className="img-fluid w-100 h-100" alt="Image" />
                                    <div className="products-mini-icon rounded-circle bg-primary">
                                    <a href="#"><i className="fa fa-eye fa-1x text-white" /></a>
                                    </div>
                                </div>
                                </div>
                                <div className="col-7">
                                <div className="products-mini-content p-3">
                                    <a href="#" className="d-block mb-2">SmartPhone</a>
                                    <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                                    <del className="me-2 fs-5">$1,250.00</del>
                                    <span className="text-primary fs-5">$1,050.00</span>
                                </div>
                                </div>
                            </div>
                            <div className="products-mini-add border p-3">
                                <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i className="fas fa-shopping-cart me-2" /> Add To Cart</a>
                                <div className="d-flex">
                                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="products-mini-item border">
                            <div className="row g-0">
                                <div className="col-5">
                                <div className="products-mini-img border-end h-100">
                                    <img src="img/product-15.png" className="img-fluid w-100 h-100" alt="Image" />
                                    <div className="products-mini-icon rounded-circle bg-primary">
                                    <a href="#"><i className="fa fa-eye fa-1x text-white" /></a>
                                    </div>
                                </div>
                                </div>
                                <div className="col-7">
                                <div className="products-mini-content p-3">
                                    <a href="#" className="d-block mb-2">SmartPhone</a>
                                    <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                                    <del className="me-2 fs-5">$1,250.00</del>
                                    <span className="text-primary fs-5">$1,050.00</span>
                                </div>
                                </div>
                            </div>
                            <div className="products-mini-add border p-3">
                                <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i className="fas fa-shopping-cart me-2" /> Add To Cart</a>
                                <div className="d-flex">
                                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="products-mini-item border">
                            <div className="row g-0">
                                <div className="col-5">
                                <div className="products-mini-img border-end h-100">
                                    <img src="img/product-16.png" className="img-fluid w-100 h-100" alt="Image" />
                                    <div className="products-mini-icon rounded-circle bg-primary">
                                    <a href="#"><i className="fa fa-eye fa-1x text-white" /></a>
                                    </div>
                                </div>
                                </div>
                                <div className="col-7">
                                <div className="products-mini-content p-3">
                                    <a href="#" className="d-block mb-2">SmartPhone</a>
                                    <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                                    <del className="me-2 fs-5">$1,250.00</del>
                                    <span className="text-primary fs-5">$1,050.00</span>
                                </div>
                                </div>
                            </div>
                            <div className="products-mini-add border p-3">
                                <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i className="fas fa-shopping-cart me-2" /> Add To Cart</a>
                                <div className="d-flex">
                                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="pagination d-flex justify-content-center mt-5">
                            <a href="#" className="rounded">«</a>
                            <a href="#" className="active rounded">1</a>
                            <a href="#" className="rounded">2</a>
                            <a href="#" className="rounded">3</a>
                            <a href="#" className="rounded">4</a>
                            <a href="#" className="rounded">5</a>
                            <a href="#" className="rounded">6</a>
                            <a href="#" className="rounded">»</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

  )
}

export default ShopPages