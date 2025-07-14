import React from "react";
import NotFoundSvg from "./components/NotFoundSvg";
import Link from "next/link";

const NotFoundPage = () => {
	return (
		<>
			<section className="container pt-3">
				<div className="position-relative py-5">
					<div className="row position-relative align-items-center justify-content-center z-2 py-xl-4">
						{/* <!-- Illustration --> */}
						<div className="col-10 col-sm-7 col-md-6 col-lg-5 col-xxl-4 offset-lg-1 offset-xxl-2 order-md-2">
							<NotFoundSvg />
						</div>

						{/* <!-- Text --> */}
						<div className="col-md-5 col-xxl-4 offset-md-1 order-md-1">
							<div className="text-center text-md-start px-4 px-sm-5 px-md-0">
								<h1 className="mb-sm-4">We lost that page...</h1>
								<p className="pb-2 pb-sm-3 pb-md-0 mb-4 mb-md-5">
									The page you are looking for was moved, removed or might never
									existed. Here some helpful links:
								</p>
								<div className="position-relative">
									<i className="ci-search position-absolute top-50 start-0 translate-middle-y fs-lg ms-3"></i>
									<input
										type="search"
										className="form-control form-control-lg form-icon-start"
										placeholder="What are you looking for..."
										aria-label="Search"
									/>
								</div>
							</div>
						</div>
					</div>
					<span
						className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark rtl-flip"
						style={{
							background:
								"linear-gradient(124deg, #e2daec -29.7%, #e4eefd 65.5%)",
						}}
					></span>
					<span
						className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark rtl-flip"
						style={{
							background:
								"linear-gradient(124deg, #37343b -29.7%, #222a36 65.5%)",
						}}
					></span>
				</div>
			</section>
			<section className="container pt-4">
				<div className="row row-cols-1 row-cols-md-3 g-3 g-lg-4">
					<div className="col">
						<div className="nav flex-column position-relative h-100 border rounded-5 p-4 pt-3">
							<Link
								className="nav-link animate-underline stretched-link text-body-emphasis fw-semibold px-0 mb-1"
								href="home-fashion-v2.html"
							>
								<span className="animate-target">Go to homepage</span>
								<i className="ci-chevron-right fs-base ms-1"></i>
							</Link>
							<span className="fs-sm">Continue shopping from the homepage</span>
						</div>
					</div>
					<div className="col">
						<div className="nav flex-column position-relative h-100 border rounded-5 p-4 pt-3">
							<Link
								className="nav-link animate-underline stretched-link text-body-emphasis fw-semibold px-0 mb-1"
								href="shop-catalog-fashion.html"
							>
								<span className="animate-target">Trending products</span>
								<i className="ci-chevron-right fs-base ms-1"></i>
							</Link>
							<span className="fs-sm">Check out the trending products</span>
						</div>
					</div>
					<div className="col">
						<div className="nav flex-column position-relative h-100 border rounded-5 p-4 pt-3">
							<Link
								className="nav-link animate-underline stretched-link text-body-emphasis fw-semibold px-0 mb-1"
								href="#!"
							>
								<span className="animate-target">Help and support</span>
								<i className="ci-chevron-right fs-base ms-1"></i>
							</Link>
							<span className="fs-sm">Our friendly team here to help</span>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default NotFoundPage;
