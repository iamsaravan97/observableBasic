import './style.css';

import { of, map, Observable } from 'rxjs';

const anotherObservable$ = new Observable<string>((sub) => {
  sub.next('kowsi');
  sub.next('naks');
  sub.next('sathya');
});

const Observable$ = new Observable<string>((sub) => {
  sub.next('sarvana');
  sub.next('sarala');
  sub.next('sandy');
  sub.next('keerthi');
  if (!sub.closed) sub.next('arumugam');
  sub.add(() => anotherObservable$.subscribe(observer));
  sub.unsubscribe();
  sub.error('error occour');
  sub.complete();
});

const observer = {
  next: (val) => console.log(val),
  error: (error) => console.log(error),
  complete: () => console.log('completed successfully'),
};

const subscription = Observable$.subscribe(observer);
// Open the console in the bottom right to see results.
