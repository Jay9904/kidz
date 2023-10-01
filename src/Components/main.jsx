import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

// images
import logo from "../img/logo-school.png";
import crimg1 from '../img/courses-img1.jpg';
import crimg2 from '../img/courses-img2 (1).jpg';
import crimg3 from '../img/courses-img3.jpg';
import crimg4 from '../img/courses-img4.jpg';

import gallery1 from '../img/gallery/gallery-img1.jpg';
import gallery2 from '../img/gallery/gallery-img2.jpg';
import gallery3 from '../img/gallery/gallery-img3.jpg';
import gallery4 from '../img/gallery/gallery-img4.jpg';
import gallery5 from '../img/gallery/gallery-img5.jpg';
import gallery6 from '../img/gallery/gallery-img6.jpg';
import gallery7 from '../img/gallery/gallery-img7.jpg';
import gallery8 from '../img/gallery/gallery-img8.jpg';

import footer1 from '../img/footer1.jpg';
import footer2 from '../img/footer2.jpg';
import footer3 from '../img/footer3.jpg';


export default function Main() {
    return (
        <>
            <div className="position-relative">
                {/* Slider */}
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[EffectFade, Navigation, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="slid1 slid-bg d-flex justify-content-center align-items-center">
                            <div className="container text-light ">
                                <h1 className="fw-bolder">Kinder Garden Website</h1>
                                <p className="fs-5 fw-medium">Kidzz is the perfect Theme for Kinder garden School, Very Easy to use</p>
                                <button className="btn bg-light text-danger fw-semibold">PURCHASE</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slid2 slid-bg d-flex justify-content-center align-items-center">
                            <div className="container text-light ">
                                <h1 className="fw-bolder">Kinder Garden Website</h1>
                                <p className="fs-5 fw-medium">Kidzz is the perfect Theme for Kinder garden School, Very Easy to use</p>
                                <button className="btn bg-light text-danger fw-semibold">PURCHASE</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slid3 slid-bg d-flex justify-content-center align-items-center">
                            <div className="container text-light text-center">
                                <h1 className="fw-bolder">Kinder Garden Website</h1>
                                <p className="fs-5 fw-medium">Kidzz is the perfect Theme for Kinder garden School, Very Easy to use</p>
                                <button className="btn bg-light text-danger fw-semibold">PURCHASE</button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div className="container hstack gap-5 position-absolute start-50 translate-middle z-3 d-none d-lg-flex">
                    <div className="col p-5 bg-warning rounded rounded-3 position-relative">
                        <div className="box rounded-circle bg-light position-absolute top-0 start-50 translate-middle z-3 text-center border border-warning border-5"><i class="fa-solid fa-file-lines fs-1 text-center mt-3"></i></div>
                        <p className="text-center fs-3 text-light m-0">Courses</p>
                    </div>
                    <div className="col p-5 bg-success rounded rounded-3 position-relative">
                        <div className="box rounded-circle bg-light position-absolute top-0 start-50 translate-middle z-3 text-center border border-success border-5"><i class="fa-regular fa-calendar fs-1 text-center mt-3"></i></div>
                        <p className="text-center fs-3 text-light m-0">Teachers</p>
                    </div>
                    <div className="col p-5 bg-danger rounded rounded-3 position-relative">
                        <div className="box rounded-circle bg-light position-absolute top-0 start-50 translate-middle z-3 text-center border border-danger border-5"><i class="fa-solid fa-images fs-1 text-center mt-4"></i></div>

                        <p className="text-center fs-3 text-light m-0">Gallery</p>
                    </div>
                    <div className="col p-5 bg-info rounded rounded-3 position-relative">
                        <div className="box rounded-circle bg-light position-absolute top-0 start-50 translate-middle z-3 text-center border border-info border-5"><i class="fa-regular fa-paste fs-1 text-center mt-3"></i></div>
                        <p className="text-center fs-3 text-light m-0">News</p>
                    </div>
                </div>

                {/* features */}
                <div className="container features">
                    <h2 className="text-center text-danger">Our Features</h2>
                    <div className="row my-5">
                        <div className="d-flex gap-3 col-4">
                            <div>
                                <div className="media-icon bg-warning rounded-circle position-relative">
                                    <i class="fa-solid fa-graduation-cap fs-2 position-absolute top-50 start-50 translate-middle text-light"></i>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-warning fw-bold">Experienced Teachers</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                        <div className="d-flex gap-3 col-4">
                            <div>
                                <div className="media-icon bg-success rounded-circle position-relative">
                                    <i class="fa-solid fa-leaf fs-2 position-absolute top-50 start-50 translate-middle text-light"></i>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-success fw-bold">Physical Activity</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                        <div className="d-flex gap-3 col-4">
                            <div>
                                <div className="media-icon bg-danger rounded-circle position-relative">
                                    <i class="fa-solid fa-car-rear fs-2 position-absolute top-50 start-50 translate-middle text-light"></i>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-danger fw-bold">Transportation</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                        <div className="d-flex gap-3 col-4">
                            <div>
                                <div className="media-icon bg-info rounded-circle position-relative">
                                    <i class="fa-solid fa-spoon fs-2 position-absolute top-50 start-50 translate-middle text-light"></i>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-info fw-bold">Delicious Food</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                        <div className="d-flex gap-3 col-4">
                            <div>
                                <div className="media-icon bg-purple rounded-circle position-relative">
                                    <i class="fa-solid fa-heart fs-2 position-absolute top-50 start-50 translate-middle text-light"></i>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-purple fw-bold">Love & Care</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                        <div className="d-flex gap-3 col-4">
                            <div>
                                <div className="media-icon bg-indigo rounded-circle position-relative">
                                    <i class="fa-solid fa-shield-cat fs-2 position-absolute top-50 start-50 translate-middle text-light"></i>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-indigo fw-bold">Annual Sports</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* more info */}
                <div className="py-5 info text-light">
                    <center>
                        <h2 className="text-light fw-bold">Need More Information?</h2>
                        <p className="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod</p>
                        <button className="btn btn-danger px-4 py-2 fw-semibold"><i class="fa-solid fa-phone me-2"></i>CONTACT</button>
                    </center>
                </div>

                {/* cources */}
                <div className="container">
                    <h2 className="text-center text-danger my-5">Our Courses</h2>
                    <div className="hstack gap-4 mb-5">
                        <div className="col">
                            <div className="rounded rounded-3 border-bottom border-5 position-relative">
                                <img src={crimg1} alt="" className="img-fluid w-100 border-bottom border-warning border-5 rounded" />
                                <span className="bg-warning p-3 rounded-circle fs-4 fw-bold text-light position-absolute pricetag">$50</span>
                                <div className="bg-light p-3">
                                    <h4 className="text-warning">Morbi Scelerisque Nibh.</h4>
                                    <p className="mb-1"><i class="fa-regular fa-calendar me-2"></i>Age 2 to 4 Years</p>
                                    <p><i class="fa-regular fa-clock me-2"></i>9.00AM-11.00AM</p>
                                    <p className="my-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    <button className="btn btn-light border-3 border-dark mb-2"><i class="fa-solid fa-cart-arrow-down me-2"></i>ADD TO CART</button>
                                    <p><i class="fa-regular fa-circle-right me-2"></i>More</p>
                                </div>
                            </div>
                        </div>
                        <div className="col border">
                            <div className="rounded rounded-3 border-bottom border-5 position-relative">
                                <img src={crimg2} alt="" className="img-fluid w-100 border-bottom border-success border-5 rounded" />
                                <span className="bg-success p-3 rounded-circle fs-4 fw-bold text-light position-absolute pricetag">$50</span>
                                <div className="bg-light p-3">
                                    <h4 className="text-success">Phasellus Convallis Eros..</h4>
                                    <p className="m-1"><i class="fa-regular fa-calendar me-2"></i>Age 2 to 4 Years</p>
                                    <p><i class="fa-regular fa-clock me-2"></i>9.00AM-11.00AM</p>
                                    <p className="my-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    <button className="btn btn-light border-3 border-dark mb-2"><i class="fa-solid fa-cart-arrow-down me-2"></i>ADD TO CART</button>
                                    <p><i class="fa-regular fa-circle-right me-2"></i>More</p>
                                </div></div>

                        </div>
                        <div className="col border">
                            <div className="rounded rounded-3 border-bottom border-5 position-relative">
                                <span className="bg-danger p-3 rounded-circle fs-4 fw-bold text-light position-absolute pricetag">$50</span>
                                <img src={crimg3} alt="" className="img-fluid w-100 border-bottom border-danger border-5 rounded" />
                                <div className="bg-light p-3">
                                    <h4 className="text-danger">Suspendisse A Libero D</h4>
                                    <p className="m-1"><i class="fa-regular fa-calendar me-2"></i>Age 2 to 4 Years</p>
                                    <p><i class="fa-regular fa-clock me-2"></i>9.00AM-11.00AM</p>
                                    <p className="my-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    <button className="btn btn-light border-3 border-dark mb-2"><i class="fa-solid fa-cart-arrow-down me-2"></i>ADD TO CART</button>
                                    <p><i class="fa-regular fa-circle-right me-2"></i>More</p>
                                </div>
                            </div>
                        </div>
                        <div className="col border">
                            <div className="rounded rounded-3 border-bottom border-5 position-relative">
                                <img src={crimg4} alt="" className="img-fluid w-100 border-bottom border-info border-5 rounded" />
                                <span className="bg-info p-3 rounded-circle fs-4 fw-bold text-light position-absolute pricetag">$50</span>
                                <div className="bg-light p-3">
                                    <h4 className="text-info">Aenean Cursus Urna Ne.</h4>
                                    <p className="m-1"><i class="fa-regular fa-calendar me-2"></i>Age 2 to 4 Years</p>
                                    <p><i class="fa-regular fa-clock me-2"></i>9.00AM-11.00AM</p>
                                    <p className="my-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    <button className="btn btn-light border-3 border-dark mb-2"><i class="fa-solid fa-cart-arrow-down me-2"></i>ADD TO CART</button>
                                    <p><i class="fa-regular fa-circle-right me-2"></i>More</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Gallery */}
                <div className="container">
                    <h2 className="text-center text-danger my-5">Our Gallery</h2>
                    <div className="hstack gap-3 justify-content-center my-3">
                        <button className="btn bg-light border-bottom border-5 fw-bolder all">VIEW ALL</button>
                        <button className="btn bg-light border-bottom border-5 fw-bolder all">CHARITY</button>
                        <button className="btn bg-light border-bottom border-5 fw-bolder all">NATURE</button>
                        <button className="btn bg-light border-bottom border-5 fw-bolder all">CHILDREN</button>
                    </div>
                    <div className="row justify-content-center">
                        <div className="gallery-item col-3 my-3">
                            <img src={gallery1} alt="" className="img-fluid w-100" />
                        </div>
                        <div className="gallery-item col-3 my-3">
                            <img src={gallery2} alt="" className="img-fluid w-100" />
                        </div>
                        <div className="gallery-item col-3 my-3">
                            <img src={gallery3} alt="" className="img-fluid w-100" />
                        </div>
                        <div className="gallery-item col-3 my-3">
                            <img src={gallery4} alt="" className="img-fluid w-100" />
                        </div>
                        <div className="gallery-item col-3 my-3">
                            <img src={gallery5} alt="" className="img-fluid w-100" />
                        </div>
                        <div className="gallery-item col-3 my-3">
                            <img src={gallery6} alt="" className="img-fluid w-100" />
                        </div>
                        <div className="gallery-item col-3 my-3">
                            <img src={gallery7} alt="" className="img-fluid w-100" />
                        </div>
                        <div className="gallery-item col-3 my-3">
                            <img src={gallery8} alt="" className="img-fluid w-100" />
                        </div>
                    </div>
                    <div className="text-center"><button className="btn btn-danger my-4">VIEW MORE</button></div>
                </div>

                {/* countdown */}
                <div className="countdown py-5">
                    <h2 className="text-center text-light fw-bold">Some Fun Facts</h2>
                    <p className="text-light text-center fs-5 fw-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, natus.</p>
                    <div className="container d-flex justify-content-around py-5">
                        <div>
                            <div className="cd-item border border-5 rounded-circle border-light position-relative"><span className="text-center text-light fs-1 fw-bolder position-absolute top-50 start-50 translate-middle">179</span></div>
                            <button className="btn btn-danger border-bottom border-5 mt-3 p-1" >EVENTS HELD</button>
                        </div>
                        <div>
                            <div className="cd-item border border-5 rounded-circle border-light position-relative"><span className="text-center text-light fs-1 fw-bolder position-absolute top-50 start-50 translate-middle">548</span></div>
                            <button className="btn btn-warning border-bottom border-5 mt-3 p-1" >HAPPY FUNS</button>
                        </div>
                        <div>
                            <div className="cd-item border border-5 rounded-circle border-light position-relative"><span className="text-center text-light fs-1 fw-bolder position-absolute top-50 start-50 translate-middle">305</span></div>
                            <button className="btn btn-success border-bottom border-5 mt-3 p-1" >HAPPY CLIENTS</button>
                        </div>
                        <div>
                            <div className="cd-item border border-5 rounded-circle border-light position-relative"><span className="text-center text-light fs-1 fw-bolder position-absolute top-50 start-50 translate-middle">1000</span></div>
                            <button className="btn btn-info border-bottom border-5 mt-3 p-1" >HOURS SUPPORT</button>
                        </div>
                    </div>
                </div>

                {/* news */}
                <div className="container">
                    <h2 className="text-danger text-center my-5 fw-bold">latest News</h2>
                    <div className="hstack gap-3">
                        <div className="">
                            <img src={crimg1} alt="" className="img-fluid border-bottom border-warning border-5 rounded" />
                            <div className="p-3 bg-light rounded border-bottom border-5">
                                <h4 className="text-warning">The Standard Chunk Of Lorem.</h4>
                                <span className="me-2"><i class="fa-solid fa-person me-2"></i>Jone Dow</span>
                                <span><i class="fa-solid fa-comments me-2"></i>4 Comments</span>
                                <p className="my-3">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classi cal Latin literature.</p>
                                <p className="rm-warning"><i class="fa-solid fa-angles-right me-2"></i>Read More</p>
                            </div>
                        </div>
                        <div className="">
                            <img src={crimg2} alt="" className="img-fluid w-100 border-bottom border-warning border-5 rounded" />
                            <div className="p-3 bg-light rounded border-bottom border-5">
                                <h4 className="text-success">Vestibulum Congue Massa Vitae..</h4>
                                <span className="me-2"><i class="fa-solid fa-person me-2"></i>Jone Dow</span>
                                <span><i class="fa-solid fa-comments me-2"></i>4 Comments</span>
                                <p className="my-3">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classi cal Latin literature.</p>
                                <p className="rm-success"><i class="fa-solid fa-angles-right me-2"></i>Read More</p>
                            </div>
                        </div>
                        <div className="">
                            <img src={crimg4} alt="" className="img-fluid w-100 border-bottom border-warning border-5 rounded" />
                            <div className="p-3 bg-light rounded border-bottom border-5">
                                <h4 className="text-danger">Vestibulum Congue Massa Vitae..</h4>
                                <span className="me-2"><i class="fa-solid fa-person me-2"></i>Jone Dow</span>
                                <span><i class="fa-solid fa-comments me-2"></i>4 Comments</span>
                                <p className="my-3">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classi cal Latin literature.</p>
                                <p className="rm-danger"><i class="fa-solid fa-angles-right me-2"></i>Read More</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center"><button className="btn btn-danger my-4 border-bottom border-5">VIEW MORE</button></div>
                </div>

                {/* Address */}
                <div className="bg-secondary-subtle py-5">
                    <div className="d-flex container">
                        <div className="col-6">
                            <h3 className="text-danger fw-bold">Our Address</h3>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p><i class="fa-solid fa-location-dot me-2 text-warning fw-bold"></i>9/4/C Ring Road,Garden Street Dhaka,Bangladesh-1200</p>
                            <p><i class="fa-solid fa-envelope me-2 text-success fw-bold"></i>hello@example.com</p>
                            <p><i class="fa-solid fa-phone me-2 text-danger fw-bold"></i>333 555 888</p>
                        </div>
                        <div className="col-6">
                            <form action="">
                                <input type="text" placeholder="First name" className="form-control border-warning border-3 mb-3" />
                                <input type="email" placeholder="Email Address" className="form-control border-success border-3 mb-3" />
                                <textarea name="" id="" cols="10" rows="5" placeholder="Write Massage" className="form-control border-3 border-info mb-3"></textarea>
                                <button className="btn btn-danger">SEND MESSAGE</button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* footer */}
                <div className="footer-bg">
                    <div className="d-flex text-light container gap-5 py-5">
                        <div className="col">
                            <img src={logo} alt="" className="img-fluid" />
                            <p className="my-3">Excepteur sint occaecat cupidatat non proident, sunt in culpa officia.Lorem ipsum dolor sit amet.</p>
                            <p>consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="col">
                            <h4 className="mb-3">Usefull Links</h4>
                            <ul className="list-unstyled">
                                <li className="mb-2"><i class="fa-solid fa-angles-right me-2"></i>Kidz School</li>
                                <li className="mb-2"><i class="fa-solid fa-angles-right me-2"></i>About Kidz School</li>
                                <li className="mb-2"><i class="fa-solid fa-angles-right me-2"></i>Kidz Store</li>
                                <li className="mb-2"><i class="fa-solid fa-angles-right me-2"></i>Kidz Daycare</li>
                                <li className="mb-2"><i class="fa-solid fa-angles-right me-2"></i>Photo Gallery</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h4 className="mb-3">Recent Post</h4>
                            <div className="d-flex gap-3 border-bottom py-2">
                                <img src={footer1} alt="" className="rounded img-fluid border border-warning border-3" />
                                <div > <p>A Clean Website Gives More Experience To The Visitors</p>
                                    <p>July 7 - 2020</p>
                                </div>
                            </div>
                            <div className="d-flex gap-3 border-bottom py-2">
                                <img src={footer2} alt="" className="rounded img-fluid border border-warning border-3" />
                                <div> <p>Duis aute irure dolor in reprehenderit in voluptate.</p>
                                    <p>July 7 - 2020</p>
                                </div>
                            </div>
                            <div className="d-flex gap-3 py-2">
                                <img src={footer3} alt="" className="rounded img-fluid border border-warning border-3" />
                                <div> <p>Duis aute irure dolor in reprehenderit in voluptate.</p>
                                    <p>July 7 - 2020</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <h4 className="mb-3">Mailing List</h4>
                            <p>Sign up for our mailing list to get latest updates and offers.</p>
                            <div className="d-flex">
                                <input type="email" placeholder="Email address" className="form-control" />
                                <button className="btn btn-danger"><i class="fa-solid fa-check"></i></button>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="bg-dark py-3">
                    <div className="container d-flex justify-content-between">
                        <p className="text-light m-0">© 2023 Copyright Kidz School Bootstrap Template by Abdus.</p>
                        <div className="text-light hstack gap-3 fs-5">
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-google"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-pinterest"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}