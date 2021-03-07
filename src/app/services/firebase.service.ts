import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { ItemService } from '../item.service';
// import { OrderService } from '../order.service';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Item } from '../modal/item';
import { Order } from '../modal/order';
import { OrderService } from 'unneeded/order.service';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private items: Observable<Item[]>;
  private itemCollection: AngularFirestoreCollection<Item>;
  private orders: Observable<Order[]>;
  private orderCollection: AngularFirestoreCollection<Order>;
  

  constructor(private afs: AngularFirestore) {
    this.itemCollection = this.afs.collection<Item>('items');
    this.items = this.itemCollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
    );
  }

  // ITEM METHODS
  getItems(): Observable<Item[]> {
    return this.items;
  }

  getItem(id: string): Observable<Item> {
    return this.itemCollection.doc<Item>(id).valueChanges().pipe(
        take(1),
        map(item => {
          item.id = id;
          return item;
        })
    );
  }

  addItem(item: Item): Promise<DocumentReference> {
    return this.itemCollection.add(item);
  }

  updateItem(item: Item): Promise<void> {
    return this.itemCollection.doc(item.id).update({ 
      id: item.id, name: item.name, price: item.price,
      category: item.category, photo: item.photo, 
      description: item.description });
  }

  deleteItem(id: string): Promise<void> {
    return this.itemCollection.doc(id).delete();
  }

  getLastItemID(): number {
    let tempItems = this.getItems;
    return tempItems.length;
  }

  getNextItemID(): number {
    let tempItems = this.getItems;
    return tempItems.length + 1;
  }
  // END ITEM METHODS

  // ORDER METHODS
  getOrders(): Observable<Order[]> {
    return this.orders;
  }

  getOrder(id: string): Observable<Order> {
    return this.orderCollection.doc<Order>(id).valueChanges().pipe(
        take(1),
        map(order => {
          order.id = id;
          return order;
        })
    );
  }

  // Used for making a new order within addOrder
  tempOrder: Order;
  newOrder(id:number, name:string, price:number,
    category:string, photo:string, quantity:number,
    amount:number, date:string): Order {
      this.tempOrder.id = id;
      this.tempOrder.name = name;
      this.tempOrder.price = price;
      this.tempOrder.category = category;
      this.tempOrder.photo = photo;
      this.tempOrder.quantity = quantity;
      this.tempOrder.amount = amount;
      this.tempOrder.date = date;
      return this.tempOrder;
    }

  addOrder(item:Item, num:number): Promise<DocumentReference> {
    // Creates the date
    var d = new Date();
		var date = d.getFullYear().toString() + "/" + d.getMonth().toString() + "/" + d.getDate.toString();

    // Creates the order and adds it to the firebase database
    return this.orderCollection.add(this.newOrder(
      this.getNextOrderID(), item.name, item.price, 
      item.category, item.photo, num, 
      (num*item.price), date)
    );
  }

  updateOrder(order: Order): Promise<void> {
    return this.orderCollection.doc(order.id).update({ 
      id: order.id, name: order.name, price: order.price,
      category: order.category, photo: order.photo, 
      quantity: order.quantity, amount: order.amount , date:order.date});
  }

  deleteOrder(id: string): Promise<void> {
    return this.orderCollection.doc(id).delete();
  }

  getLastOrderID(): number {
    let tempOrders = this.getOrders;
    return tempOrders.length;
  }

  getNextOrderID(): number {
    let tempOrders = this.getOrders;
    return tempOrders.length + 1;
  }
  // END OF ORDER METHODS

  // TODO: Add methods for Users
}