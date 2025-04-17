import fs from 'fs';
import path from 'path';

export interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

const dataFilePath = path.join(process.cwd(), 'data', 'messages.json');

// Ensure the data file exists
if (!fs.existsSync(dataFilePath)) {
  fs.writeFileSync(dataFilePath, JSON.stringify([], null, 2));
}

export function saveMessage(message: Omit<Message, 'id' | 'createdAt'>): Message {
  const messages = getAllMessages();
  const newMessage: Message = {
    ...message,
    id: Math.random().toString(36).substring(2, 9),
    createdAt: new Date().toISOString(),
  };
  
  messages.push(newMessage);
  fs.writeFileSync(dataFilePath, JSON.stringify(messages, null, 2));
  
  return newMessage;
}

export function getAllMessages(): Message[] {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading messages:', error);
    return [];
  }
}

export function getMessageById(id: string): Message | undefined {
  const messages = getAllMessages();
  return messages.find(message => message.id === id);
} 