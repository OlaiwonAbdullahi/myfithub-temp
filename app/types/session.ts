export interface FitnessSession {
  id: string;
  title: string;
  instructor: string;
  instructorImage: string;
  studio: string;

  difficulty: "beginner" | "intermediate" | "advanced";
  duration: number;
  capacity: number;
  enrolled: number;
  price: number;
  date: string;
  time: string;
  description: string;
  equipment: string[];
  benefits: string[];
  image: string;
  featured?: boolean;
}

export interface SessionFilter {
  type?: string;
  difficulty?: string;
  instructor?: string;
  timeSlot?: string;
}
