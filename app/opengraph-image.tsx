import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Altai Ventures — East Bay Rental Homes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#0D1B2A",
          padding: "60px",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            width: 80,
            height: 2,
            backgroundColor: "#C9A87C",
            marginBottom: 40,
          }}
        />

        {/* Main title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 300,
              color: "#FFFFFF",
              letterSpacing: "0.04em",
              lineHeight: 1,
            }}
          >
            Altai Ventures
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            width: 40,
            height: 1,
            backgroundColor: "#C9A87C",
            marginTop: 36,
            marginBottom: 36,
            opacity: 0.6,
          }}
        />

        {/* Subtitle */}
        <div
          style={{
            fontSize: 22,
            color: "#C9A87C",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            fontWeight: 400,
          }}
        >
          East Bay Rental Homes
        </div>

        {/* Location */}
        <div
          style={{
            fontSize: 16,
            color: "rgba(255, 255, 255, 0.45)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginTop: 16,
            fontWeight: 300,
          }}
        >
          Oakland & Castro Valley, California
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            width: 40,
            height: 1,
            backgroundColor: "#C9A87C",
            opacity: 0.4,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
