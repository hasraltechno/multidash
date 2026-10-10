// Records whether the last interaction was a pointer (mouse, touch, pen) or the keyboard, as
// <html data-input="pointer|keyboard">. Focus rings stay for keyboard users but are hidden after a
// click — e.g. when a menu closes and returns focus to its trigger (see app/globals.css).

/** Inline <head> script, so it's active before React hydrates. */
export const inputModalityScript = `(function(){var r=document.documentElement;function s(v){if(r.dataset.input!==v)r.dataset.input=v}addEventListener("pointerdown",function(){s("pointer")},true);addEventListener("keydown",function(e){if(!e.metaKey&&!e.ctrlKey&&!e.altKey)s("keyboard")},true)})()`
