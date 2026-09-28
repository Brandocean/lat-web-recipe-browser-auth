import React from "react";
import { useFormWithValidation } from "../hooks/useFormWithValidation";

export default function LoginPage() {
    const { values, errors, isValid, handleChange } = useFormWithValidation();

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        if (!isValid) return;
        // la lógica de envío se añadirá más adelante
    }

    return (
        <form className="form" onSubmit={handleSubmit} noValidate>
            <h1 className="form__title">Iniciar sesión</h1>
            <div className="form__input-container">
                <label className="form__label">
                    Email
                    <input
                        className="form__input"
                        name="email"
                        type="email"
                        minLength={10}
                        required
                        value={values.email ?? ''}
                        onChange={handleChange}
                    />
                </label>
                {errors.email && <p className="form__error">{errors.email}</p>}
                <label className="form__label">
                    Password
                    <input
                        className="form__input"
                        name="password"
                        type="password"
                        minLength={8}
                        required
                        value={values.password ?? ''}
                        onChange={handleChange}
                    />
                </label>
                {errors.password && <p className="form__error">{errors.password}</p>}
            </div>
            <button className="form__submit-btn" type="submit" disabled={!isValid}>
                Enviar
            </button>
        </form>
    );
}