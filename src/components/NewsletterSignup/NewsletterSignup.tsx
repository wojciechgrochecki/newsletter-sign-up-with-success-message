import { useState } from "react";
import NewsletterForm from "./NewsletterForm";
import SuccessMessage from "./SuccessMessage";

export default function NewsletterSignup() {
  const [email, setEmail] = useState<string | null>(null);

  return <>{email === null ? <NewsletterForm /> : <SuccessMessage />}</>;
}
