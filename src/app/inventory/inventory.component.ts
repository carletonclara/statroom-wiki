import { InventoryService } from './inventory.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  title = "List of Items";
  inventoryItems;

  constructor(service: InventoryService) { 
    this.inventoryItems = service.getInventoryItems();
  }
}
