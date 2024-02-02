import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent {
  public pageTitle = 'Our Partners';
  public pageDescription = 'You can achieve a very impressive effect by using our animated navbar, which is transparent on start and changes the color after the scroll.';
  public sponsorButtonText = 'Become a Sponsor';

  
  public partners = [
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png', sponsorship: 'Platinum', website: 'https://www.microsoft.com' },
    { name: 'Apple, Inc.', logo: 'https://pngfre.com/wp-content/uploads/apple-logo-6-1024x1024.png', sponsorship: 'Gold', website: 'https://www.apple.com' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png', sponsorship: 'Silver', website: 'https://www.amazon.com' },
    { name: 'Google, Inc.', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/640px-Google_Chrome_icon_%28February_2022%29.svg.png', sponsorship: 'Bronze', website: 'https://www.google.com' }
  ];
}