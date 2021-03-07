import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { ItemService } from '../item.service';
// import { OrderService } from '../order.service';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Item } from '../modal/item';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private items: Observable<Item[]>;
  private itemCollection: AngularFirestoreCollection<Item>;

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

  getLastID(): number {
    let tempItems = this.getItems;
    return tempItems.length;
  }

  getNextID(): number {
    let tempItems = this.getItems;
    return tempItems.length + 1;
  }
  // END ITEM METHODS

  // TODO: Add methods for Orders and maybe Users
}