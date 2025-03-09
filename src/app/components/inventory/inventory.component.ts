import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory',
  imports: [],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent {
  item = {
    itemName:"item 1",
    itemQty:500,
  }
}
