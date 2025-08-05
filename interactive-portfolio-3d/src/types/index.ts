export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  technologies: Technology[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: ProjectCategory;
  year: number;
  client?: string;
  duration?: string;
  role?: string;
  challenges?: string[];
  solutions?: string[];
  results?: string[];
}

export interface Technology {
  name: string;
  icon: string;
  color: string;
  proficiency: number; // 0-100
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
  companyUrl?: string;
  logo?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  proficiency: number; // 0-100
  icon: string;
  color: string;
  description?: string;
  yearsOfExperience?: number;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear?: number;
  gpa?: number;
  description?: string;
  achievements?: string[];
  logo?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  expiryDate?: string;
  credentialId?: string;
  url?: string;
  badge?: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  timezone: string;
  availability: 'available' | 'busy' | 'unavailable';
  social: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  username: string;
  icon: string;
  color: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  longBio: string;
  avatar: string;
  resumeUrl?: string;
  yearsOfExperience: number;
  projectsCompleted: number;
  clientsSatisfied: number;
  contact: ContactInfo;
}

export interface TestimonialType {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  date: string;
  featured: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  featured: boolean;
  image?: string;
  readTime: number;
  views?: number;
  likes?: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string;
  phone?: string;
  projectType?: ProjectCategory;
  budget?: string;
  timeline?: string;
}

export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
  mode: 'light' | 'dark';
}

export interface AnimationConfig {
  enableParticles: boolean;
  enableGlow: boolean;
  enableFloating: boolean;
  animationSpeed: 'slow' | 'normal' | 'fast';
  reducedMotion: boolean;
}

export interface AppConfig {
  theme: ThemeConfig;
  animation: AnimationConfig;
  debug: boolean;
  analytics: boolean;
}

// Enums
export type ProjectCategory = 
  | 'web-development' 
  | 'mobile-development' 
  | 'ui-ux-design' 
  | '3d-visualization' 
  | 'data-visualization' 
  | 'ai-ml' 
  | 'blockchain' 
  | 'game-development'
  | 'other';

export type SkillCategory = 
  | 'frontend' 
  | 'backend' 
  | 'mobile' 
  | 'design' 
  | 'tools' 
  | 'soft-skills'
  | '3d-graphics'
  | 'ai-ml'
  | 'blockchain';

// 3D Related Types
export interface Vector3D {
  x: number;
  y: number;
  z: number;
}

export interface Rotation3D {
  x: number;
  y: number;
  z: number;
}

export interface SceneObject {
  id: string;
  type: '3d-model' | 'particle-system' | 'light' | 'camera';
  position: Vector3D;
  rotation: Rotation3D;
  scale: Vector3D;
  visible: boolean;
  interactive: boolean;
}

export interface ParticleSystemConfig {
  count: number;
  size: number;
  color: string;
  speed: number;
  direction: Vector3D;
  spread: number;
  lifetime: number;
}

export interface CameraConfig {
  position: Vector3D;
  target: Vector3D;
  fov: number;
  near: number;
  far: number;
}

// API Types
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
  timestamp: string;
}

export interface ApiError {
  message: string;
  code: string;
  details?: any;
}

// Form Types
export interface FormField {
  name: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio';
  label: string;
  placeholder?: string;
  required: boolean;
  validation?: ValidationRule[];
  options?: SelectOption[];
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface ValidationRule {
  type: 'required' | 'email' | 'min' | 'max' | 'pattern';
  value?: any;
  message: string;
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  external?: boolean;
  subItems?: NavItem[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

// Utility Types
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type RequireAtLeastOne<T> = {
  [K in keyof T]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<keyof T, K>>>;
}[keyof T];