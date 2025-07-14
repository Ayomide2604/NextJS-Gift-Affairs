"use client";
import React, { FormEvent, useState } from "react";

interface User {
	email: string;
	password: string;
}

interface LoginFormProps {
	user: User;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: React.FormEvent) => void;
}

const LoginForm = ({ user, onChange, onSubmit }: LoginFormProps) => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<form onSubmit={onSubmit}>
			<div className="position-relative mb-4">
				<input
					type="email"
					className="form-control form-control-lg"
					placeholder="Email"
					required
					name="email"
					value={user.email}
					onChange={onChange}
				/>
			</div>
			<div className="mb-4">
				<div className="password-toggle">
					<input
						type={showPassword ? "text" : "password"}
						className="form-control form-control-lg"
						placeholder="Password"
						required
						name="password"
						value={user.password}
						onChange={onChange}
					/>

					<label
						className="password-toggle-button fs-lg"
						aria-label="Show/hide password"
					>
						<input type="checkbox" className="btn-check" />
						<span
							className="password-toggle-button-icon d-flex"
							onClick={() => setShowPassword(!showPassword)}
						>
							{showPassword ? (
								<i className="bi bi-eye-slash" />
							) : (
								<i className="bi bi-eye" />
							)}
						</span>
					</label>
				</div>
			</div>
			<div className="d-flex align-items-center justify-content-between mb-4">
				<div className="form-check me-2">
					<input
						type="checkbox"
						className="form-check-input"
						id="remember-30"
					/>
					<label htmlFor="remember-30" className="form-check-label">
						Remember for 30 days
					</label>
				</div>
				<div className="nav">
					<a
						className="nav-link animate-underline p-0"
						href="account-password-recovery.html"
					>
						<span className="animate-target">Forgot password?</span>
					</a>
				</div>
			</div>
			<button type="submit" className="btn btn-lg btn-primary w-100">
				Sign In
			</button>
		</form>
	);
};

export default LoginForm;
