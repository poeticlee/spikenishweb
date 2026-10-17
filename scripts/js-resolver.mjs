/**
 * Allows plain `node` to run the Vite source files (whose imports are
 * extensionless, e.g. `from "../data/site"`). Dev-only helper for tests.
 */
export async function resolve(specifier, context, next) {
  try {
    return await next(specifier, context);
  } catch (err) {
    if (specifier.startsWith(".") && !specifier.endsWith(".js")) {
      return next(`${specifier}.js`, context);
    }
    throw err;
  }
}
