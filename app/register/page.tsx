"use client";
import React from "react";
import cover from "@/assets/img/auth/cover.png";
import Image from "next/image";
import Link from "next/link";
import AuthFooter from "../components/AuthFooter";
import SocialAuth from "../components/SocialAuth";
import RegisterForm from "./RegisterForm";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Loader from "../components/Loader";

const RegisterPage = () => {
	const router = useRouter();
	const [firstName, setFirstName] = React.useState("");
	const [lastName, setLastName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [confirmPassword, setConfirmPassword] = React.useState("");
	const [loading, setLoading] = React.useState(false);

	const handleRegister = async (e: React.FormEvent) => {
		setLoading(true);
		e.preventDefault();
		if (password !== confirmPassword) {
			setLoading(false);
			toast.error("Passwords do not match");
			return;
		}

		const data = {
			name: `${firstName} ${lastName}`,
			email,
			password,
		};
		try {
			const response = await axios.post("/api/register", data);
			if (response.status === 201) {
				toast.success("user registration successful");
				setLoading(false);
				router.push("/login");
			}
		} catch (error: Error | unknown) {
			if (error instanceof Error) {
				setLoading(false);
				toast.error(error.message);
			} else {
				setLoading(false);
				toast.error("An Unexpected Error Occurred");
			}
		} finally {
			setLoading(false);
		}
	};

	if (loading) {
		return <Loader />;
	}

	return (
		<main
			className="content-wrapper w-100 px-3 ps-lg-5 pe-lg-4 mx-auto"
			style={{ maxWidth: "1920px" }}
		>
			<div className="d-lg-flex">
				{/* <!-- Login form + Footer --> */}
				<div
					className="d-flex flex-column min-vh-100 w-100 py-4 mx-auto me-lg-5"
					style={{ maxWidth: "416px" }}
				>
					{/* <!-- Logo --> */}
					<header className="navbar px-0 pb-4 mt-n2 mt-sm-0 mb-2 mb-md-3 mb-lg-4">
						<Link href="index.html" className="navbar-brand pt-0">
							Gift Shop
						</Link>
					</header>

					<h1 className="h2 mt-auto">Create an account</h1>
					<div className="nav fs-sm mb-3 mb-lg-4">
						I already have an account
						<Link
							className="nav-link text-decoration-underline p-0 ms-2"
							href="/login"
						>
							Sign in
						</Link>
					</div>
					<div className="nav fs-sm mb-4 d-lg-none">
						<span className="me-2">Uncertain about creating an account?</span>
						<Link
							className="nav-link text-decoration-underline p-0"
							href="#benefits"
							data-bs-toggle="offcanvas"
							aria-controls="benefits"
						>
							Explore the Benefits
						</Link>
					</div>

					{/* <!-- Form --> */}
					<RegisterForm
						firstName={firstName}
						lastName={lastName}
						email={email}
						password={password}
						confirmPassword={confirmPassword}
						setFirstName={setFirstName}
						setLastName={setLastName}
						setEmail={setEmail}
						setPassword={setPassword}
						setConfirmPassword={setConfirmPassword}
						onSubmit={handleRegister}
					/>

					{/* <!-- Divider --> */}
					<div className="d-flex align-items-center my-4">
						<hr className="w-100 m-0" />
						<span className="text-body-emphasis fw-medium text-nowrap mx-4">
							or continue with
						</span>
						<hr className="w-100 m-0" />
					</div>

					{/* <- Social login --> */}
					<SocialAuth />

					{/* <!-- Footer --> */}
					<AuthFooter />
				</div>

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

export default RegisterPage;
