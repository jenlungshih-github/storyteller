'use server';

import { db } from '@/lib/firebase';
import { collection, addDoc, getDocs, query, orderBy, serverTimestamp, doc, updateDoc } from "firebase/firestore"; 
import type { Story } from '@/types/story';

export async function saveStory(story: Omit<Story, 'id' | 'imageUrl'>): Promise<Story> {
  const storyWithTimestamp = {
    ...story,
    createdAt: serverTimestamp(),
    imageUrl: null,
  };

  const docRef = await addDoc(collection(db, "stories"), storyWithTimestamp);
  
  return {
    id: docRef.id,
    ...story,
    imageUrl: null,
  };
}

export async function updateStoryImage(storyId: string, imageUrl: string): Promise<void> {
  const storyRef = doc(db, "stories", storyId);
  await updateDoc(storyRef, { imageUrl });
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
      imageUrl: data.imageUrl || null,
    } as Story;
  });
}
