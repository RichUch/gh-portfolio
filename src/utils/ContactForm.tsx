import { useRef, useState } from "react";
import Input from '../components/ui/Input';
import Textarea from '../components/ui/TextArea';
import Button from '../components/ui/Button';
import { AlertCircle, CheckCircle, Loader2, Mail } from 'lucide-react';
import { useCustomTranslation } from "../hooks/useCustomTranslation";

const ContactForm = () => {
  const { t } = useCustomTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", message: "", extra_field: "", file: null as File | null, });
  const [fileName, setFileName] = useState("")
  
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [feedbackMessage, setfeedbackMessage] = useState("")
  const formRef = useRef<HTMLFormElement | null>(null);

  const removeFile = () => {
    setFormData((prev) => ({ ...prev, file: null }));
    setFileName("")
  };

  const resetForm = () => {
    formRef.current?.reset(); // Reset all form inputs
    removeFile()
  };

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
        alert("message_file_type_error");
        return;
      }
  
      if (file.size > maxSize) {
        alert("message_file_size_error");
        return;
      }
  
      setFormData((prev) => ({ ...prev, file }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormStatus("submitting")
    
    const formDataToSend = new FormData();

    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("extra_field", formData.extra_field);

    if (formData.file) {
      formDataToSend.append("file", formData.file);
    }

    try {
      const response = await fetch("https://github-portfolio-backend-eight.vercel.app/api/send", {
        method: "POST",
        body: formDataToSend,
      });

      // Check if the response is successful
      if (!response.ok) {
        // If not OK, log the response status and the message from the backend
        const data = await response.json();
        console.error("Error response from server:", data.message);  // Log the backend message
        setfeedbackMessage(t(data.message || "contact.message_sent_error"));
        setFormStatus("error");
        return;  // Exit early
      }

      setFormStatus("success")
      setfeedbackMessage(t("contact.message_sent_success"))
      resetForm()

      setTimeout(() => {
        setFormStatus("idle")
      }, 5000)

    } catch (error) {
      console.log("error", error)
      setfeedbackMessage(t("contact.message_sent_error"))
      setFormStatus("error")
    }
  };

return (
  <div className="form-container container mx-auto px-4 dark:text-white">
    <h2 className="text-3xl font-bold mb-8 text-center">{t("contact.title")}</h2>
    <div className="max-w-md mx-auto">
      <form className="space-y-3 flex flex-col mb-1" ref={formRef} onSubmit={handleSubmit}>

        <Input type="text" placeholder="" name="extra_field" className="hidden" autoComplete="off" />

        {/* Form status message */}
        {formStatus === "success" && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded flex items-center">
            <CheckCircle className="h-5 w-5 mr-2" />
            <span>{feedbackMessage}</span>
          </div>
        )}
        {formStatus === "error" && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded flex items-center">
            <AlertCircle className="h-5 w-5 mr-2" />
            <span>{feedbackMessage}</span>
          </div>
        )}

        <label htmlFor="name">{t("contact.name")}</label>
        <Input type="text" id="name" name="name" placeholder={t("contact.name_placeholder")} className="rounded p-2 border-gray-300 placeholder:text-sm placeholder:italic placeholder:opacity-60 shadow-sm focus:ring-2 focus:ring-dark focus:outline-none dark:focus:ring-light" onChange={handleChange} required disabled={formStatus === "submitting"}/>

        <label htmlFor="email">{t("contact.email")}</label>
        <Input type="email" id="email" name="email" placeholder={t("contact.email_placeholder")} className="rounded p-2 border-gray-300 placeholder:text-sm placeholder:italic placeholder:opacity-60 shadow-sm focus:ring-2 focus:ring-dark focus:outline-none dark:focus:ring-light" onChange={handleChange} required disabled={formStatus === "submitting"}/>

        <div className="flex flex-col items-center">
          <label className="flex items-center cursor-pointer text-black bg-light dark:bg-dark dark:hover:bg-darkdark dark:text-white px-4 py-2 rounded-lg bg-light hover:bg-gray-200 transition">
            {t("contact.file")}
            <Input placeholder="" type="file" className="hidden" onChange={handleFileChange} disabled={formStatus === "submitting"}/>
          </label>

          <p className="file-requirements-font">({t("contact.file_restrictions")})</p>

          {formData.file &&
          <div className="flex items-center gap-2 rounded-lg my-2 pl-2 bg-light dark:bg-dark dark:text-white rounded-lg">
            <p>{fileName}</p>
            <Button  variant="outline" className="bg-lightdark dark:bg-darkdark dark:hover:bg-red-800 border-none hover:bg-red-400" onClick={removeFile} disabled={formStatus === "submitting"}>
              <p>X</p>
            </Button>
          </div>}
        </div>

        <label htmlFor="message">{t("contact.message")}</label>
        <Textarea id="message" name="message" placeholder={t("contact.message_placeholder")} rows={5} cols={5} className="placeholder:opacity-60 placeholder:text-sm placeholder:italic shadow-sm rounded p-2 focus:ring-2 focus:ring-dark focus:outline-none dark:focus:ring-light" onChange={handleChange} required disabled={formStatus === "submitting"}/>

        <Button
        type="submit"
        disabled={formStatus === "submitting"}
        variant="outline"
        className="contact_send_button hover:bg-gray-200 dark:bg-dark/90 dark:text-white dark:border-dark dark:hover:bg-darkdark disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {formStatus === "submitting" ? (
          <>
            <Loader2 className="h-5 w-5 mr-2 animate-spin" />
            {t("contact.message_loading")}
          </>
        ) : (
          t("contact.send_message")
        )}
      </Button>
      </form>
    </div>
  </div>
  );
};

export default ContactForm;
