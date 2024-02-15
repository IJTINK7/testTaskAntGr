import {ChangeEvent, FormEvent, useState} from "react";

export const SignUp =()=> {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const [nameError, setNameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [confirmPasswordError, setConfirmPasswordError] = useState("");

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.currentTarget;

		switch (name) {
			case "name":
				setName(value);
				if (value) {
					setNameError("");
				}
				break;
			case "email":
				setEmail(value);
				if (value) {
					setEmailError("");
				}
				break;
			case "password":
				setPassword(value);
				if (value) {
					setPasswordError("");
				}
				break;
			case "confirmPassword":
				setConfirmPassword(value);
				if (value) {
					setConfirmPasswordError("");
				}
				if(value !== password){
					setConfirmPasswordError("Пожалуйста, подтвердите пароль.")
				}
				break;
			default:
				break;
		}
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!name) {
			setNameError("Пожалуйста, введите имя.");
		}
		if (!email) {
			setEmailError("Пожалуйста, введите email.");
		}
		if (!password) {
			setPasswordError("Пожалуйста, введите пароль.");
		}
		if (password !== confirmPassword) {
			setConfirmPasswordError("Пароли не совпадают.");
		}
		if (password && !confirmPassword) {
			setConfirmPasswordError("Пожалуйста, подтвердите пароль.");
		}
		if (password === confirmPassword) {
			setConfirmPasswordError("");
		}

		const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		if (!emailRegex.test(email)) {
			setEmailError("Неверный формат email.");
			return;
		}

		setNameError("");
		setEmailError("");
		setPasswordError("");
		setConfirmPasswordError("")
		if (!!name && !!email && !!password && !!confirmPassword){
			alert("OK")
		}
	};

		return (
		<div className={"formContainer"}>
			<h1>Регистрация</h1>
			<form onSubmit={handleSubmit}>
				<div className={"formGroup"}>
					<label htmlFor="name">Имя</label>
					<input
						type="text"
						id="name"
						name="name"
						value={name}
						onChange={handleChange}
						placeholder={"Введите имя"}
					/>
					{nameError && <span className={"error"}>{nameError}</span>}
				</div>
				<div className={"formGroup"}>
					<label htmlFor="email">Электронная почта</label>
					<input
						type="email"
						id="email"
						name="email"
						value={email}
						onChange={handleChange}
						placeholder={"example@gmail.com"}
					/>
					{emailError && <span className={"error"}>{emailError}</span>}
				</div>
				<div className={"formGroup"}>
					<label htmlFor="password">Пароль</label>
					<input
						type="password"
						id="password"
						name="password"
						value={password}
						onChange={handleChange}
						placeholder={"********"}
						autoComplete={"section-blue shipping new-password"}
					/>
					{passwordError && <span className={"error"}>{passwordError}</span>}
				</div>
				<div className={"formGroup"}>
					<label htmlFor="confirmPassword">Подтвердите пароль</label>
					<input
						type="password"
						id="confirmPassword"
						name="confirmPassword"
						value={confirmPassword}
						onChange={handleChange}
						placeholder={"********"}
						autoComplete={"section-blue billing new-password"}
					/>
					{confirmPasswordError && <span className={"error"}>{confirmPasswordError}</span>}
				</div>
				<button type="submit">Зарегистрироваться</button>
			</form>
		</div>
	);
}
