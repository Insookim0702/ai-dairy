'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useDiaryStore } from '@/lib/store/diary';
import { generateDiary } from '@/app/actions/generateDiary';
import { useToast } from "@/components/ui/use-toast";


export function DiaryGenerator() {
  const [keywords, setKeywords] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const addDiary = useDiaryStore((state) => state.addDiary);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!keywords.trim()) {
      toast({
        title: "키워드를 입력해주세요",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsGenerating(true);
      const generated = await generateDiary(keywords);
      
      addDiary({
        title: generated.title,
        content: generated.content,
      });

      setKeywords('');
      toast({
        title: "일기가 생성되었습니다",
        description: "AI가 생성한 일기가 목록에 추가되었습니다.",
      });
    } catch (error) {
      toast({
        title: "일기 생성 실패",
        description: "일기 생성 중 오류가 발생했습니다.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input
          placeholder="오늘의 키워드를 입력해주세요 (예: 여행, 맛집, 운동)"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
        />
        <Button 
          onClick={handleGenerate}
          disabled={isGenerating}
        >
          {isGenerating ? '생성 중...' : 'AI 일기 생성'}
        </Button>
      </div>
    </div>
  );
} 