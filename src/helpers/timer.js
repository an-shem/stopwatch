import { Observable } from 'rxjs';

const timer = new Observable((observer) => {
  let counter = 1;
  setInterval(() => {
    observer.next(counter++);
  }, 1000);
});
