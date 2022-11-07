import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface Maquinas {
  id: Number,
  marca: String,
  modelo: String,
  preço: Number,
  garantia: String,

  bateria: String,
  conectividade: String,
  tecnologia: String,
  visor: String,
  camera: String

}

export interface User {
  name: string;
}

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {
  
  private listaMaquinas: Maquinas[] = [ 
    { id: 1, marca: "Pag Seguro", modelo: "Moderninha pró", preço: 298.00, 
      garantia: "5 Anos", bateria: "Até 6 horas de duração", conectividade: "Wi-Fi, Chip e Bluetooth",
      tecnologia: "NFC", visor: "Colorido e Touchscreen (128 x 32 pixels - LCD)", camera: "--"
    },
    { id: 2, marca: "Pag Seguro", modelo: "MinizinhaNFC", preço: 58.80, 
      garantia: "5 Anos", bateria: "Até 4 horas de duração", conectividade: "Bluetooth",
      tecnologia: "NFC", visor: "Monocromático", camera: "--"
    },
    { id: 3, marca: "Pag Seguro", modelo: "Moderninha Smart 2", preço: 358.80, 
      garantia: "5 Anos", bateria: "Até 10 horas de duração", conectividade: "Wi-Fi 5GHz, Chip 4G e Bluetooth",
      tecnologia: "NFC", visor: "Colorido e Touchscreen", camera: "5.0 Mpixels + LED_Flash"
    },
  ];

  menus: any = [ 
    { id: 1, marca: "Pag Seguro", modelo: "Moderninha pró", preço: 298.00, 
      garantia: "5 Anos", bateria: "Até 6 horas de duração", conectividade: "Wi-Fi, Chip e Bluetooth",
      tecnologia: "NFC", visor: "Colorido e Touchscreen (128 x 32 pixels - LCD)", camera: "--"
    },
    { id: 2, marca: "Pag Seguro", modelo: "MinizinhaNFC", preço: 58.80, 
      garantia: "5 Anos", bateria: "Até 4 horas de duração", conectividade: "Bluetooth",
      tecnologia: "NFC", visor: "Monocromático", camera: "--"
    },
    { id: 3, marca: "Pag Seguro", modelo: "Moderninha Smart 2", preço: 358.80, 
      garantia: "5 Anos", bateria: "Até 10 horas de duração", conectividade: "Wi-Fi 5GHz, Chip 4G e Bluetooth",
      tecnologia: "NFC", visor: "Colorido e Touchscreen", camera: "5.0 Mpixels + LED_Flash"
    },
  ];

  myControl = new FormControl<string | User>('');
  options: User[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];
  filteredOptions: Observable<User[]>;

  /* constructor() { } */

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
  

}
