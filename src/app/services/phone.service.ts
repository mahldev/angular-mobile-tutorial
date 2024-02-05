import { Injectable } from '@angular/core';
import { Phone } from '@models';

@Injectable({
  providedIn: 'root',
})
export class PhoneService {
  private phones: Phone[] = [
    {
      id: '1',
      title: 'Phone XL',
      description: 'A large phone with one of the best screens',
      price: 799.0,
    },
    {
      id: '2',
      title: 'Phone Mini',
      description: 'A great phone with one of the best camaras',
      price: 699.0,
    },
    {
      id: '3',
      title: 'Phone Standard',
      price: 499.0,
    },
  ];

  getPhones = () => this.phones;
}
