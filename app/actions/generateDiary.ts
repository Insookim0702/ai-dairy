'use server';

import { GenerateDiaryResponse } from '@/lib/types';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function generateDiary(keywords: string): Promise<GenerateDiaryResponse> {
  const maxRetries = 3;
  let retryCount = 0;

  while (retryCount < maxRetries) {
    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/skt/kogpt2-base-v2",
        {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            inputs: `오늘의 키워드는 ${keywords}입니다. 이 키워드로 일기를 작성해주세요. 
감정과 생각을 자연스럽게 표현하고, 하루를 회고하는 형식으로 작성해주세요.`,
            max_length: 112,
            min_length: 64,
            temperature: 0.7,
            top_p: 0.9,
          }),
        }
      );

      const result = await response.json();
      
      if (result.error?.includes('loading')) {
        console.log('Model is loading, retrying in 5 seconds...');
        await delay(5000); // 5초 대기
        retryCount++;
        continue;
      }

      if (!response.ok) {
        console.error('API Error:', result);
        throw new Error('API 요청에 실패했습니다');
      }

      return {
        title: `${keywords}에 대한 오늘의 일기`,
        content: Array.isArray(result) ? result[0].generated_text : result[0],
      };

    } catch (error) {
      if (retryCount === maxRetries - 1) {
        console.error('Failed to generate diary:', error);
        throw new Error('일기 생성에 실패했습니다.');
      }
      retryCount++;
      await delay(5000);
    }
  }

  throw new Error('일기 생성에 실패했습니다.');
} 