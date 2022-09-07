//     https://github.com/hirezio/observer-spy     //

import { subscribeSpyTo } from '@hirez_io/observer-spy';

it('should filter even numbers and multiply each number by 10', () => {
  
    const result$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(
      filter(n => n % 2 !== 0),
      map(x => x * 10)
    );

    const observerSpy = subscribeSpyTo(result$);

    expect(observerSpy.getValues()).toEqual([10, 30, 50, 70, 90]);

  })
});


// ------------------------------------

import { subscribeSpyTo } from '@hirez_io/observer-spy';

it('should immediately subscribe and spy on Observable ', () => {
  const fakeObservable = of('first', 'second', 'third');

  // get a special observerSpy of type "SubscriberSpy" (with an additional "unsubscribe" method)
  // if you're using TypeScript you can declare it with a generic:
  // const observerSpy: SubscriberSpy<string> ... 
  const observerSpy = subscribeSpyTo(fakeObservable);

  // You can unsubscribe if you need to:
  observerSpy.unsubscribe();


  // EXPECTATIONS: 
  expect(observerSpy.getFirstValue()).toEqual('first');
  expect(observerSpy.receivedNext()).toBe(true);
  expect(observerSpy.getValues()).toEqual(fakeValues);
  expect(observerSpy.getValuesLength()).toEqual(3);
  expect(observerSpy.getFirstValue()).toEqual('first');
  expect(observerSpy.getValueAt(1)).toEqual('second');
  expect(observerSpy.getLastValue()).toEqual('third');
  expect(observerSpy.receivedComplete()).toBe(true);

  // --------------------------------------------------------

  // You can also use this shorthand version:

  expect(subscribeSpyTo(fakeObservable).getFirstValue()).toEqual('first');

  // --------------------------------------------------------

});

// ----------- more in https://github.com/hirezio/observer-spy ----------