"use client"

import { useSyncExternalStore } from "react"

import { SIDEBAR_STORAGE_KEY } from "./sidebar-script"

// Collapsed state lives on <html data-sidebar="collapsed"> so CSS can render it before React hydrates.

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-sidebar"] })
  return () => observer.disconnect()
}

export function useSidebarCollapsed() {
  return useSyncExternalStore(
    subscribe,
    () => document.documentElement.dataset.sidebar === "collapsed",
    () => false
  )
}

export function setSidebarCollapsed(collapsed: boolean) {
  const root = document.documentElement
  if (collapsed) root.dataset.sidebar = "collapsed"
  else delete root.dataset.sidebar
  try {
    localStorage.setItem(SIDEBAR_STORAGE_KEY, collapsed ? "collapsed" : "expanded")
  } catch {
    // Storage may be unavailable; the toggle still works for this page.
  }
}

export function toggleSidebar() {
  setSidebarCollapsed(document.documentElement.dataset.sidebar !== "collapsed")
}
