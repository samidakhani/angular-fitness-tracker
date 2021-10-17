import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Exercise } from "./exercise.model";

@Injectable()
export class TraningService {
  public changeExercise: Subject<Exercise> = new Subject<Exercise>();
  public changeExercises: Subject<Exercise[]> = new Subject<Exercise[]>();
  public finishedExercises: Subject<Exercise[]> = new Subject<Exercise[]>();
  private availableExercises:  Exercise[] =[];
  private ongoingExercise: Exercise;

  constructor(private firestore: AngularFirestore) {}

  fetchAvailableExercises() {
   this.firestore.collection('availableExercises')
    .snapshotChanges().pipe(
      map(documents => {
      return documents.map(document => {
        return {
          id: document.payload.doc.id,
          name: document.payload.doc.data()['name'],
          calories: document.payload.doc.data()['calories'],
          duration: document.payload.doc.data()['duration']
        }
      });
    })).subscribe((exercises: Exercise[]) => {
      this.availableExercises = exercises;
      this.changeExercises.next(this.availableExercises);
    });
  }

  startExercise(exerciseId: string) {
    let currentExercise =this.availableExercises.
                          find(exercise => { return exerciseId === exercise.id});
    this.ongoingExercise = currentExercise;
    this.changeExercise.next(currentExercise);
  }

  completeExercise() {
    const exercise = {...this.ongoingExercise};
    exercise.date = new Date();
    exercise.status = 'completed';

    this.addExerciseToDatabase(exercise);
    this.changeExercise.next(null);
  }

  cancelExercise(progress: number) {
    const exercise = {...this.ongoingExercise};
    exercise.date = new Date();
    exercise.status = 'canceled';
    exercise.calories = (exercise.calories * progress) / 100;
    exercise.duration = (exercise.duration * progress) / 100;

    this.addExerciseToDatabase(exercise);
    this.changeExercise.next(null);
  }

  getOngoingExercise() {
    return {...this.ongoingExercise};
  }

  fetchExercises() {
    this.firestore.collection('finishedExercise').valueChanges()
      .subscribe((exercise: Exercise[]) => {
        this.finishedExercises.next(exercise);
      });
  }

  addExerciseToDatabase(exercise: Exercise) {
    this.firestore.collection('finishedExercise').add(exercise);
  }
}
