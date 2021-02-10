## Pros

- Far, far easier to avoid extremely common typos, like incorrect action types
- Gives dev's a far better understanding of the type of data flowing around
- Much easier to refactor just about anything

## Cons

- Not the best type definition files (especially around redux)
- Tons of generics flying around
- Tons of imports, as just about everything (action creator, action, reducer, store, component)
  - Need to be aware of different types
- Redux inherently functional in nature, tough integration with TS classes
