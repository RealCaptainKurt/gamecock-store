import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService } from '../item.service';
import { OrderService } from '../order.service';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private items: Observable<ItemService[]>;
  private itemCollection: AngularFirestoreCollection<ItemService>;

  constructor(private afs: AngularFirestore) {
    this.itemCollection = this.afs.collection<ItemService>('items');
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

  getItems(): Observable<ItemService[]> {
    return this.items;
  }

  getNote(id: string): Observable<ItemService> {
    return this.itemCollection.doc<ItemService>(id).valueChanges().pipe(
        take(1),
        map(ItemService => {
          ItemService.id = id;
          return ItemService;
        })
    );
  }

  //TODO: Replace all of these with items

  addNote(note: Note): Promise<DocumentReference> {
    return this.noteCollection.add(note);
  }

  updateNote(note: Note): Promise<void> {
    return this.noteCollection.doc(note.id).update({ title: note.title, content: note.content });
  }

  deleteNote(id: string): Promise<void> {
    return this.noteCollection.doc(id).delete();
  }

  // TODO: Add methods for Orders and maybe Users
}