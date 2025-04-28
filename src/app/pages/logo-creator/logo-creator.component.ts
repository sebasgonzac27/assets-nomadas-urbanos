import {Component, inject} from '@angular/core';
import {LogoComponent} from '../../components/logo/logo.component';
import {FormsModule} from '@angular/forms';
import {HtmlToImageService} from '../../services/html-to-image.service';

@Component({
  selector: 'app-logo-creator',
  imports: [
    LogoComponent,
    FormsModule
  ],
  templateUrl: './logo-creator.component.html',
  styleUrl: './logo-creator.component.scss'
})
export class LogoCreatorComponent {
  name = '';

  private readonly htmlToImageService = inject(HtmlToImageService);

  downloadLogo() {
    const logoElement = document.querySelector('.logo') as HTMLElement;
    if (logoElement) {
      this.htmlToImageService.exportToPng(
        logoElement,
        `${this.name.toLowerCase() || 'colombia'}-logo.png`,
        {quality: 1}
      );
    }
  }
}
