import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  const bar = (height: number, opacity = 1) => (
    <div style={{ width: 22, height, borderRadius: 8, background: "white", opacity }} />
  )

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          gap: 12,
          paddingBottom: 45,
          background: "#2a78d6",
        }}
      >
        {bar(45)}
        {bar(73)}
        {bar(96, 0.7)}
      </div>
    ),
    size
  )
}
