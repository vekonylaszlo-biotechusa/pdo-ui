// Dedicated entry for compiling and emitting the design system's stylesheet.
// Deliberately NOT imported from index.ts: importing any component must not
// force-load the full compiled CSS as a side effect. Consumers import the
// stylesheet explicitly via "@biotechusa/pdo-ui/dist/styles.css".
import "./styles.css";
