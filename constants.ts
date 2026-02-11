
import { User, ClubLocation, Post, Idea, BadgeDefinition, Story, PortfolioItem, SocialLink } from './types';

export const BADGE_DEFINITIONS: Record<string, BadgeDefinition> = {
  'FIRST_POST': { id: 'FIRST_POST', name: 'البداية', description: 'نشرت أول مشاركة لك في النادي', icon: '🚀', rarity: 'COMMON' },
  'ACTIVE_WRITER': { id: 'ACTIVE_WRITER', name: 'قلم نشيط', description: 'نشرت 3 مشاركات في النادي', icon: '✍️', rarity: 'RARE' },
  'IDEA_MAKER': { id: 'IDEA_MAKER', name: 'صانع أفكار', description: 'شاركت فكرة إبداعية في بنك الأفكار', icon: '💡', rarity: 'RARE' },
  'INFLUENCER': { id: 'INFLUENCER', name: 'مؤثر', description: 'حصلت على 5 إعجابات على منشوراتك', icon: '🌟', rarity: 'EPIC' },
  'LEGEND': { id: 'LEGEND', name: 'أسطورة النادي', description: 'وصلت إلى قمة التفاعل والإدارة', icon: '👑', rarity: 'LEGENDARY' },
  'PHOTOGRAPHER': { id: 'PHOTOGRAPHER', name: 'عين الصقر', description: 'نشرت صورة مميزة', icon: '📸', rarity: 'COMMON' }
};

// Base64 Audio placeholders - in a real app these would be distinct MP3/WAV files
export const SOUNDS = {
  default: "data:audio/wav;base64,UklGRl9vT1BXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU",
  success: "data:audio/wav;base64,UklGRl9vT1BXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU", // Placeholder: Imagine a 'ding'
  alert: "data:audio/wav;base64,UklGRl9vT1BXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU",   // Placeholder: Imagine a 'siren'
  magic: "data:audio/wav;base64,UklGRl9vT1BXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU",   // Placeholder: Imagine a 'sparkle'
};

export const INITIAL_USERS: User[] = [
  {
    id: '1',
    username: 'admin',
    password: 'admin123',
    fullName: 'مدير النادي',
    bio: 'المسؤول عن إدارة المحتوى والأعضاء وتوجيه الفريق الإعلامي.',
    avatar: 'https://picsum.photos/seed/admin/200',
    role: 'ADMIN',
    status: 'ACTIVE',
    specialization: 'عام',
    isOnline: true,
    lastActive: Date.now(),
    badges: [{ id: 'LEGEND', timestamp: Date.now() }]
  },
  {
    id: '2',
    username: 'sara',
    password: 'password123',
    fullName: 'سارة أحمد',
    bio: 'مصورة فوتوغرافية ومحررة فيديو، أحب توثيق اللحظات المدرسية.',
    avatar: 'https://picsum.photos/seed/sara/200',
    role: 'MEMBER',
    status: 'ACTIVE',
    specialization: 'مصور',
    isOnline: false,
    lastActive: Date.now() - 3600000,
    badges: [{ id: 'FIRST_POST', timestamp: Date.now() }]
  },
  {
    id: '3',
    username: 'ahmed',
    password: 'password123',
    fullName: 'أحمد علي',
    bio: 'كاتب مقالات ومعد تقارير صحفية.',
    avatar: 'https://picsum.photos/seed/ahmed/200',
    role: 'MEMBER',
    status: 'ACTIVE',
    specialization: 'كاتب',
    isOnline: false,
    lastActive: Date.now() - 7200000,
    badges: []
  }
];

export const INITIAL_SOCIAL_LINKS: SocialLink[] = [
  { id: 'lnk1', platform: 'telegram', url: 'https://t.me/mediaclub', label: 'Official Channel' },
  { id: 'lnk2', platform: 'instagram', url: 'https://instagram.com/mediaclub', label: '@MediaClub' },
  { id: 'lnk3', platform: 'email', url: 'mailto:contact@mediaclub.school', label: 'Press Inquiries' }
];

export const INITIAL_LOCATIONS: ClubLocation[] = [
  {
    id: 'loc1',
    name: 'تلفزيون الدولة الرسمي',
    description: 'زيارة تعليمية لاستديوهات البث المباشر والتعرف على هندسة الصوت.',
    status: 'VISITED',
    image: 'https://picsum.photos/seed/tv/400/300'
  },
  {
    id: 'loc2',
    name: 'معرض الكتاب الدولي',
    description: 'تغطية إعلامية لفعاليات المعرض وإجراء مقابلات مع الكتاب.',
    status: 'PLANNED',
    image: 'https://picsum.photos/seed/book/400/300'
  }
];

export const INITIAL_IDEAS: Idea[] = [
  {
    id: 'id1',
    title: 'بودكاست المبدعين',
    description: 'سلسلة لقاءات صوتية مع طلاب متميزين في مجالات مختلفة.',
    type: 'مقابلة',
    authorId: '2',
    authorName: 'سارة أحمد',
    timestamp: Date.now() - 172800000,
    votes: ['1', '2'],
    status: 'قيد المراجعة'
  }
];

export const INITIAL_POSTS: Post[] = [
  {
    id: 'p1',
    authorId: '2',
    authorName: 'سارة أحمد',
    content: 'صورة من تغطية حفل المدرسة اليوم، الأجواء كانت رائعة!',
    mediaUrl: 'https://picsum.photos/seed/school/800/600',
    mediaType: 'image',
    timestamp: Date.now() - 86400000,
    likes: ['1'],
    reactions: {},
    comments: [
      {
        id: 'c1',
        authorId: '1',
        authorName: 'مدير النادي',
        content: 'تغطية رائعة يا سارة، زوايا التصوير مذهلة!',
        timestamp: Date.now() - 82400000
      }
    ],
    status: 'APPROVED'
  }
];

export const INITIAL_STORIES: Story[] = [
  {
    id: 's1',
    authorId: '2',
    mediaUrl: 'https://picsum.photos/seed/story1/400/800',
    mediaType: 'image',
    timestamp: Date.now() - 100000,
    viewers: 24,
    likes: 12,
    comments: []
  },
  {
    id: 's2',
    authorId: '1',
    mediaUrl: 'https://picsum.photos/seed/story2/400/800',
    mediaType: 'image',
    timestamp: Date.now() - 200000,
    viewers: 156,
    likes: 45,
    comments: []
  }
];

export const INITIAL_PORTFOLIO: PortfolioItem[] = [
   {
      id: 'pf1',
      userId: '2',
      title: 'School Marathon 2024',
      description: 'A cinematic recap of the annual sports day event, captured on Sony A7III.',
      mediaUrl: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop',
      mediaType: 'image',
      tags: ['Sports', 'Event', 'Photography'],
      likes: ['1', '3'],
      timestamp: Date.now() - 50000000
   }
];
