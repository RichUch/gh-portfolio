import { useState } from "react";
import Input from '../components/ui/Input';
import Textarea from '../components/ui/TextArea';
import Button from '../components/ui/Button';
import { Mail } from 'lucide-react';
import { useCustomTranslation } from "../hooks/useCustomTranslation";

const ContactForm = () => {
  const { t } = useCustomTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("https://github-portfolio-backend-eight.vercel.app/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) alert(t("contact.email_sent"));
    else alert(t("contact.email_error"));
  };

  return (
  <div className="form-container container mx-auto px-4 dark:text-white">
    <h2 className="text-3xl font-bold mb-8 text-center">{t("contact.title")}</h2>
    <div className="max-w-md mx-auto">
      <form className="space-y-3 flex flex-col mb-1" onSubmit={handleSubmit}>
        <label htmlFor="name">{t("contact.name")}:</label>
        <Input type="text" id="name" name="name" placeholder={t("contact.name")} className="rounded border p-2 border-gray-300" onChange={handleChange} required/>

        <label htmlFor="email">{t("contact.email")}:</label>
        <Input type="email" id="email" name="email" placeholder={t("contact.email")} className="rounded border p-2 border-gray-300" onChange={handleChange} required/>

        <label htmlFor="message">{t("contact.message")}:</label>
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
