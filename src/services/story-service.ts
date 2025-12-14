'use server';

import { db } from '@/lib/firebase-admin';
import type { Story } from '@/types/story';

export async function saveStory(story: Omit<Story, 'id'>): Promise<Story> {
  const storyRef = await db.collection('stories').add({
    ...story,
    createdAt: new Date().toISOString(),
  });
  return {
    id: storyRef.id,
    ...story,
  };
}

export async function getSavedStories(): Promise<Story[]> {
  const snapshot = await db.collection('stories').orderBy('createdAt', 'desc').get();
  if (snapshot.empty) {
    return [];
  }
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...(doc.data() as Omit<Story, 'id'>),
  }));
}
