export function lazyWithSleep<T>(factory: () => Promise<{ default: T }>, delay = 3000) {
    return async () => {
      await new Promise((resolve) => setTimeout(resolve, delay));
      return factory();
    };
  }
  