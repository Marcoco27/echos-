interface EmailEntry {
  email: string;
  timestamp: number;
}

export function saveEmail(email: string): void {
  let emails: EmailEntry[] = [];
  const storedEmails = localStorage.getItem('emails');
  
  if (storedEmails) {
    emails = JSON.parse(storedEmails);
  }
  
  emails.push({ email, timestamp: Date.now() });
  
  localStorage.setItem('emails', JSON.stringify(emails));
}

export function getEmails(): EmailEntry[] {
  const storedEmails = localStorage.getItem('emails');
  return storedEmails ? JSON.parse(storedEmails) : [];
}