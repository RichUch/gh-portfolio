import { useState } from "react";
import Input from '../components/ui/Input';
import Textarea from '../components/ui/TextArea';
import Button from '../components/ui/Button';
import { Mail } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    console.log("Form Data Submitted:", formData);
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetch("https://github-portfolio-backend-eight.vercel.app/api/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert("Email sent!");
      } else {
          alert("Error sending email.");
          const errorData = await response.json();
          console.error(errorData.message);
      }
    };

    return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
      <div className="max-w-md mx-auto">
        <form className="space-y-4 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <Input type="text" id="name" name="name" placeholder="Your Name" className="rounded border p-2 border-gray-300" onChange={handleChange} required/>

          <label htmlFor="email">Email:</label>
          <Input type="email" id="email" name="email" placeholder="Your Email" className="rounded border p-2 border-gray-300" onChange={handleChange} required/>

          <label htmlFor="message">Message:</label>
          <Textarea id="message" name="message" placeholder="Your Message" rows={5} cols={5} className="rounded border p-2 border-gray-300" onChange={handleChange} required/>

          <Button type="submit" className="w-full bg-dark flex justify-center items-center text-light border border-gray-300 ">
            <Mail className="mr-2 h-4 w-4" /> Send Message
          </Button>

        </form>
      </div>
    </div>
    );
};

export default ContactForm;
