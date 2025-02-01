import { DiaryForm } from '@/components/diary/DiaryForm';
import { DiaryList } from '@/components/diary/DiaryList';

export default function Home() {
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">AI 일기장</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">새 일기 작성</h2>
          <DiaryForm />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">일기 목록</h2>
          <DiaryList />
        </div>
      </div>
    </main>
  );
}
