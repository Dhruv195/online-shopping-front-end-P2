import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-top-bar-first-layer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './top-bar-first-layer.component.html',
  styleUrls: ['./top-bar-first-layer.component.scss'],
})
export class TopBarFirstLayerComponent {
  links = [
    { name: 'About', url: '#' },
    { name: 'Contact', url: 'contact' },
    { name: 'Help', url: '#' },
    { name: 'FAQs', url: '#' },
  ];

  languages = [
    { label: 'EN', lang: 'English', subset: 'latin' },
    { label: 'FR', lang: 'French', subset: 'latin-ext' },
    { label: 'AR', lang: 'Arabic', subset: 'arabic' },
    { label: 'RU', lang: 'Russian', subset: 'cyrillic' },
  ];
  onLanguageChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedLanguage = this.languages.find(
      (lang) => lang.label === selectElement.value
    );
    if (selectedLanguage) {
      this.loadGoogleFont(selectedLanguage.subset);
    }
  }
  loadGoogleFont(subset: string) {
    // Remove existing font link if any
    const existingLinkElement = document.getElementById('google-font-link');
    if (existingLinkElement) {
      existingLinkElement.remove();
    }

    console.log(subset);

    // Create new font link
    const linkElement = document.createElement('link');
    linkElement.id = 'google-font-link';
    linkElement.rel = 'stylesheet';
    linkElement.href = `https://fonts.googleapis.com/css2?family=Roboto&subset=${subset}`;
    document.head.appendChild(linkElement);
  }
}
