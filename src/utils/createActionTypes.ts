// Create typesafe action types
export function createActionTypes<Prefix extends string, Action extends string>(
    prefix: Prefix,
    actionList: readonly Action[]
  ) {
    const result = {} as { [Key in Action]: `${Prefix}/${Key}` };
    actionList.forEach((action) => {
      result[action] = `${prefix}/${action}`;
    });
    return result;
  }
  