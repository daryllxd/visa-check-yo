/**
 * Simple WontFix definition file
 *
 * This file defines placeholder types for tracking issues
 * that won't be fixed or addressed.
 */

declare namespace WontFix {
  /**
   * Represents a known issue that won't be fixed but should be
   * addressed in the future
   */
  export type Todo = any;

  /**
   * Represents a known issue that won't be fixed and doesn't need
   * to be addressed
   */
  export type NoNeedToCare = any;
}

export = WontFix;
export as namespace WontFix;
