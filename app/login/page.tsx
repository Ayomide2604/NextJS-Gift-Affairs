"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import cover from "@/assets/img/auth/cover.png";
import LoginForm from "./LoginForm";
import { useRouter } from "next/navigation";
import Loader from "../components/Loader";
import AuthFooter from "../components/AuthFooter";
import SocialAuth from "../components/SocialAuth";
import { toast } from "sonner";

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
				toast.success("Login successful");
				setLoading(false);
			}
		} catch (error) {
			console.error(error);
			toast.error("Login failed");
			setLoading(false);
		} finally {
			setLoading(false);
		}
	};

	if (loading) {
		return <Loader />;
	}

	return (
		<main className="content-wrapper w-100 px-3 ps-lg-5 pe-lg-4 mx-auto">
			<div className="d-lg-flex">
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
						<Link
							className="nav-link text-decoration-underline p-0 ms-2"
							href="/register"
						>
							Create an account
						</Link>
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
					<SocialAuth />

					{/* <!-- Footer --> */}
					<AuthFooter />
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
