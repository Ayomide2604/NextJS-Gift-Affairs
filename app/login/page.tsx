"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import cover from "@/assets/img/auth/cover.png";
import LoginForm from "./LoginForm";
import { useRouter } from "next/navigation";

const LoginPage = () => {
	const [user, setUser] = useState({ email: "", password: "" });
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUser((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			setLoading(true);
			const response = await signIn("credentials", {
				email: user.email,
				password: user.password,
				redirect: false,
			});

			if (response?.ok) {
				router.push("/");
				setLoading(false);
			}
		} catch (error) {
			console.error(error);
		}
	};

	if (loading) {
		return <p>Loading...</p>;
	}

	return (
		<main className="content-wrapper w-100 px-3 ps-lg-5 pe-lg-4 mx-auto">
			<div className="d-lg-flex">
				{/* <!-- Login form + Footer --> */}
				<div
					className="d-flex flex-column min-vh-100 w-100 py-4 mx-auto me-lg-5"
					style={{ maxWidth: "416px" }}
				>
					{/* <!-- Logo --> */}
					<header className="navbar px-0 pb-4 mt-n2 mt-sm-0 mb-2 mb-md-3 mb-lg-4">
						<Link href="/" className="navbar-brand pt-0">
							Gift Shop
						</Link>
					</header>

					<h1 className="h2 mt-auto">Welcome back</h1>
					<div className="nav fs-sm mb-4">
						Don&apos;t have an account?
						<a
							className="nav-link text-decoration-underline p-0 ms-2"
							href="account-signup.html"
						>
							Create an account
						</a>
					</div>

					{/* <!-- Form --> */}
					<LoginForm
						onChange={handleChange}
						user={user}
						onSubmit={handleSubmit}
					/>

					{/* <!-- Divider --> */}
					<div className="d-flex align-items-center my-4">
						<hr className="w-100 m-0" />
						<span className="text-body-emphasis fw-medium text-nowrap mx-4">
							or continue with
						</span>
						<hr className="w-100 m-0" />
					</div>

					{/* <!-- Social login --> */}
					<div className="d-flex flex-column flex-sm-row gap-3 pb-4 mb-3 mb-lg-4">
						<button
							type="button"
							className="btn btn-lg btn-outline-secondary w-100 px-2"
						>
							<i className="ci-google ms-1 me-1"></i>
							Google
						</button>
						<button
							type="button"
							className="btn btn-lg btn-outline-secondary w-100 px-2"
						>
							<i className="ci-facebook ms-1 me-1"></i>
							Facebook
						</button>
						<button
							type="button"
							className="btn btn-lg btn-outline-secondary w-100 px-2"
						>
							<i className="ci-apple ms-1 me-1"></i>
							Apple
						</button>
					</div>

					{/* <!-- Footer --> */}
					<footer className="mt-auto">
						<div className="nav mb-4">
							<a
								className="nav-link text-decoration-underline p-0"
								href="help-topics-v1.html"
							>
								Need help?
							</a>
						</div>
						<p className="fs-xs mb-0">
							© All rights reserved. Made by{" "}
							<span className="animate-underline">
								<a
									className="animate-target text-dark-emphasis text-decoration-none"
									href="https://createx.studio/"
									target="_blank"
									rel="noreferrer"
								>
									Createx Studio
								</a>
							</span>
						</p>
					</footer>
				</div>

				{/* <!-- Cover image visible on screens > 992px wide (lg breakpoint) --> */}
				<div
					className="d-none d-lg-block w-100 py-4 ms-auto"
					style={{ maxWidth: "1034px" }}
				>
					<div className="d-flex flex-column justify-content-end h-100 rounded-5 overflow-hidden">
						<span
							className="position-absolute top-0 start-0 w-100 h-100 d-none-dark"
							style={{
								background:
									" linear-gradient(-90deg, #accbee 0%, #e7f0fd 100%)",
							}}
						></span>
						<span
							className="position-absolute top-0 start-0 w-100 h-100 d-none d-block-dark"
							style={{
								background:
									" linear-gradient(-90deg, #1b273a 0%, #1f2632 100%)",
							}}
						></span>
						<div
							className="ratio position-relative z-2"
							// style="--cz-aspect-ratio: calc(1030 / 1032 * 100%)"
						>
							<Image src={cover} alt="Girl" />
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default LoginPage;
