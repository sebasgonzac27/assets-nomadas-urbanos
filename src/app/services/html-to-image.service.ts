import { Injectable } from '@angular/core';
import * as htmlToImage from 'html-to-image';
import {Options} from 'html-to-image/es/types';

@Injectable({
  providedIn: 'root'
})
export class HtmlToImageService {

  exportToPng(element: HTMLElement, fileName: string = 'image.png', options: Options): void {
    htmlToImage.toPng(element, options)
      .then((dataUrl: string) => {
        const link = document.createElement('a');
        link.download = fileName;
        link.href = dataUrl;
        link.click();
      })
      .catch((error: Error) => {
        console.error('Error exporting image:', error);
      });
  }
}
