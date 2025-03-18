import {useState} from "react";

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

        if (!formData.message.trim()) newErrors.message = "Message is required/";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (!Object.keys(validationErrors).length) {
            alert("Form submitted! ✅");
            setFormData({ name: "", email: "", message: "" });
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className="flex flex-col gap-4 items-center">
            <h2 className="text-xl font-semibold">Contact Me</h2>

            <form onSubmit={handleSubmit} className="space-y-4 max-w-[700px]">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded"
                    placeholder="Name"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded"
                    placeholder="Email"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="8"
                    className="w-full px-4 py-2 border rounded resize-none"
                    placeholder="Message"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

                <button type="submit" className="px-4 py-2 border border-black rounded">Send Message</button>
            </form>
        </div>
    );
}