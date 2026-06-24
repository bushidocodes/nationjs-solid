/**
 * Minimal ambient type declarations for `@solid/react`, which ships no types
 * of its own. Only the exports consumed by this project are declared; extend
 * this file as more of the library's surface is used.
 */
declare module "@solid/react" {
  import type { FC, ReactNode } from "react";

  /** A linked-data term yielded by `List`'s render-prop children. */
  export interface SolidTerm {
    id: string;
    [key: string]: unknown;
  }

  /** Renders its children only while a user is logged in. */
  export const LoggedIn: FC<{ children?: ReactNode }>;

  /** Renders its children only while no user is logged in. */
  export const LoggedOut: FC<{ children?: ReactNode }>;

  /** Solid log in / log out button. Accepts `className` so it can be styled. */
  export const AuthButton: FC<{
    popup?: string;
    className?: string;
    children?: ReactNode;
  }>;

  /** Resolves a data path to a string value. */
  export const Value: FC<{ src: string; className?: string }>;

  /** Resolves a data path to an image. */
  export const Image: FC<{ src: string; className?: string }>;

  /** Iterates a data path, rendering each term via its render-prop children. */
  export const List: FC<{
    src: string;
    container?: (items: ReactNode[]) => ReactNode;
    children?: (item: SolidTerm) => ReactNode;
  }>;

  /** Injects the logged-in user's WebID into the wrapped component as `webId`. */
  export function withWebId<P extends { webId?: string }>(
    Component: FC<P>,
  ): FC<Omit<P, "webId">>;
}
