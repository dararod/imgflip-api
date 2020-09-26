declare module Imgflip {
  interface Meme {
    id: string;
    name: string;
    url: string;
    width: number;
    height: number;
    box_count: number;
  }

  interface CaptionImage {
    text: string;
    x: number;
    y: number;
    width: number;
    height: number;
    color: string;
    outline_color: string;
  }

  interface CaptionedImage {
    url: string;
    page_url: string;
  }

  interface Client {
    getMemes: () => Promise<API.Response<Meme[]>>;
    captionImage: (captionImage: CaptionImage) => Promise<API.Response<CaptionedImage>>;
  }
}
