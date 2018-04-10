# jason
`
import j from 'jason';

const obj = j.a(
  j.b(
    j.c(123),
    j.d('abc'),
    j.e([1, 2, 3])
    )
  );

//==>
  {
    a: {
      b: {
        c: 123,
        d: 'abc',
        e: [1, 2, 3]
      }
    }
  };
`
