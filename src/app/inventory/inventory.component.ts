import { InventoryService } from './inventory.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  title = "List of Items";
  inventoryItems = ["course1", "course2", "course3"];

  constructor(service: InventoryService) { 
    
  }
}
