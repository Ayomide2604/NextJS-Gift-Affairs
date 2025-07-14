import React from "react";
import Link from "next/link";

interface RegisterFormProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  loading: boolean;
  setFirstName: (v: string) => void;
  setLastName: (v: string) => void;
  setEmail: (v: string) => void;
  setPassword: (v: string) => void;
  setConfirmPassword: (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  loading,
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
  setConfirmPassword,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="position-relative mb-4">
        <label htmlFor="register-first-name" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          id="register-first-name"
          required
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </div>
      <div className="position-relative mb-4">
        <label htmlFor="register-last-name" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          id="register-last-name"
          required
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </div>
      <div className="position-relative mb-4">
        <label htmlFor="register-email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control form-control-lg"
          id="register-email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="register-password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control form-control-lg"
          id="register-password"
          minLength={8}
          placeholder="Minimum 8 characters"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="register-confirm-password" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control form-control-lg"
          id="register-confirm-password"
          minLength={8}
          placeholder="Re-enter your password"
          required
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
      </div>
			<div className="d-flex flex-column gap-2 mb-4">
				<div className="form-check">
					<input
						type="checkbox"
						className="form-check-input"
						id="privacy"
						required
					/>
					<label htmlFor="privacy" className="form-check-label">
						I have read and accept the{" "}
						<Link className="text-dark-emphasis" href="#!">
							Privacy Policy
						</Link>
					</label>
				</div>
			</div>
			<button type="submit" className="btn btn-lg btn-primary w-100">
				Create an account
				<i className="ci-chevron-right fs-lg ms-1 me-n1"></i>
			</button>
		</form>
	);
};

export default RegisterForm;
