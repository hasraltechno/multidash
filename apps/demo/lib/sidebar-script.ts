// Server-safe part of the sidebar state (no React), so the root layout can inline the script.

export const SIDEBAR_STORAGE_KEY = "multidash-sidebar"

/** Inline <head> script: restores the minimized sidebar before first paint. */
export const sidebarScript = `(function(){try{if(localStorage.getItem(${JSON.stringify(
  SIDEBAR_STORAGE_KEY
)})==="collapsed")document.documentElement.setAttribute("data-sidebar","collapsed")}catch(e){}})()`
