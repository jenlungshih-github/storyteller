'use server';

import { db } from '@/lib/firebase';
import { collection, addDoc, getDocs, query, orderBy, serverTimestamp } from "firebase/firestore"; 
import type { Story } from '@/types/story';

export async function saveStory(story: Omit<Story, 'id'>): Promise<Story> {
  const storyWithTimestamp = {
    ...story,
    createdAt: serverTimestamp(),
  };

  const docRef = await addDoc(collection(db, "stories"), storyWithTimestamp);
  
  return {
    id: docRef.id,
    ...story,
  };
}

export async function getSavedStories(): Promise<Story[]> {
  const q = query(collection(db, "stories"), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  
  if (snapshot.empty) {
    return [];
  }
  
  return snapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      title: data.title,
      summary: data.summary,
      fullText: data.fullText,
    } as Story;
  });
}
