import source from '@/data/youtube-catalogue.json';
import annotations from '@/data/video-editorial.json';

type Editorial = {slug:string; eyebrow:string; themes:string[]; summary:string; description?:string; relatedVideoId:string|null};
export type MusicEntry = {
  videoId:string; title:string; youtubeUrl:string; format:'video'|'short';
  description:string; publishedAt:string; durationSeconds:number; thumbnail:string;
  channelId:string; slug:string; eyebrow:string; themes:string[]; summary:string;
  relatedVideoId:string|null;
};
const editorial:Record<string,Editorial> = annotations;
export const music:MusicEntry[] = source.videos.map(video => {
  const entry = editorial[video.videoId];
  if (!entry) throw new Error(`Missing editorial mapping for ${video.videoId}`);
  if (video.format !== 'video' && video.format !== 'short') throw new Error('Unknown video format');
  return {...video, format:video.format, ...entry};
});
export const fullSongs = music.filter(m => m.format === 'video');
export const shorts = music.filter(m => m.format === 'short');
export const getMusic = (slug:string) => music.find(m => m.slug === slug);
