/**
 * Runtime `renderHook` helper that picks a compatible implementation based on
 * the installed testing-library packages:
 *
 * - Prefer `@testing-library/react`'s `renderHook` (available in newer RTL).
 * - Fallback to `@testing-library/react-hooks` for older setups.
 *
 * This keeps tests working across React versions (React 16/17/18 with RHTL,
 * React 18/19 with RTL's `renderHook`).
 */

import * as rtl from "@testing-library/react";
import * as rhtl from "@testing-library/react-hooks";

type ActFn = (cb: () => void) => void;

type RenderHookResult<T = unknown> = {
	result: { current: T };
};

// Generic renderHook signature used by our tests: accepts a callback returning
// a value and returns an object with a `result.current` property.
let renderHook: <T = unknown>(cb: () => T) => RenderHookResult<T>;
let actImpl: ActFn | undefined;

type RTLLike = {
	renderHook?: <T = unknown>(cb: () => T) => RenderHookResult<T>;
	act?: ActFn;
};

if (typeof (rtl as unknown as RTLLike).renderHook === "function") {
	const r = rtl as unknown as Required<RTLLike>;
	renderHook = r.renderHook;
	actImpl = r.act;
} else {
	const h = rhtl as unknown as Required<RTLLike>;
	renderHook = h.renderHook;
	actImpl = h.act;
}

const act: ActFn = (cb: () => void) => {
	if (actImpl) return actImpl(cb);
	// Fallback synchronous runner for environments without `act`.
	return cb();
};

export { renderHook, act };
export default renderHook;
