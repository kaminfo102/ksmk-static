import fs from 'fs';
import path from 'path';

export interface FestivalRegistration {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  code_meli: string;
  city: string;
  level: string;
  message?: string;
  createdAt: string;
}

const dataFilePath = path.join(process.cwd(), 'data', 'festival-registrations.json');

// Ensure the data file exists
if (!fs.existsSync(dataFilePath)) {
  fs.writeFileSync(dataFilePath, JSON.stringify([], null, 2));
}

export function saveRegistration(registration: Omit<FestivalRegistration, 'id' | 'createdAt'>): FestivalRegistration {
  const registrations = getAllRegistrations();
  
  const newRegistration: FestivalRegistration = {
    ...registration,
    id: Math.random().toString(36).substring(2, 15),
    createdAt: new Date().toISOString(),
  };

  registrations.push(newRegistration);
  fs.writeFileSync(dataFilePath, JSON.stringify(registrations, null, 2));
  
  return newRegistration;
}

export function getAllRegistrations(): FestivalRegistration[] {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading registrations:', error);
    return [];
  }
}

export function getRegistrationById(id: string): FestivalRegistration | undefined {
  const registrations = getAllRegistrations();
  return registrations.find(reg => reg.id === id);
} 