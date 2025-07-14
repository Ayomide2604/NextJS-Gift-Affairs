"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Autoplay, Pagination, EffectFade, Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import hero1 from "@/assets/img/hero/hero1.png";
import hero2 from "@/assets/img/hero/hero2.png";
import hero3 from "@/assets/img/hero/hero3.png";
import Image from "next/image";

const HeroSection = () => {
	const [textSwiper, setTextSwiper] = useState<SwiperClass | null>(null);
	const [imageSwiper, setImageSwiper] = useState<SwiperClass | null>(null);

	return (
		<section className="bg-body-tertiary">
			<div className="container">
				<div className="row">
					{/* Text Slider */}
					<div className="col-md-6 col-lg-5 d-flex flex-column">
						<div className="py-4 mt-auto">
							<Swiper
								spaceBetween={24}
								loop={true}
								speed={400}
								pagination={{
									el: ".custom-pagination",
									clickable: true,
								}}
								autoplay={{
									delay: 5500,
									disableOnInteraction: false,
								}}
								modules={[Autoplay, Pagination, Controller]}
								controller={{ control: imageSwiper }}
								onSwiper={setTextSwiper}
								className="pb-1 pt-3 pt-sm-4 py-md-4 py-lg-3"
							>
								<SwiperSlide className="text-center text-md-start">
									<p className="fs-xl mb-2 mb-lg-3 mb-xl-4">
										Find the Perfect Gift for Every Occasion
									</p>
									<h2 className="display-4 text-uppercase mb-4 mb-xl-5">
										Unique & Thoughtful Presents
										<br className="d-none d-md-inline" />
										for Your Loved Ones
									</h2>
									<a className="btn btn-lg btn-outline-dark" href="#shop">
										Shop Gifts
										<i className="ci-arrow-up-right fs-lg ms-2 me-n1"></i>
									</a>
								</SwiperSlide>

								<SwiperSlide className="text-center text-md-start">
									<p className="fs-xl mb-2 mb-lg-3 mb-xl-4">
										Make Every Moment Special
									</p>
									<h2 className="display-4 text-uppercase mb-4 mb-xl-5">
										Curated Gift Boxes &
										<br className="d-none d-md-inline" />
										Personalized Surprises
									</h2>
									<a className="btn btn-lg btn-outline-dark" href="#shop">
										Browse Gift Boxes
										<i className="ci-arrow-up-right fs-lg ms-2 me-n1"></i>
									</a>
								</SwiperSlide>

								<SwiperSlide className="text-center text-md-start">
									<p className="fs-xl mb-2 mb-lg-3 mb-xl-4">
										Surprise & Delight Delivered
									</p>
									<h2 className="display-4 text-uppercase mb-4 mb-xl-5">
										Fast Shipping & Beautiful Wrapping
									</h2>
									<a className="btn btn-lg btn-outline-dark" href="#shop">
										Send a Gift
										<i className="ci-arrow-up-right fs-lg ms-2 me-n1"></i>
									</a>
								</SwiperSlide>
							</Swiper>
						</div>

						<div className="d-flex justify-content-center justify-content-md-start pb-4 pb-xl-5 mt-n1 mt-md-auto mb-md-3 mb-lg-4">
							<div className="swiper-pagination position-static w-auto pb-1 custom-pagination"></div>
						</div>
					</div>

					{/* Image Slider */}
					<div className="col-md-6 col-lg-7 align-self-end">
						<div className="position-relative ms-md-n4">
							<div className="ratio" style={{ aspectRatio: "662 / 770" }}></div>
							<Swiper
								loop={true}
								effect="fade"
								allowTouchMove={false}
								fadeEffect={{ crossFade: true }}
								modules={[EffectFade, Controller]}
								controller={{ control: textSwiper }}
								onSwiper={setImageSwiper}
								className="position-absolute top-0 start-0 w-100 h-100 user-select-none"
							>
								<SwiperSlide>
									<Image src={hero1} className="rtl-flip" alt="Image" />
								</SwiperSlide>
								<SwiperSlide>
									<Image src={hero2} className="rtl-flip" alt="Image" />
								</SwiperSlide>
								<SwiperSlide>
									<Image src={hero3} className="rtl-flip" alt="Image" />
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
