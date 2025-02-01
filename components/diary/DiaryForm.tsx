'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { useDiaryStore } from '@/lib/store/diary';

export function DiaryForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const addDiary = useDiaryStore((state) => state.addDiary);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    addDiary({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Input
          placeholder="일기 제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="오늘의 일기를 작성해주세요..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={10}
        />
      </div>
      <Button type="submit" className="w-full">
        일기 저장하기
      </Button>
    </form>
  );
} 