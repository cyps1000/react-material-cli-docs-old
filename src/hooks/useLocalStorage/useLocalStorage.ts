import {
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
  useRef,
  useLayoutEffect
} from "react";

/**
 * Checks if the window exists
 */
const isBrowser = typeof window !== "undefined";

/**
 * Defines a default state setter
 */
const noop = () => {};

/**
 * Defines the parser options type
 */
type parserOptions<T> =
  | {
      raw: true;
    }
  | {
      raw: false;
      serializer: (value: T) => string;
      deserializer: (value: string) => T;
    };

/**
 * Defines the main hook
 */
export const useLocalStorage = <T>(
  key: string,
  initialValue?: T,
  options?: parserOptions<T>
): [T | undefined, Dispatch<SetStateAction<T | undefined>>, () => void] => {
  if (!isBrowser) return [initialValue as T, noop, noop];
  if (!key) throw new Error("useLocalStorage key may not be falsy");

  const deserializer = options
    ? options.raw
      ? (value: any) => value
      : options.deserializer
    : JSON.parse;

  // eslint-disable-next-line
  const initializer = useRef((key: string) => {
    try {
      const serializer = options
        ? options.raw
          ? String
          : options.serializer
        : JSON.stringify;

      const localStorageValue = localStorage.getItem(key);
      if (localStorageValue !== null) {
        return deserializer(localStorageValue);
      } else {
        initialValue && localStorage.setItem(key, serializer(initialValue));
        return initialValue;
      }
    } catch {
      /**
       * If user is in private mode or has storage restriction
       * localStorage can throw. JSON.parse and JSON.stringify
       * can throw, too.
       */
      return initialValue;
    }
  });

  // eslint-disable-next-line
  const [state, setState] = useState<T | undefined>(() =>
    initializer.current(key)
  );

  // eslint-disable-next-line
  useLayoutEffect(() => setState(initializer.current(key)), [key]);

  // eslint-disable-next-line
  const set: Dispatch<SetStateAction<T | undefined>> = useCallback(
    (valOrFunc) => {
      try {
        const newState =
          typeof valOrFunc === "function"
            ? (valOrFunc as Function)(state)
            : valOrFunc;
        if (typeof newState === "undefined") return;
        let value: string;

        if (options)
          if (options.raw)
            if (typeof newState === "string") value = newState;
            else value = JSON.stringify(newState);
          else if (options.serializer) value = options.serializer(newState);
          else value = JSON.stringify(newState);
        else value = JSON.stringify(newState);

        localStorage.setItem(key, value);
        setState(deserializer(value));
      } catch {}
    },
    // eslint-disable-next-line
    [key, setState]
  );

  // eslint-disable-next-line
  const remove = useCallback(() => {
    try {
      localStorage.removeItem(key);
      setState(undefined);
    } catch {}
  }, [key, setState]);

  return [state, set, remove];
};
