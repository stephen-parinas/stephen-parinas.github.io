import {useState} from "react";
import {
    buttonHover,
    button,
    formInput,
    formInputFocus,
    formSection,
    section,
    textError,
    textSectionHeader,
} from "./common.js";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";

        if (!formData.email.trim()) newErrors.email = "Email is required.";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format.";

        if (!formData.message.trim()) newErrors.message = "Message is required.";
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length) {
            setErrors(validationErrors);
            return;
        }

        try {
            const response = await fetch("https://formspree.io/f/xdkeakkl", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormData({ name: "", email: "", message: "" });
            } else {
                alert("Failed to send message. Please try again.");
            }
        } catch (error) {
            alert("Error: " + error.message);
        }
    };

    return (
        <div className={section + "w-[calc(100vw-64px)] min-w-[296px] max-w-[600px]"}>
            <h2 className={textSectionHeader}>Contact Me</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full items-start">
                <div className={formSection}>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={formInput + formInputFocus}
                        placeholder="Name"
                    />
                    {errors.name && <p className={textError}>{errors.name}</p>}
                </div>

                <div className={formSection}>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={formInput + formInputFocus}
                        placeholder="Email"
                    />
                    {errors.email && <p className={textError}>{errors.email}</p>}
                </div>

                <div className={formSection}>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="8"
                        className={formInput + formInputFocus + "resize-none"}
                        placeholder="Message"
                    ></textarea>
                    {errors.message && <p className={textError}>{errors.message}</p>}
                </div>

                <button type="submit" className={button + buttonHover}>Send Message</button>
            </form>
        </div>
);
}