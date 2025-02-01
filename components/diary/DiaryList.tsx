'use client';

import { useState } from 'react';
import { useDiaryStore } from '@/lib/store/diary';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

export function DiaryList() {
  const diaries = useDiaryStore((state) => state.diaries);
  const updateDiary = useDiaryStore((state) => state.updateDiary);
  const deleteDiary = useDiaryStore((state) => state.deleteDiary);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

  const handleEdit = (diary: { id: string; title: string; content: string }) => {
    setEditingId(diary.id);
    setEditTitle(diary.title);
    setEditContent(diary.content);
  };

  const handleSave = (id: string) => {
    if (!editTitle.trim() || !editContent.trim()) return;
    
    updateDiary(id, {
      title: editTitle,
      content: editContent,
    });
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  return (
    <div className="space-y-4">
      {diaries.map((diary) => (
        <Card key={diary.id}>
          {editingId === diary.id ? (
            <CardContent className="pt-6">
              <div className="space-y-4">
                <Input
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  placeholder="일기 제목"
                />
                <Textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  placeholder="일기 내용"
                  rows={5}
                />
                <div className="flex justify-end gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCancel()}
                  >
                    취소
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => handleSave(diary.id)}
                  >
                    저장
                  </Button>
                </div>
              </div>
            </CardContent>
          ) : (
            <>
              <CardHeader>
                <CardTitle>{diary.title}</CardTitle>
                <CardDescription className="flex flex-col gap-1 text-xs text-muted-foreground">
                  <span>작성: {formatDate(diary.createdAt)}</span>
                  {diary.createdAt !== diary.updatedAt && (
                    <span>수정: {formatDate(diary.updatedAt)}</span>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">{diary.content}</p>
                <div className="flex justify-end gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(diary)}
                  >
                    수정
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => deleteDiary(diary.id)}
                  >
                    삭제
                  </Button>
                </div>
              </CardContent>
            </>
          )}
        </Card>
      ))}
    </div>
  );
} 