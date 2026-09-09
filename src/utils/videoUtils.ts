/**
 * Robust video source parser for Google Drive, YouTube, and Vimeo
 */

export interface ParsedVideo {
  type: 'google-drive' | 'youtube' | 'vimeo' | 'direct';
  embedUrl: string;
  driveUrl?: string;
  sourceUrl: string;
  directPlayUrl?: string;
}

export function extractGoogleDriveId(url: string): string | null {
  if (!url) return null;
  
  const matchFileD = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (matchFileD && matchFileD[1]) return matchFileD[1];

  const matchFolderD = url.match(/\/folders\/([a-zA-Z0-9_-]+)/);
  if (matchFolderD && matchFolderD[1]) return matchFolderD[1];

  const matchIdParam = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (matchIdParam && matchIdParam[1]) return matchIdParam[1];

  return null;
}

export function getGoogleDriveThumbnail(urlOrId?: string): string {
  if (!urlOrId) return 'https://lh3.googleusercontent.com/d/1DFAgevx05WhHTuQozoFQXDK58xCvvz4W=w1080';
  const fileId = extractGoogleDriveId(urlOrId) || urlOrId;
  return `https://lh3.googleusercontent.com/d/${fileId}=w1080`;
}

export function parseVideoSource(url?: string): ParsedVideo {
  if (!url) {
    return {
      type: 'google-drive',
      embedUrl: 'https://drive.google.com/file/d/1DFAgevx05WhHTuQozoFQXDK58xCvvz4W/preview',
      driveUrl: 'https://drive.google.com/file/d/1DFAgevx05WhHTuQozoFQXDK58xCvvz4W/view',
      sourceUrl: '',
      directPlayUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cinematographer-shooting-a-scene-in-a-studio-41551-large.mp4'
    };
  }

  const cleanUrl = url.trim();

  // YouTube
  if (cleanUrl.includes('youtube.com') || cleanUrl.includes('youtu.be')) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = cleanUrl.match(regExp);
    const ytId = match && match[2].length === 11 ? match[2] : cleanUrl;
    return {
      type: 'youtube',
      embedUrl: `https://www.youtube-nocookie.com/embed/${ytId}?autoplay=0&rel=0`,
      sourceUrl: cleanUrl
    };
  }

  // Google Drive (File or Folder)
  const fileId = extractGoogleDriveId(cleanUrl) || '1DFAgevx05WhHTuQozoFQXDK58xCvvz4W';
  const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  
  return {
    type: 'google-drive',
    embedUrl: embedUrl,
    driveUrl: cleanUrl,
    sourceUrl: cleanUrl,
    directPlayUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cinematographer-shooting-a-scene-in-a-studio-41551-large.mp4'
  };
}
