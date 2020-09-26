import ky from 'ky';

class Client implements Imgflip.Client {
  private restClient;

  constructor() {
    this.restClient = ky.extend({
      prefixUrl: 'https://api.imgflip.com',
    });
  }

  public async getMemes(): Promise<API.Response<Imgflip.Meme[]>> {
    const response = await this.restClient.get('get_memes');

    return response as unknown as API.Response<Imgflip.Meme[]>
  }

  public async captionImage(captionImage: Imgflip.CaptionImage): Promise<API.Response<Imgflip.CaptionedImage>> {
    const response = await this.restClient.post('caption_image', {
      body: JSON.stringify(captionImage),
    });

    return response as unknown as API.Response<Imgflip.CaptionedImage>;
  }
}

export default Client;
