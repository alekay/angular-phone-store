// import Output and EventEmitter
import { Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

// recieve product data,
import { Product } from '../products';



// The @Component() decorator indicates that the following class is a component. @Component() also provides metadata about the component, including its selector, templates, and styles.
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})

export class ProductAlertsComponent implements OnInit {
  // indicates that the propertyvalue passes in from the component's parent
  @Input() product: Product | undefined;
  // allow ProductAlertsComponent to emit an event when the value of notify property changes
  @Output() notify = new EventEmitter();

  ngOnInit() {}
}