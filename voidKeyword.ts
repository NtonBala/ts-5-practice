// * void is rather a keyword than a type and is used to represent the absence of a type.
// * It’s commonly used as a return type of functions that do not actually return a value.
// * It should be understood as: “I'm not going to look at this function return value, if one exists”.
// * It’s like it represents a function with no type returned so there’s nothing to use as its return value.

// * See https://www.typescriptlang.org/docs/handbook/2/functions.html#return-type-void

const f1: () => void = () => {
  return 1;
};

// Essentially next assignment makes no sense because we have no options to use result variable as its type is void:
const result = f1();
