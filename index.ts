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
  setTimeout(() => {
    sub.next('keerthi');
  }, 4000);
  if (!sub.closed) sub.next('arumugam');
  sub.complete();
  return () => {
    console.log('subscibe ends');
  };
});

const observer = {
  next: (val) => console.log(val),
  error: (error) => console.log(error),
  complete: () => console.log('completed successfully'),
};

const subscription = Observable$.subscribe(observer);
console.log(' before unsubscribe');
subscription.unsubscribe();
console.log(' after unsubscribe');
// Open the console in the bottom right to see results.
