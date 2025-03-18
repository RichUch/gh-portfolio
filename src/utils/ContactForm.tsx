import { useState } from "react";
import Input from '../components/ui/Input';
import Textarea from '../components/ui/TextArea';
import Button from '../components/ui/Button';
import { Mail } from 'lucide-react';
import { useCustomTranslation } from "../hooks/useCustomTranslation";

const ContactForm = () => {
  const { t } = useCustomTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", message: "", file: null as File | null, });
  const [fileName, setFileName] = useState("")
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setFileName(file.name);
      const maxSize = 5 * 1024 * 1024; // 5MB limit
      const allowedTypes = ["image/png", "image/jpeg", "application/pdf"];
  
      if (!allowedTypes.includes(file.type)) {
        alert("Only PNG, JPG, and PDF files are allowed.");
        return;
      }
  
      if (file.size > maxSize) {
        alert("File size must be under 5MB.");
        return;
      }
  
      setFormData((prev) => ({ ...prev, file }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);
    if (formData.file) {
      formDataToSend.append("file", formData.file);
    }
  
    const response = await fetch("https://github-portfolio-backend-eight.vercel.app/api/send", {
      method: "POST",
      body: formDataToSend, // ✅ Let browser set Content-Type automatically
    });
  
    if (response.ok) {
      alert("Email sent successfully!");
    } else {
      alert("Failed to send email.");
    }
  };

  return (
  <div className="form-container container mx-auto px-4 dark:text-white">
    <h2 className="text-3xl font-bold mb-8 text-center">{t("contact.title")}</h2>
    <div className="max-w-md mx-auto">
      <form className="space-y-3 flex flex-col mb-1" onSubmit={handleSubmit}>
        <label htmlFor="name">{t("contact.name")}</label>
        <Input type="text" id="name" name="name" placeholder={t("contact.name")} className="rounded border p-2 border-gray-300" onChange={handleChange} required/>

        <label htmlFor="email">{t("contact.email")}</label>
        <Input type="email" id="email" name="email" placeholder={t("contact.email")} className="rounded border p-2 border-gray-300" onChange={handleChange} required/>

        <div className="flex flex-col items-center gap-2">
          <label htmlFor="file" className="flex items-center gap-2 cursor-pointer bg-light dark:bg-dark dark:hover:bg-dark/70 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            {t("contact.file")}
            <input type="file" className="hidden" onChange={handleFileChange} />
          </label>
          {formData.file && <p className="text-sm text-black dark:text-white">{fileName}</p>}
        </div>



        <label htmlFor="message">{t("contact.message")}</label>
        <Textarea id="message" name="message" placeholder={t("contact.message")} rows={5} cols={5} className="rounded border p-2 border-gray-300" onChange={handleChange} required/>

        <Button type="submit" className="contact_send_button hover:bg-white/70 dark:bg-dark/90 dark:text-white dark:border-dark dark:hover:bg-dark">
          <Mail className="mr-2 h-4 w-4" /> {t("contact.send_message")}
        </Button>
      </form>
    </div>
  </div>
  );
};

export default ContactForm;
