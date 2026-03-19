import { C } from "../data/constants";

export default function SectionLabel({ children, light = false }) {
  const color = light ? C.gold : C.gold;
  return (
    <div
      style={{
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: color,
        marginBottom: 12,
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      {children}
      <span
        style={{
          width: 40,
          height: 1,
          background: color,
          display: "inline-block",
        }}
      />
    </div>
  );
}
