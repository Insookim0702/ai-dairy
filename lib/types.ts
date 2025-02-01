export interface Diary {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface GenerateDiaryResponse {
  title: string;
  content: string;
} 