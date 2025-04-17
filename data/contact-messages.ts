import fs from 'fs';
import path from 'path';

export interface ContactMessage {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  city: string;
  message: string;
  createdAt: string;
}

const messagesFilePath = path.join(process.cwd(), 'data', 'contact-messages.json');

// Initialize messages file if it doesn't exist
if (!fs.existsSync(messagesFilePath)) {
  fs.writeFileSync(messagesFilePath, JSON.stringify([], null, 2));
}

export function getAllMessages(): ContactMessage[] {
  try {
    const data = fs.readFileSync(messagesFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading messages:', error);
    return [];
  }
}

export function saveMessage(message: Omit<ContactMessage, 'id' | 'createdAt'>): ContactMessage {
  try {
    const messages = getAllMessages();
    const newMessage: ContactMessage = {
      ...message,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    
    messages.push(newMessage);
    fs.writeFileSync(messagesFilePath, JSON.stringify(messages, null, 2));
    
    return newMessage;
  } catch (error) {
    console.error('Error saving message:', error);
    throw new Error('Failed to save message');
  }
} 